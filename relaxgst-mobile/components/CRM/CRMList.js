import React, { useContext, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import { CRMContext } from '../../context/CRMContext';

const CRMList = () => {
  const { crmEntries, fetchCRMEntries } = useContext(CRMContext);

  useEffect(() => {
    fetchCRMEntries();
  }, []);

  return (
    <View>
      <Text>CRM List</Text>
      <FlatList
        data={crmEntries}
        renderItem={({ item }) => <Text>{item.name}</Text>}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default CRMList;
