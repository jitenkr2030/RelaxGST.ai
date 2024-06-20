import React, { useContext, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import { UsageContext } from '../../context/UsageContext';

const UsageLog = () => {
  const { usageLogs, fetchUsageLogs } = useContext(UsageContext);

  useEffect(() => {
    fetchUsageLogs();
  }, []);

  return (
    <View>
      <Text>Usage Log</Text>
      <FlatList
        data={usageLogs}
        renderItem={({ item }) => <Text>{item.activity}</Text>}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default UsageLog;
