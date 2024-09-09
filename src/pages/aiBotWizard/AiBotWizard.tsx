import {  useEffect, useState } from 'react';
import IntentList from './components/intents/IntentList.tsx';
import Styles from './AiBotWizard.module.css';
import WizardHeader from './components/WizardHeader.tsx';
import WizardFooter from './components/WizardFooter.tsx';

const STEPS = [{ label: 'Step 1' }, { label: 'Step 2' }, { label: 'Step 3' }];

const AiBotWizard:React.FC  = () => {
    const[currentStep, setCurrentStep] = useState<number>(0);
    const[isBackDisabled, setIsBackDisabled] = useState<boolean>(true);
    const[isNextDisabled, setIsNextDisabled] = useState<boolean>(false);
    const[isEnd, setIsEnd] = useState<boolean>(false);

    const handelNextClick = () => {
        if(currentStep < STEPS.length) {
            setCurrentStep(currentStep+1);
        }
    }

    const handelBackClick = () => {
        if(currentStep > 0) 
        setCurrentStep(currentStep-1);
    }

    useEffect(() => {
        if(currentStep < (STEPS.length-1)) {
            setIsNextDisabled(false);
        } else {
            setIsNextDisabled(true);
        }

        if(currentStep > 0) {
            setIsBackDisabled(false);
        } else {
            setIsBackDisabled(true);
        }
        if(currentStep === (STEPS.length-1)) {
            setIsEnd(true);
        } else {
            setIsEnd(false);
        }

    },[currentStep])

    const renderStepContent = (step: number) => {
        switch (step) {
            case 0: 
                return <IntentList />;
            case 1: 
                return <div className={Styles.stepContainer} />;
            case 2:
                return <div className={Styles.stepContainer}/>;
        }
    }

    return(
        <div className={Styles.container}>
            <div className={Styles.wizardHeader}>
                <WizardHeader currentStep={currentStep} steps={STEPS} />
            </div>
            <div className={Styles.wizardContent}>
                {renderStepContent(currentStep)}
            </div>
           <div className={Styles.wizardFooter}>
                <WizardFooter 
                    isEnd={isEnd}
                    isBackDisabled={isBackDisabled} 
                    isNextDisabled={isNextDisabled} 
                    onBackClick={handelBackClick}  
                    onNextClick={handelNextClick}
                />
           </div>
        </div>
    )
}
export default AiBotWizard