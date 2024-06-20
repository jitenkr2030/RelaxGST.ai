export const getDocuments = async () => {
    // API call to fetch documents
    return [{ id: 1, title: 'Document 1' }];
  };
  
  export const getDocument = async (id) => {
    // API call to fetch a specific document by id
    return { id, title: 'Document 1', content: 'Content of Document 1' };
  };
  
  export const createDocument = async (document) => {
    // API call to create a new document
    return { id: 2, ...document };
  };
  