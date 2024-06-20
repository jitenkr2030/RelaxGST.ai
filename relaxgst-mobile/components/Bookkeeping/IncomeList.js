import React, { useContext, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import { BookkeepingContext } from '../../context/BookkeepingContext';

const IncomeList = () => {
  const { incomes, fetchIncomes } = useContext(BookkeepingContext);

  useEffect(() => {
    fetchIncomes();
  }, []);

  return (
    <View>
      <Text>Income List</Text>
      <FlatList
        data={incomes}
        renderItem={({ item }) => <Text>{item.name}</Text>}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default IncomeList;
