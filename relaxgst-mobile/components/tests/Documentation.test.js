import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { DocumentationProvider } from '../context/DocumentationContext';
import DocumentList from '../components/Documentation/DocumentList';
import DocumentDetail from '../components/Documentation/DocumentDetail';
import CreateDocument from '../components/Documentation/CreateDocument';

test('renders document list', () => {
  const { getByText } = render(
    <DocumentationProvider>
      <DocumentList />
    </DocumentationProvider>
  );
  expect(getByText('Document List')).toBeTruthy();
});

test('renders document detail', () => {
  const { getByText } = render(
    <DocumentationProvider>
      <DocumentDetail route={{ params: { id: 1 } }} />
    </DocumentationProvider>
  );
  expect(getByText('Document Detail')).toBeTruthy();
});

test('creates document', () => {
  const { getByPlaceholderText, getByText } = render(
    <DocumentationProvider>
      <CreateDocument />
    </DocumentationProvider>
  );
  fireEvent.changeText(getByPlaceholderText('Title'), 'Test Document');
  fireEvent.changeText(getByPlaceholderText('Content'), 'Test content');
  fireEvent.press(getByText('Create'));
  expect(getByText('Document List')).toBeTruthy();
});
