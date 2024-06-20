export const getCRMEntries = async () => {
    // API call to fetch CRM entries
    return [{ id: 1, name: 'CRM Entry 1' }];
  };
  
  export const getCRMEntry = async (id) => {
    // API call to fetch a specific CRM entry by id
    return { id, name: 'CRM Entry 1', details: 'Details about CRM Entry 1' };
  };
  
  export const createCRMEntry = async (entry) => {
    // API call to create a new CRM entry
    return { id: 2, ...entry };
  };
  