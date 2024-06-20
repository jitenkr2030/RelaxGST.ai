import React, { useContext, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import { BookkeepingContext } from '../../context/BookkeepingContext';

const TransactionList = () => {
  const { transactions, fetchTransactions } = useContext(BookkeepingContext);

  useEffect(() => {
    fetchTransactions();
  }, []);

  return (
    <View>
      <Text>Transaction List</Text>
      <FlatList
        data={transactions}
        renderItem={({ item }) => <Text>{item.name}</Text>}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default TransactionList;
