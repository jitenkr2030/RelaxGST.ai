import React, { useContext, useEffect } from 'react';
import { View, Text } from 'react-native';
import { EwayBillContext } from '../../context/EwayBillContext';

const EwayBillDetail = ({ route }) => {
  const { id } = route.params;
  const { ewayBill, fetchEwayBill } = useContext(EwayBillContext);

  useEffect(() => {
    fetchEwayBill(id);
  }, [id]);

  return (
    <View>
      <Text>Eway Bill Detail</Text>
      {ewayBill && (
        <View>
          <Text>{ewayBill.title}</Text>
          <Text>{ewayBill.amount}</Text>
        </View>
      )}
    </View>
  );
};

export default EwayBillDetail;
