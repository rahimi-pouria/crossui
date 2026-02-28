import * as React from 'react';
export interface CustomButtonProps {
    id: string | number,
    title: string,
    variant: 'text' | 'contained' | 'outlined',
    loading: boolean,
    loadingIndicator: string,
    sizeBtn: string | 'small' | 'medium' | 'large',
    customClassBtn: string
    disabled: boolean,
    color: 'success' | 'error' | 'secondary' | 'primary' | string
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}