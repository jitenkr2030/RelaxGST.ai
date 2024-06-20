import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { CRMContext } from '../../context/CRMContext';

const CreateCRM = () => {
  const { createCRMEntry } = useContext(CRMContext);
  const [name, setName] = useState('');
  const [details, setDetails] = useState('');

  const handleCreate = () => {
    createCRMEntry({ name, details });
  };

  return (
    <View>
      <Text>Create CRM Entry</Text>
      <TextInput placeholder="Name" value={name} onChangeText={setName} />
      <TextInput placeholder="Details" value={details} onChangeText={setDetails} />
      <Button title="Create" onPress={handleCreate} />
    </View>
  );
};

export default CreateCRM;
