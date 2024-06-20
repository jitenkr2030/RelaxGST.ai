import React, { useContext, useEffect } from 'react';
import { View, Text } from 'react-native';
import { InvoiceContext } from '../../context/InvoiceContext';

const InvoiceDetail = ({ route }) => {
  const { id } = route.params;
  const { invoice, fetchInvoice } = useContext(InvoiceContext);

  useEffect(() => {
    fetchInvoice(id);
  }, [id]);

  return (
    <View>
      <Text>Invoice Detail</Text>
      {invoice && (
        <View>
          <Text>{invoice.title}</Text>
          <Text>{invoice.amount}</Text>
        </View>
      )}
    </View>
  );
};

export default InvoiceDetail;
