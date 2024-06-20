import React, { useContext, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import { WorkflowContext } from '../../context/WorkflowContext';

const WorkflowList = () => {
  const { workflows, fetchWorkflows } = useContext(WorkflowContext);

  useEffect(() => {
    fetchWorkflows();
  }, []);

  return (
    <View>
      <Text>Workflow List</Text>
      <FlatList
        data={workflows}
        renderItem={({ item }) => <Text>{item.name}</Text>}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default WorkflowList;
