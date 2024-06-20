import React, { useContext, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import { InvoiceContext } from '../../context/InvoiceContext';

const InvoiceList = () => {
  const { invoices, fetchInvoices } = useContext(InvoiceContext);

  useEffect(() => {
    fetchInvoices();
  }, []);

  return (
    <View>
      <Text>Invoice List</Text>
      <FlatList
        data={invoices}
        renderItem={({ item }) => <Text>{item.title}</Text>}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default InvoiceList;
