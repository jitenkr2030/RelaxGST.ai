import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getCRMEntries, getCRMEntry, createCRMEntry } from '../services/crmService';

export const fetchCRMEntries = createAsyncThunk('crm/fetchCRMEntries', async () => {
  const response = await getCRMEntries();
  return response;
});

export const fetchCRMEntry = createAsyncThunk('crm/fetchCRMEntry', async (id) => {
  const response = await getCRMEntry(id);
  return response;
});

export const addCRMEntry = createAsyncThunk('crm/addCRMEntry', async (entry) => {
  const response = await createCRMEntry(entry);
  return response;
});

const crmSlice = createSlice({
  name: 'crm',
  initialState: {
    entries: [],
    entry: null,
    status: 'idle',
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCRMEntries.fulfilled, (state, action) => {
        state.entries = action.payload;
      })
      .addCase(fetchCRMEntry.fulfilled, (state, action) => {
        state.entry = action.payload;
      })
      .addCase(addCRMEntry.fulfilled, (state, action) => {
        state.entries.push(action.payload);
      });
  },
});

export default crmSlice.reducer;
