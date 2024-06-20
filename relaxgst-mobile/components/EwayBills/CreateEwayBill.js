import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { EwayBillContext } from '../../context/EwayBillContext';

const CreateEwayBill = () => {
  const { createEwayBill } = useContext(EwayBillContext);
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');

  const handleCreate = () => {
    createEwayBill({ title, amount });
  };

  return (
    <View>
      <Text>Create Eway Bill</Text>
      <TextInput placeholder="Title" value={title} onChangeText={setTitle} />
      <TextInput placeholder="Amount" value={amount} onChangeText={setAmount} />
      <Button title="Create" onPress={handleCreate} />
    </View>
  );
};

export default CreateEwayBill;
