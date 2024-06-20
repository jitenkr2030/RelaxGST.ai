import React, { useContext, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import { GSTReturnContext } from '../../context/GSTReturnContext';

const GSTReturnList = () => {
  const { gstReturns, fetchGSTReturns } = useContext(GSTReturnContext);

  useEffect(() => {
    fetchGSTReturns();
  }, []);

  return (
    <View>
      <Text>GST Return List</Text>
      <FlatList
        data={gstReturns}
        renderItem={({ item }) => <Text>{item.title}</Text>}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default GSTReturnList;
