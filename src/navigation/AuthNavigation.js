import {View, Text} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../screens/Login';

const AuthNavigation = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator initialRouteName='login'>
      <Stack.Screen name="login" component={Login} />
    </Stack.Navigator>
  );
};

export default AuthNavigation;
