import React from 'react';
import Stepper from '../../../components/stepper/Stepper';
import { BLUE_100, BLUE_200, GRAY_150, GRAY_600 } from '../../../theme/colors';


type WizardHeaderProps = {
    currentStep: number;
    steps: Object[];
}

const WizardHeader:React.FC<WizardHeaderProps> = ({ currentStep, steps }) => {
    return(
      <Stepper 
        currentStep={currentStep} 
        steps={steps}
        style={{backgroundColor: GRAY_600, width: '100%'}}
        activeColor={BLUE_100}
        inActiveColor={GRAY_150}
        completedColor={BLUE_200}
      />
    )
}

export default WizardHeader;