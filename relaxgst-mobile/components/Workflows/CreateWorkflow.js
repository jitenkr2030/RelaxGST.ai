import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { WorkflowContext } from '../../context/WorkflowContext';

const CreateWorkflow = () => {
  const { createWorkflow } = useContext(WorkflowContext);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleCreate = () => {
    createWorkflow({ name, description });
  };

  return (
    <View>
      <Text>Create Workflow</Text>
      <TextInput placeholder="Name" value={name} onChangeText={setName} />
      <TextInput placeholder="Description" value={description} onChangeText={setDescription} />
      <Button title="Create" onPress={handleCreate} />
    </View>
  );
};

export default CreateWorkflow;
