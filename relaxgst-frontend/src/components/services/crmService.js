import api from './api';

const crmService = {
  fetchCRMs: async () => {
    const response = await api.get('/crms');
    return response.data;
  },
  fetchCRM: async (id) => {
    const response = await api.get(`/crms/${id}`);
    return response.data;
  },
  createCRM: async (crmData) => {
    const response = await api.post('/crms', crmData);
    return response.data;
  },
};

export { crmService };
