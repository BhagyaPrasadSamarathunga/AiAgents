import React, { useEffect, useState } from 'react';
import Styles from '../AiBotWizard.module.css';
import Button from '../../../components/button/Button.tsx';

type WizardFooterProps = {
    isBackDisabled: boolean;
    isNextDisabled: boolean;
    isEnd: boolean;
    onBackClick: () => void;
    onNextClick: () => void;
}

const WizardFooter:React.FC<WizardFooterProps> = ({ isBackDisabled, isNextDisabled, isEnd, onBackClick, onNextClick }) => {
  
  const [nextButtonTitle, setNextButtonTitle] = useState<string>('Next');

  useEffect(() => {
    if(isEnd) {
      setNextButtonTitle('Submit');
    } else {
      setNextButtonTitle('Next');
    }

  },[isEnd]);

    return(
      <div className={Styles.footerButtonContainer} data-testid={'wizard-footer'}>
        <Button 
          testID={'wizard-footer-back'}
          title='Back' 
          isDisable ={isBackDisabled} 
          style={Styles.navigationButton} 
          onClick={onBackClick}
        />
        <Button 
          testID={'wizard-footer-next'}
          title={nextButtonTitle}
          isDisable ={isNextDisabled}
          style={Styles.navigationButton}  
          onClick={onNextClick}
        />
      </div>
    )
}

export default WizardFooter;