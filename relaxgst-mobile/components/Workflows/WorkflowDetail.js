import React, { useContext, useEffect } from 'react';
import { View, Text } from 'react-native';
import { WorkflowContext } from '../../context/WorkflowContext';

const WorkflowDetail = ({ route }) => {
  const { id } = route.params;
  const { workflow, fetchWorkflow } = useContext(WorkflowContext);

  useEffect(() => {
    fetchWorkflow(id);
  }, [id]);

  return (
    <View>
      <Text>Workflow Detail</Text>
      {workflow && (
        <View>
          <Text>{workflow.name}</Text>
          <Text>{workflow.description}</Text>
        </View>
      )}
    </View>
  );
};

export default WorkflowDetail;
