import React from 'react';

import HomePage from '../common/Home/main/HomePage';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import NavTab from './NavTab';

const Tabs = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();

const MyHomeStack = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        options={{headerShown: false}}
        name="Home"
        component={HomePage}
      />
    </HomeStack.Navigator>
  );
};

const MainNavTab = () => {
  return (
    <NavigationContainer>
      <Tabs.Navigator
        initialRouteName="Home"
        screenOptions={{headerShown: false}}
        tabBar={probs => <NavTab {...probs} />}>
        <Tabs.Screen name="Home" component={MyHomeStack} />
      </Tabs.Navigator>
    </NavigationContainer>
  );
};

export default MainNavTab;
