import React, { createContext, useState } from 'react';

export const UsageContext = createContext();

export const UsageProvider = ({ children }) => {
  const [usageLogs, setUsageLogs] = useState([]);

  const fetchUsageLogs = () => {
    // Fetch usage logs logic here
    setUsageLogs([{ id: 1, activity: 'Activity 1' }]);
  };

  return (
    <UsageContext.Provider value={{ usageLogs, fetchUsageLogs }}>
      {children}
    </UsageContext.Provider>
  );
};
