import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { BookkeepingContext } from '../../context/BookkeepingContext';

const CreateIncome = () => {
  const { createIncome } = useContext(BookkeepingContext);
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');

  const handleCreate = () => {
    createIncome({ name, amount });
  };

  return (
    <View>
      <Text>Create Income</Text>
      <TextInput placeholder="Name" value={name} onChangeText={setName} />
      <TextInput placeholder="Amount" value={amount} onChangeText={setAmount} />
      <Button title="Create" onPress={handleCreate} />
    </View>
  );
};

export default CreateIncome;
