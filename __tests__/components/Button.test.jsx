import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Button from '../../src/components/button/Button.tsx';

test('Button is rendered', () => {
  const handleClick = jest.fn();

  render(<Button title={'next'} isDisable={false} onClick={handleClick}/>);
  const buttonElement = screen.getByTestId('next-button');

  expect(buttonElement).toBeInTheDocument();
});

test('Display button title correctly', () => {
  const handleClick = jest.fn();

  render(<Button title={'next'} isDisable={false} onClick={handleClick}/>);
  const buttonTitle = screen.getByText(/next/i);

  expect(buttonTitle).toHaveTextContent('next');
});

test('Button is clickable', () => {
  const handleClick = jest.fn();

  render(<Button title={'next'} isDisable={false} onClick={handleClick}/>);
  const buttonElement = screen.getByTestId('next-button');
  fireEvent.click(buttonElement);

  expect(handleClick).toHaveBeenCalledTimes(1);
});

test('Button is not clickable', () => {
  const handleClick = jest.fn();

  render(<Button title={'next'} isDisable={true} onClick={handleClick}/>);
  const buttonElement = screen.getByTestId('next-button');
  fireEvent.click(buttonElement);

  expect(handleClick).toHaveBeenCalledTimes(0);
});