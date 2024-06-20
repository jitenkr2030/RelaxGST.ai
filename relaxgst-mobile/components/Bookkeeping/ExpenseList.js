import React, { useContext, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import { BookkeepingContext } from '../../context/BookkeepingContext';

const ExpenseList = () => {
  const { expenses, fetchExpenses } = useContext(BookkeepingContext);

  useEffect(() => {
    fetchExpenses();
  }, []);

  return (
    <View>
      <Text>Expense List</Text>
      <FlatList
        data={expenses}
        renderItem={({ item }) => <Text>{item.name}</Text>}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default ExpenseList;
