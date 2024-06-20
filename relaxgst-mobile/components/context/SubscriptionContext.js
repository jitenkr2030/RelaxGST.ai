import React, { createContext, useState } from 'react';

export const SubscriptionContext = createContext();

export const SubscriptionProvider = ({ children }) => {
  const [subscriptionPlans, setSubscriptionPlans] = useState([]);
  const [subscription, setSubscription] = useState(null);

  const fetchSubscriptionPlans = () => {
    // Fetch subscription plans logic here
    setSubscriptionPlans([{ id: 1, name: 'Plan 1' }]);
  };

  const checkout = (plan) => {
    // Checkout logic here
    setSubscription(plan);
  };

  return (
    <SubscriptionContext.Provider value={{ subscriptionPlans, subscription, fetchSubscriptionPlans, checkout }}>
      {children}
    </SubscriptionContext.Provider>
  );
};
