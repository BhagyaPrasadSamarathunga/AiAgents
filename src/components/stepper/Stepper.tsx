import React from 'react';
import { Stepper as RSteper } from 'react-form-stepper';
import { StepDTO } from 'react-form-stepper/dist/components/Step/StepTypes';

type StepperProps = {
    currentStep:number;
    steps:StepDTO[];
    style: React.CSSProperties;
    activeColor:string;
    inActiveColor:string;
    completedColor:string;
}
const Stepper:React.FC<StepperProps> = ({currentStep, steps, style, activeColor, inActiveColor, completedColor}) => {

    return(
        <div style={style} data-testid={'stepper'}>
            <RSteper
                steps={steps}
                activeStep={currentStep}
                styleConfig={{activeBgColor: activeColor, inactiveBgColor: inActiveColor, completedBgColor: completedColor, labelFontSize: 16}}
                connectorStateColors={true}
                connectorStyleConfig={{activeColor: activeColor, completedColor: completedColor, inActiveColor: inActiveColor}}
            />
        </div>
    )

}
export default Stepper;