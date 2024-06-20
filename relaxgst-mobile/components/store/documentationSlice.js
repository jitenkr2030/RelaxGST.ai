import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getDocuments, getDocument, createDocument } from '../services/documentationService';

export const fetchDocuments = createAsyncThunk('documentation/fetchDocuments', async () => {
  const response = await getDocuments();
  return response;
});

export const fetchDocument = createAsyncThunk('documentation/fetchDocument', async (id) => {
  const response = await getDocument(id);
  return response;
});

export const addDocument = createAsyncThunk('documentation/addDocument', async (document) => {
  const response = await createDocument(document);
  return response;
});

const documentationSlice = createSlice({
  name: 'documentation',
  initialState: {
    documents: [],
    document: null,
    status: 'idle',
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDocuments.fulfilled, (state, action) => {
        state.documents = action.payload;
      })
      .addCase(fetchDocument.fulfilled, (state, action) => {
        state.document = action.payload;
      })
      .addCase(addDocument.fulfilled, (state, action) => {
        state.documents.push(action.payload);
      });
  },
});

export default documentationSlice.reducer;
