import api from './api';

const reportingService = {
  fetchReports: async () => {
    const response = await api.get('/reports');
    return response.data;
  },
  fetchReport: async (id) => {
    const response = await api.get(`/reports/${id}`);
    return response.data;
  },
  createReport: async (reportData) => {
    const response = await api.post('/reports', reportData);
    return response.data;
  },
};

export { reportingService };
