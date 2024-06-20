import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../components/Home';
import Login from '../components/Auth/Login';
import Register from '../components/Auth/Register';
import Profile from '../components/User/Profile';
import AccountSettings from '../components/User/AccountSettings';
import SubscriptionPlans from '../components/Subscriptions/SubscriptionPlans';
import Checkout from '../components/Subscriptions/Checkout';
import WorkflowList from '../components/Workflows/WorkflowList';
import WorkflowDetail from '../components/Workflows/WorkflowDetail';
import CreateWorkflow from '../components/Workflows/CreateWorkflow';
import UsageLog from '../components/Usage/UsageLog';
import ExpenseList from '../components/Bookkeeping/ExpenseList';
import IncomeList from '../components/Bookkeeping/IncomeList';
import TransactionList from '../components/Bookkeeping/TransactionList';
import CreateExpense from '../components/Bookkeeping/CreateExpense';
import CreateIncome from '../components/Bookkeeping/CreateIncome';
import CRMList from '../components/CRM/CRMList';
import CRMDetail from '../components/CRM/CRMDetail';
import CreateCRM from '../components/CRM/CreateCRM';
import DocumentList from '../components/Documentation/DocumentList';
import DocumentDetail from '../components/Documentation/DocumentDetail';
import CreateDocument from '../components/Documentation/CreateDocument';
import ReportList from '../components/Reporting/ReportList';
import ReportDetail from '../components/Reporting/ReportDetail';
import CreateReport from '../components/Reporting/CreateReport';
import InvoiceList from '../components/Invoices/InvoiceList';
import InvoiceDetail from '../components/Invoices/InvoiceDetail';
import CreateInvoice from '../components/Invoices/CreateInvoice';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="AccountSettings" component={AccountSettings} />
        <Stack.Screen name="SubscriptionPlans" component={SubscriptionPlans} />
        <Stack.Screen name="Checkout" component={Checkout} />
        <Stack.Screen name="WorkflowList" component={WorkflowList} />
        <Stack.Screen name="WorkflowDetail" component={WorkflowDetail} />
        <Stack.Screen name="CreateWorkflow"
