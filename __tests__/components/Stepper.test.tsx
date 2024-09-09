import React from 'react';
import { render, screen } from '@testing-library/react';
import Stepper from '../../src/components/stepper/Stepper';
import { BLUE_100, BLUE_200, GRAY_150, GRAY_600 } from '../../src/theme/colors';

const steps = [{ label: 'Step 1' }, { label: 'Step 2' }, { label: 'Step 3' }];

test('Stepper is rendered', () => {

  render(
    <Stepper 
        currentStep={0} 
        steps={steps}
        style={{backgroundColor: GRAY_600}}
        activeColor={BLUE_100}
        inActiveColor={GRAY_150}
        completedColor={BLUE_200}
    />
  );

  const stepperComponent = screen.getByTestId('stepper');

  expect(stepperComponent).toBeInTheDocument();
});
