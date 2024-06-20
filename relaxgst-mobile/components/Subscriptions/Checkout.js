import React, { useContext, useState } from 'react';
import { View, Text, Button } from 'react-native';
import { SubscriptionContext } from '../../context/SubscriptionContext';

const Checkout = () => {
  const { checkout } = useContext(SubscriptionContext);
  const [plan, setPlan] = useState(null);

  const handleCheckout = () => {
    checkout(plan);
  };

  return (
    <View>
      <Text>Checkout</Text>
      <Button title="Choose Plan" onPress={() => setPlan('PlanID')} />
      <Button title="Checkout" onPress={handleCheckout} />
    </View>
  );
};

export default Checkout;
