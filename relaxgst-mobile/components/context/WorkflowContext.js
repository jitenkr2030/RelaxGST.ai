import React, { createContext, useState } from 'react';

export const WorkflowContext = createContext();

export const WorkflowProvider = ({ children }) => {
  const [workflows, setWorkflows] = useState([]);
  const [workflow, setWorkflow] = useState(null);

  const fetchWorkflows = () => {
    // Fetch workflows logic here
    setWorkflows([{ id: 1, name: 'Workflow 1' }]);
  };

  const fetchWorkflow = (id) => {
    // Fetch workflow by id logic here
    setWorkflow({ id, name: 'Workflow 1', description: 'Description of Workflow 1' });
  };

  const createWorkflow = (newWorkflow) => {
    // Create workflow logic here
    setWorkflows([...workflows, newWorkflow]);
  };

  return (
    <WorkflowContext.Provider value={{ workflows, workflow, fetchWorkflows, fetchWorkflow, createWorkflow }}>
      {children}
    </WorkflowContext.Provider>
  );
};
