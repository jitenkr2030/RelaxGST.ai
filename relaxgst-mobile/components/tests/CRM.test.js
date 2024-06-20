import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { CRMProvider } from '../context/CRMContext';
import CRMList from '../components/CRM/CRMList';
import CRMDetail from '../components/CRM/CRMDetail';
import CreateCRM from '../components/CRM/CreateCRM';

test('renders CRM list', () => {
  const { getByText } = render(
    <CRMProvider>
      <CRMList />
    </CRMProvider>
  );
  expect(getByText('CRM List')).toBeTruthy();
});

test('renders CRM detail', () => {
  const { getByText } = render(
    <CRMProvider>
      <CRMDetail route={{ params: { id: 1 } }} />
    </CRMProvider>
  );
  expect(getByText('CRM Detail')).toBeTruthy();
});

test('creates CRM entry', () => {
  const { getByPlaceholderText, getByText } = render(
    <CRMProvider>
      <CreateCRM />
    </CRMProvider>
  );
  fireEvent.changeText(getByPlaceholderText('Name'), 'Test CRM');
  fireEvent.changeText(getByPlaceholderText('Details'), 'Test details');
  fireEvent.press(getByText('Create'));
  expect(getByText('CRM List')).toBeTruthy();
});
