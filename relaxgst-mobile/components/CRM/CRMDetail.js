import React, { useContext, useEffect } from 'react';
import { View, Text } from 'react-native';
import { CRMContext } from '../../context/CRMContext';

const CRMDetail = ({ route }) => {
  const { id } = route.params;
  const { crmEntry, fetchCRMEntry } = useContext(CRMContext);

  useEffect(() => {
    fetchCRMEntry(id);
  }, [id]);

  return (
    <View>
      <Text>CRM Detail</Text>
      {crmEntry && (
        <View>
          <Text>{crmEntry.name}</Text>
          <Text>{crmEntry.details}</Text>
        </View>
      )}
    </View>
  );
};

export default CRMDetail;
