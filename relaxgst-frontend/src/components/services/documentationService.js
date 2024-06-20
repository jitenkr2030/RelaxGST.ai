import api from './api';

const documentationService = {
  fetchDocuments: async () => {
    const response = await api.get('/documents');
    return response.data;
  },
  fetchDocument: async (id) => {
    const response = await api.get(`/documents/${id}`);
    return response.data;
  },
  createDocument: async (documentData) => {
    const response = await api.post('/documents', documentData);
    return response.data;
  },
};

export { documentationService };
