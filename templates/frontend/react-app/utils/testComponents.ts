import React, { ReactElement, PropsWithChildren } from 'react'
import { render, RenderOptions, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import { MemoryRouter } from 'react-router-dom'
import { I18nextProvider } from 'react-i18next'
import i18n from 'i18next'

type AutoTestOptions = {
    props?: Record<string, any>
    router?: boolean
    i18n?: boolean | string
    a11y?: boolean
    snapshot?: boolean
}

function createI18n(locale: string) {
    const instance = i18n.createInstance()
    instance.init({
        lng: locale,
        fallbackLng: 'en',
        resources: {
            en: { translation: {} }
        }
    })
    return instance
}

function createWrapper(opt: AutoTestOptions) {
    return function Wrapper({ children }: PropsWithChildren) {
        let node = children

        if (opt.router) {
            node = <MemoryRouter>{node}</MemoryRouter>
        }

        if (opt.i18n) {
            const locale = typeof opt.i18n === 'string' ? opt.i18n : 'en'
            node = <I18nextProvider i18n={createI18n(locale)}>{node}</I18nextProvider>
        }

        return <>{node}</>
    }
}

export function autoTestComponent(
    Component: React.ComponentType<any>,
    options: AutoTestOptions = {}
) {
    const props = options.props || {}

    const wrapper = createWrapper(options)

    const renderResult = render(
        <Component {...props} />,
    { wrapper } as RenderOptions
)

    const { container } = renderResult

    Object.entries(props).forEach(([key, value]) => {
        expect((renderResult.container.firstChild as any)?.props?.[key]).not.toBeUndefined
    })

    if (options.a11y) {
        const aria = container.querySelectorAll(
            '[role],[aria-label],[aria-labelledby],[aria-describedby]'
        )
        expect(aria.length).toBeGreaterThanOrEqual(0)
    }

    if (options.snapshot !== false) {
        expect(container).toMatchSnapshot()
    }

    return renderResult
}
