import React from 'react';

import HomePage from '../common/Home/main/HomePage';
import Search from '../common/Search/main/Search';
import Activitiy from '../common/Activity/main/Activitiy';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import NavTab from './NavTab';

import { TabBarVisibilityContext,TabBarVisibilityProvider } from '../../contexts/TabBarVisibilityContext';
import Profile from '../common/Profile/main/Profile';
import EditProfileHeader from '../common/Profile/components/EditProfileHeader';
import ProfileHeader from '../common/Profile/components/ProfileHeader';
import EditProfile from '../common/Profile/main/EditProfile';
import NewThread from '../common/NewThread/main/NewThread';
import SettingsProfile from '../common/Profile/main/SettingsProfile';
import ProfileCustomHeader from '../common/Profile/components/ProfileCustomHeader';
import NewthreadHeader from '../common/NewThread/components/NewthreadHeader';

const Tabs = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();
const SearchStack = createNativeStackNavigator();
const NewThreadStack = createNativeStackNavigator();
const ActivitiyStack = createNativeStackNavigator();
const ProfileStack = createNativeStackNavigator();

const MyHomeStack = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen options={{headerShown: false}} name="HomePage" component={HomePage}/>
    </HomeStack.Navigator>
  );
};

const MySearchStack = () =>{
  return (
    <SearchStack.Navigator>
      <SearchStack.Screen options={{headerShown:false}} name = 'SearchPage' component={Search}/>
    </SearchStack.Navigator>
  )
};

const MyThreadsStack = () =>{
  return  (
    <NewThreadStack.Navigator>
      <NewThreadStack.Screen options={{header:()=><NewthreadHeader/>}} name='NewThreadPage' component={NewThread}/>
    </NewThreadStack.Navigator>
  )
}

const MyActivityStack = () =>{
  return (
    <ActivitiyStack.Navigator>
      <ActivitiyStack.Screen options={{headerShown:false}} name = "ActivityPage" component={Activitiy}/>
    </ActivitiyStack.Navigator>
  )
}

const MyProfileStack = () =>{
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen options={{header:()=><ProfileHeader/>}} name='ProfilePage' component={Profile}/>
      <ProfileStack.Screen options={{header:()=><EditProfileHeader/>}} name='EditProfile' component={EditProfile}/>
      <ProfileStack.Screen options={{header:()=><ProfileCustomHeader mytext ="Settings"/>}} name='Settings' component={SettingsProfile}/>
    </ProfileStack.Navigator>
  )
}


const MainNavTab = () => {
  return (
    <TabBarVisibilityProvider>
      <TabBarVisibilityContext.Consumer>
        {({ isTabBarVisible }) => (
          <NavigationContainer>
            <Tabs.Navigator
              initialRouteName="Home"
              screenOptions={{ headerShown: false }}
              tabBar={(props) => (isTabBarVisible ? <NavTab {...props} /> : null)}>
              <Tabs.Screen name="Home" component={MyHomeStack} />
              <Tabs.Screen name="Search" component={MySearchStack} />
              <Tabs.Screen name="NewThread" component={MyThreadsStack} />
              <Tabs.Screen name="Activity" component={MyActivityStack} />
              <Tabs.Screen name="Profile" component={MyProfileStack}/>
            </Tabs.Navigator>
          </NavigationContainer>
        )}
      </TabBarVisibilityContext.Consumer>
    </TabBarVisibilityProvider>
  );
};

export default MainNavTab;
