const Document = require('../models/Document');

const fetchDocuments = async () => {
  return await Document.find({});
};

const fetchDocument = async (id) => {
  return await Document.findById(id);
};

const createDocument = async (documentData) => {
  const document = new Document(documentData);
  return await document.save();
};

module.exports = { fetchDocuments, fetchDocument, createDocument };
