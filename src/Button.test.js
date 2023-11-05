// src/Button.test.js
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button from './Button';

test('button click should trigger onClick event', () => {
  const onClickMock = jest.fn();
  const { getByText } = render(<Button onClick={onClickMock} label="Click me" />);
  const button = getByText('Click me');
  fireEvent.click(button);
  expect(onClickMock).toHaveBeenCalledTimes(1);
});
