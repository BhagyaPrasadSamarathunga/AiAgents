import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import WizardFooter from '../../../src/pages/AiBotWizard/components/WizardFooter';

test('Wizard footer is rendered', () => {
  const handleBackClick = jest.fn();
  const handleNextClick = jest.fn();

  render(
    <WizardFooter 
      isEnd={false}
      isBackDisabled={true} 
      isNextDisabled={false} 
      onBackClick={handleBackClick}  
      onNextClick={handleNextClick}
    />
  );

  const wizardComponent = screen.getByTestId('wizard-footer');
  expect(wizardComponent).toBeInTheDocument();
});

test('Back button is disabled', () => {
  const handleBackClick = jest.fn();
  const handleNextClick = jest.fn();

  render(
    <WizardFooter 
      isEnd={false}
      isBackDisabled={true} 
      isNextDisabled={false} 
      onBackClick={handleBackClick}  
      onNextClick={handleNextClick}
    />
  );

  const backButton = screen.getByTestId('wizard-footer-back');
  fireEvent.click(backButton);

  expect(handleBackClick).toHaveBeenCalledTimes(0);
});

test('Next button is clickable', () => {
  const handleBackClick = jest.fn();
  const handleNextClick = jest.fn();

  render(
    <WizardFooter 
      isEnd={false}
      isBackDisabled={true} 
      isNextDisabled={false} 
      onBackClick={handleBackClick}  
      onNextClick={handleNextClick}
    />
  );

  const nextButton = screen.getByTestId('wizard-footer-next');
  fireEvent.click(nextButton);

  expect(handleNextClick).toHaveBeenCalledTimes(1);
});

