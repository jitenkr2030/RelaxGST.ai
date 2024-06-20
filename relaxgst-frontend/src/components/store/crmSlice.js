import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { crmService } from '../services/crmService';

export const fetchCRMs = createAsyncThunk('crm/fetchCRMs', async () => {
  const crms = await crmService.fetchCRMs();
  return crms;
});

export const fetchCRM = createAsyncThunk('crm/fetchCRM', async (id) => {
  const crm = await crmService.fetchCRM(id);
  return crm;
});

export const createCRM = createAsyncThunk('crm/createCRM', async (crmData) => {
  const crm = await crmService.createCRM(crmData);
  return crm;
});

const crmSlice = createSlice({
  name: 'crm',
  initialState: {
    crms: [],
    crm: null,
    loading: false,
  },
  reducers: {},
  extraReducers: {
    [fetchCRMs.pending]: (state) => {
      state.loading = true;
    },
    [fetchCRMs.fulfilled]: (state, action) => {
      state.crms = action.payload;
      state.loading = false;
    },
    [fetchCRMs.rejected]: (state) => {
      state.loading = false;
    },
    [fetchCRM.pending]: (state) => {
      state.loading = true;
    },
    [fetchCRM.fulfilled]: (state, action) => {
      state.crm = action.payload;
      state.loading = false;
    },
    [fetchCRM.rejected]: (state) => {
      state.loading = false;
    },
    [createCRM.pending]: (state) => {
      state.loading = true;
    },
    [createCRM.fulfilled]: (state) => {
      state.loading = false;
    },
    [createCRM.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export default crmSlice.reducer;
