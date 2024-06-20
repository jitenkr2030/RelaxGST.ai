import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getReports, getReport, createReport } from '../services/reportingService';

export const fetchReports = createAsyncThunk('reporting/fetchReports', async () => {
  const response = await getReports();
  return response;
});

export const fetchReport = createAsyncThunk('reporting/fetchReport', async (id) => {
  const response = await getReport(id);
  return response;
});

export const addReport = createAsyncThunk('reporting/addReport', async (report) => {
  const response = await createReport(report);
  return response;
});

const reportingSlice = createSlice({
  name: 'reporting',
  initialState: {
    reports: [],
    report: null,
    status: 'idle',
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchReports.fulfilled, (state, action) => {
        state.reports = action.payload;
      })
      .addCase(fetchReport.fulfilled, (state, action) => {
        state.report = action.payload;
      })
      .addCase(addReport.fulfilled, (state, action) => {
        state.reports.push(action.payload);
      });
  },
});

export default reportingSlice.reducer;
