import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AuthNavigator from './AuthNavigator';
import Dashboard from '../components/Dashboard/Dashboard';
// Import other routes

const AppNavigator = () => {
  return (
    <Router>
      <Switch>
        <Route path="/auth" component={AuthNavigator} />
        <Route path="/dashboard" component={Dashboard} />
        {/* Other routes */}
      </Switch>
    </Router>
  );
};

export default AppNavigator;
