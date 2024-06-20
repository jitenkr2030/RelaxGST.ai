import React, { useContext, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import { ReportingContext } from '../../context/ReportingContext';

const ReportList = () => {
  const { reports, fetchReports } = useContext(ReportingContext);

  useEffect(() => {
    fetchReports();
  }, []);

  return (
    <View>
      <Text>Report List</Text>
      <FlatList
        data={reports}
        renderItem={({ item }) => <Text>{item.title}</Text>}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default ReportList;
