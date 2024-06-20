import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { documentationService } from '../services/documentationService';

export const fetchDocuments = createAsyncThunk('documentation/fetchDocuments', async () => {
  const documents = await documentationService.fetchDocuments();
  return documents;
});

export const fetchDocument = createAsyncThunk('documentation/fetchDocument', async (id) => {
  const document = await documentationService.fetchDocument(id);
  return document;
});

export const createDocument = createAsyncThunk('documentation/createDocument', async (documentData) => {
  const document = await documentationService.createDocument(documentData);
  return document;
});

const documentationSlice = createSlice({
  name: 'documentation',
  initialState: {
    documents: [],
    document: null,
    loading: false,
  },
  reducers: {},
  extraReducers: {
    [fetchDocuments.pending]: (state) => {
      state.loading = true;
    },
    [fetchDocuments.fulfilled]: (state, action) => {
      state.documents = action.payload;
      state.loading = false;
    },
    [fetchDocuments.rejected]: (state) => {
      state.loading = false;
    },
    [fetchDocument.pending]: (state) => {
      state.loading = true;
    },
    [fetchDocument.fulfilled]: (state, action) => {
      state.document = action.payload;
      state.loading = false;
    },
    [fetchDocument.rejected]: (state) => {
      state.loading = false;
    },
    [createDocument.pending]: (state) => {
      state.loading = true;
    },
    [createDocument.fulfilled]: (state) => {
      state.loading = false;
    },
    [createDocument.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export default documentationSlice.reducer;
