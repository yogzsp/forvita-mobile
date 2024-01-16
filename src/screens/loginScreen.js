import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import LoginForm from '../components/formComponent';
import { useNavigation } from '@react-navigation/native';
import { Constants } from 'expo-constants';
import { StatusBar } from "expo-status-bar";

const LoginScreen = () => {
  const navigation = useNavigation();
  const handleLogin = async (values) => {
    // Proses autentikasi atau navigasi setelah login
    // console.log('Login Data:', values);
    navigation.navigate('Home');
  };
  
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" translucent={false}/>
      <View style={{paddingTop:20}}>
        <Text style={{fontSize:28,fontWeight:'bold'}}>FORVITA.</Text>
      </View>
      <View style={{paddingVertical:20}}>
        <Text style={{fontWeight:'bold',fontSize:24}}>Masuk</Text>
        <Text>Halo! Silahkan login untuk melanjutkan.</Text>
      </View>
      <LoginForm onSubmit={handleLogin} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    padding:40,
    width:'100%',
    justifyContent:'center',
  }
});

export default LoginScreen;
