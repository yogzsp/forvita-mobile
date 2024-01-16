import React from 'react';
import { View, Text, TouchableOpacity, TextInput, Image, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import NavbarTop from "../components/navbarCompoenent";
import { StatusBar } from "expo-status-bar";
import color from "../constants/color";
import { FontAwesome } from "@expo/vector-icons";
import ItemCluster from '../components/itemClusterComponent';
import { useNavigation } from '@react-navigation/native';

const ClusterScreen = () =>{
  const navigation = useNavigation();
  const handleDashboard = async (values)=>{
    navigation.navigate("Dashboard");
  }

  return(
    <View>
      <StatusBar style="light" translucent={false}/>
      <NavbarTop></NavbarTop>
      <ScrollView style={[styles.listCluster]}>
        <View style={styles.itemCluster}>
            <FontAwesome name="plus" size={70} color={color.primary} />
        </View>
        {/*  */}
        <TouchableOpacity onPress={handleDashboard}>
          <ItemCluster judul="Pustekinfo" editor="Rizky" jumlah="6" />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleDashboard}>
          <ItemCluster judul="Komisi X" editor="Rizky" jumlah="6" />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleDashboard}>
          <ItemCluster judul="Komisi I" editor="Rizky" jumlah="6" />
        </TouchableOpacity>
      </ScrollView>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:color.bg,
  },
  listCluster:{
    padding:20,
    height:'92%',
  },
  itemCluster:{
    marginBottom:15,
    alignItems:'center',
    paddingHorizontal:20,
    paddingVertical:30,
    borderRadius:7,
    backgroundColor:'#ffffff',
    width:'100%',
  },
  footer: {
    padding: 10,
    paddingBottom:20,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    alignItems: 'center',
  },
});

export default ClusterScreen;