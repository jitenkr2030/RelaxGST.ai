import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { ReportingProvider } from '../context/ReportingContext';
import ReportList from '../components/Reporting/ReportList';
import ReportDetail from '../components/Reporting/ReportDetail';
import CreateReport from '../components/Reporting/CreateReport';

test('renders report list', () => {
  const { getByText } = render(
    <ReportingProvider>
      <ReportList />
    </ReportingProvider>
  );
  expect(getByText('Report List')).toBeTruthy();
});

test('renders report detail', () => {
  const { getByText } = render(
    <ReportingProvider>
      <ReportDetail route={{ params: { id: 1 } }} />
    </ReportingProvider>
  );
  expect(getByText('Report Detail')).toBeTruthy();
});

test('creates report', () => {
  const { getByPlaceholderText, getByText } = render(
    <ReportingProvider>
      <CreateReport />
    </ReportingProvider>
  );
  fireEvent.changeText(getByPlaceholderText('Title'), 'Test Report');
  fireEvent.changeText(getByPlaceholderText('Content'), 'Test content');
  fireEvent.press(getByText('Create'));
  expect(getByText('Report List')).toBeTruthy();
});
