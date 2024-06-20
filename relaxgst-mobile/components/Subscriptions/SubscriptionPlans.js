import React, { useContext, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import { SubscriptionContext } from '../../context/SubscriptionContext';

const SubscriptionPlans = () => {
  const { subscriptionPlans, fetchSubscriptionPlans } = useContext(SubscriptionContext);

  useEffect(() => {
    fetchSubscriptionPlans();
  }, []);

  return (
    <View>
      <Text>Subscription Plans</Text>
      <FlatList
        data={subscriptionPlans}
        renderItem={({ item }) => <Text>{item.name}</Text>}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default SubscriptionPlans;
