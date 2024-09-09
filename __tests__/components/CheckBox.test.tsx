import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import CheckBox from '../../src/components/checkBox/CheckBox';

test('CheckBox is rendered', () => {
  const handleClick = jest.fn();

  render(<CheckBox title={'Select All'} isChecked={false} onClick={handleClick}/>);
  const checkBoxElement = screen.getByTestId('checkBox');

  expect(checkBoxElement).toBeInTheDocument();
});

test('Display checkBox title correctly', () => {
    const handleClick = jest.fn();
  
    render(<CheckBox title={'Select All'} isChecked={false} onClick={handleClick}/>);
    const checkBoxTitle = screen.getByText(/Select All/i);
  
    expect(checkBoxTitle).toHaveTextContent('Select All');
});

test('CheckBox is Clickable', () => {
    const handleClick = jest.fn();
  
    render(<CheckBox title={'Select All'} isChecked={false} onClick={handleClick}/>);
    const checkBoxElement = screen.getByTestId('checkBox-input');
    fireEvent.click(checkBoxElement);
  
    expect(handleClick).toHaveBeenCalledTimes(1);
});
