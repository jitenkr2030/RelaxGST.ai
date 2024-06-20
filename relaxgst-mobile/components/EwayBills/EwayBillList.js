import React, { useContext, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import { EwayBillContext } from '../../context/EwayBillContext';

const EwayBillList = () => {
  const { ewayBills, fetchEwayBills } = useContext(EwayBillContext);

  useEffect(() => {
    fetchEwayBills();
  }, []);

  return (
    <View>
      <Text>Eway Bill List</Text>
      <FlatList
        data={ewayBills}
        renderItem={({ item }) => <Text>{item.title}</Text>}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default EwayBillList;
