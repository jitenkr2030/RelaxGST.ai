import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { InvoiceContext } from '../../context/InvoiceContext';

const CreateInvoice = () => {
  const { createInvoice } = useContext(InvoiceContext);
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');

  const handleCreate = () => {
    createInvoice({ title, amount });
  };

  return (
    <View>
      <Text>Create Invoice</Text>
      <TextInput placeholder="Title" value={title} onChangeText={setTitle} />
      <TextInput placeholder="Amount" value={amount} onChangeText={setAmount} />
      <Button title="Create" onPress={handleCreate} />
    </View>
  );
};

export default CreateInvoice;
