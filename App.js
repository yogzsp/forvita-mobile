import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { ClusterScreen, DashboardScreen, LoginScreen,ProfileScreen } from './src/screens';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar></StatusBar>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name="Dashboard" component={DashboardScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Home" component={ClusterScreen} options={{headerShown:false,title:''}}  />
        <Stack.Screen name="Profile" component={ProfileScreen} options={{headerShown:false,title:''}}  />
        <Stack.Screen name="Login" component={LoginScreen} options={{headerShown:false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;