import React, { useContext, useEffect } from 'react';
import { View, Text } from 'react-native';
import { ReportingContext } from '../../context/ReportingContext';

const ReportDetail = ({ route }) => {
  const { id } = route.params;
  const { report, fetchReport } = useContext(ReportingContext);

  useEffect(() => {
    fetchReport(id);
  }, [id]);

  return (
    <View>
      <Text>Report Detail</Text>
      {report && (
        <View>
          <Text>{report.title}</Text>
          <Text>{report.content}</Text>
        </View>
      )}
    </View>
  );
};

export default ReportDetail;
