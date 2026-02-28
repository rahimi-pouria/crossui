export interface controllerStepperType {
    id: number | string,
    title: string,
    color: string,
    icon: string,
    size: number,
}

export interface customStepperProps {
    errorTitle?: string;
    finishTitle: string;
    stepperLabel: string[];
    controllerStepper: controllerStepperType[];
}