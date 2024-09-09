import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Intent from '../../../src/pages/AiBotWizard/components/intents/Intent';

test('Intent is rendered', () => {
  const handleIntentClick = jest.fn();

  render(
    <Intent 
      id = {'34d7831e137a4016a55f98926800a643'}
      name = {'Greeting'}
      description = {'The visitor says hello.'}
      trainingData = {{expressionCount:145, expressions:[{id: "6399fd6989984c7b871c6301744b0af5",text: "Hello"},{id: "68bafebc2a2e4843a56a221c2ceb12ed",text: "Hi"}]}}
      reply = {{
        id: "f35d7e0936a44102bac9cb96c81eec3b",
        text: "Hello :) How can I help you?"
      }}
      selected = {true}
      onClick = {handleIntentClick}
    />
  );

  const intent = screen.getByTestId('intent-34d7831e137a4016a55f98926800a643');
  expect(intent).toBeInTheDocument();
});

test('Intent is clickable', () => {
  const handleIntentClick = jest.fn();

  render(
    <Intent 
      id = {'34d7831e137a4016a55f98926800a643'}
      name = {'Greeting'}
      description = {'The visitor says hello.'}
      trainingData = {{expressionCount:145, expressions:[{id: "6399fd6989984c7b871c6301744b0af5",text: "Hello"},{id: "68bafebc2a2e4843a56a221c2ceb12ed",text: "Hi"}]}}
      reply = {{
        id: "f35d7e0936a44102bac9cb96c81eec3b",
        text: "Hello :) How can I help you?"
      }}
      selected = {true}
      onClick = {handleIntentClick}
    />
  );

  const intent = screen.getByTestId('intent-34d7831e137a4016a55f98926800a643');
  fireEvent.click(intent);

  expect(handleIntentClick).toHaveBeenCalledTimes(1);
});

test('Intent has the correct title', () => {
  const handleIntentClick = jest.fn();

  render(
    <Intent 
      id = {'34d7831e137a4016a55f98926800a643'}
      name = {'Greeting'}
      description = {'The visitor says hello.'}
      trainingData = {{expressionCount:145, expressions:[{id: "6399fd6989984c7b871c6301744b0af5",text: "Hello"},{id: "68bafebc2a2e4843a56a221c2ceb12ed",text: "Hi"}]}}
      reply = {{
        id: "f35d7e0936a44102bac9cb96c81eec3b",
        text: "Hello :) How can I help you?"
      }}
      selected = {true}
      onClick = {handleIntentClick}
    />
  );

  const intentTitle = screen.getByText(/Greeting/i);

  expect(intentTitle).toHaveTextContent('Greeting');
});

test('Intent has the correct description', () => {
  const handleIntentClick = jest.fn();

  render(
    <Intent 
      id = {'34d7831e137a4016a55f98926800a643'}
      name = {'Greeting'}
      description = {'The visitor says hello.'}
      trainingData = {{expressionCount:145, expressions:[{id: "6399fd6989984c7b871c6301744b0af5",text: "Hello"},{id: "68bafebc2a2e4843a56a221c2ceb12ed",text: "Hi"}]}}
      reply = {{
        id: "f35d7e0936a44102bac9cb96c81eec3b",
        text: "Hello :) How can I help you?"
      }}
      selected = {true}
      onClick = {handleIntentClick}
    />
  );

  const intentDescription = screen.getByText(/The visitor says hello./i);

  expect(intentDescription).toHaveTextContent('The visitor says hello.');
});

