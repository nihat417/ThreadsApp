import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './Login';
import Register from './Register';

const AuthStack = createNativeStackNavigator();

const AuthNav = () => {
  return (
    <NavigationContainer>
        <AuthStack.Navigator initialRouteName="Login" screenOptions={{headerShown:false}}>
            <AuthStack.Screen name='Login' component={Login}/>
            <AuthStack.Screen name='Register' component={Register}/>
        </AuthStack.Navigator>
    </NavigationContainer>
  )
}

export default AuthNav;