import React from 'react';

import HomePage from '../common/Home/main/HomePage';
import Search from '../common/Search/main/Search';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import NavTab from './NavTab';

const Tabs = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();
const SearchStack = createNativeStackNavigator()

const MyHomeStack = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen options={{headerShown: false}} name="Home" component={HomePage}/>
    </HomeStack.Navigator>
  );
};

const MySearchStack = () =>{
  return (
    <SearchStack.Navigator>
      <SearchStack.Screen options={{headerShown:false}} name='Search' component={Search}/>
    </SearchStack.Navigator>
  )
}


const MainNavTab = () => {
  return (
    <NavigationContainer>
      <Tabs.Navigator
        initialRouteName="Home"
        screenOptions={{headerShown: false}}
        tabBar={probs => <NavTab {...probs} />}>
        <Tabs.Screen name="HomeTab" component={MyHomeStack} />
        <Tabs.Screen name="SearchTab" component={MySearchStack} />
      </Tabs.Navigator>
    </NavigationContainer>
  );
};

export default MainNavTab;
