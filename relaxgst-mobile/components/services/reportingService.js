export const getReports = async () => {
    // API call to fetch reports
    return [{ id: 1, title: 'Report 1' }];
  };
  
  export const getReport = async (id) => {
    // API call to fetch a specific report by id
    return { id, title: 'Report 1', content: 'Content of Report 1' };
  };
  
  export const createReport = async (report) => {
    // API call to create a new report
    return { id: 2, ...report };
  };
  