import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { LoginScreen,ProfileScreen } from './src/screens';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar></StatusBar>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={ProfileScreen} options={{headerShown:false,title:''}}  />
        <Stack.Screen name="Login" component={LoginScreen} options={{headerShown:false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;