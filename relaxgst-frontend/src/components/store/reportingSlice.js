import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { reportingService } from '../services/reportingService';

export const fetchReports = createAsyncThunk('reporting/fetchReports', async () => {
  const reports = await reportingService.fetchReports();
  return reports;
});

export const fetchReport = createAsyncThunk('reporting/fetchReport', async (id) => {
  const report = await reportingService.fetchReport(id);
  return report;
});

export const createReport = createAsyncThunk('reporting/createReport', async (reportData) => {
  const report = await reportingService.createReport(reportData);
  return report;
});

const reportingSlice = createSlice({
  name: 'reporting',
  initialState: {
    reports: [],
    report: null,
    loading: false,
  },
  reducers: {},
  extraReducers: {
    [fetchReports.pending]: (state) => {
      state.loading = true;
    },
    [fetchReports.fulfilled]: (state, action) => {
      state.reports = action.payload;
      state.loading = false;
    },
    [fetchReports.rejected]: (state) => {
      state.loading = false;
    },
    [fetchReport.pending]: (state) => {
      state.loading = true;
    },
    [fetchReport.fulfilled]: (state, action) => {
      state.report = action.payload;
      state.loading = false;
    },
    [fetchReport.rejected]: (state) => {
      state.loading = false;
    },
    [createReport.pending]: (state) => {
      state.loading = true;
    },
    [createReport.fulfilled]: (state) => {
      state.loading = false;
    },
    [createReport.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export default reportingSlice.reducer;
