import React from 'react';
import { View, Text, TouchableOpacity, TextInput, Image, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import NavbarTop from "../components/navbarCompoenent";
import { StatusBar } from "expo-status-bar";
import { FontAwesome } from "@expo/vector-icons";
import { LineChartComp,
    BarChartComp,
    PieChartComp, } from '../components/chartComponent';
import color from '../constants/color';

const DashboardScreen = () => {
    const data = {
        labels: ['Islam','Kristen','Budha','Hindu','Konhucu'],
        datasets: [
          {
            data: [800,200,150,235,198],
          },
        ],
      };
      const data2 = [
        { name: 'Islam', population: 800, color: '#FF5733', legendFontColor: '#7F7F7F', legendFontSize: 15 },
        { name: 'Kristen', population: 200, color: '#33FF57', legendFontColor: '#7F7F7F', legendFontSize: 15 },
        { name: 'Budha', population: 150, color: '#5733FF', legendFontColor: '#7F7F7F', legendFontSize: 15 },
        { name: 'Hindu', population: 235, color: '#FF5733', legendFontColor: '#7F7F7F', legendFontSize: 15 },
        { name: 'Konghucu', population: 198, color: '#33FF57', legendFontColor: '#7F7F7F', legendFontSize: 15 },
      ];
      const data3 = {
        labels: ['Islam','Kristen','Budha','Hindu','Konhucu'],
        data: [800,200,150,235,198],
      };
      

  return (
    <View>
      <StatusBar style="light" translucent={false}/>
      <NavbarTop></NavbarTop>
      <ScrollView style={[styles.listCluster]}>        
      {/* header */}
        <View style={{padding:5}}>
            <Text style={{fontSize:20,fontWeight:'bold'}}>Dashboard Dashboard-contoh</Text>
        </View>
        <View style={styles.actionList}>
            <View style={styles.actionButton}>
                <FontAwesome color="#000000" size={20} name='globe'/>
                <Text style={styles.actionName}>Publik</Text>
            </View>
            <View style={styles.actionButton}>
                <FontAwesome color="#000000" size={20} name='download'/>
                <Text style={styles.actionName}>PNG</Text>
            </View>
            <View style={[styles.actionButton,{backgroundColor:color.primary}]}>
                <FontAwesome color="#ffffff" size={20} name='bar-chart'/>
                <Text style={[styles.actionName,{color:'#ffffff',borderWidth:0}]}>Kustomisasi Dashboard</Text>
            </View>
        </View>
        <View style={{padding:5}}>
            <Text style={{fontSize:15}}>Deskripsi Dashboard-contoh</Text>
        </View>
        {/*  */}
        <LineChartComp data={data} judul="Chart Agama" />
        <BarChartComp data={data} judul="Chart Agama" />
        <PieChartComp data={data2} judul="Chart Agama" />
      </ScrollView>
    </View>
  );
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
    actionList:{
        flexDirection:'row',
        justifyContent:'space-between',
        padding:5,
    },
    actionButton:{
        alignItems:'center',
        flexDirection:'row',
        padding:10,
        borderColor:'gray',
        borderWidth:1,
        borderRadius:5,
        marginRight:7,
        maxWidth:'55%',
    },
    actionName:{
        marginLeft:5,
        maxWidth:'80%',
        textAlign:'center'
    }
  });

export default DashboardScreen;
