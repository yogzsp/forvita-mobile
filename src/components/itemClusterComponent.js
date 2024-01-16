import { View, Text, TouchableOpacity, TextInput, Image, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import { FontAwesome } from "@expo/vector-icons";
import color from '../constants/color';

const ItemCluster = ({judul,jumlah,editor}) =>{
    return (
        <View style={styles.itemCluster}>
            <FontAwesome name="pie-chart" size={50} color={color.primary} />
            <Text style={styles.titleCluster}>{judul}</Text>
            <Text style={styles.countCluster}>{jumlah} Dashboard</Text>
            <View style={styles.informationCluster}>
              <Text style={styles.editorCluster}>Di buat oleh : {editor}</Text>
              <View style={styles.actionCluster}>
                <TouchableOpacity style={[styles.buttonCluster,{backgroundColor:color.primary}]}>
                  <FontAwesome name="pencil" size={20} color="#ffffff" />
                </TouchableOpacity>
                <TouchableOpacity style={[styles.buttonCluster,{backgroundColor:color.danger}]}>
                  <FontAwesome name="plus" size={20} color="#ffffff" />
                </TouchableOpacity>
              </View>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    itemCluster:{
        marginBottom:15,
        alignItems:'center',
        paddingHorizontal:20,
        paddingVertical:30,
        borderRadius:7,
        backgroundColor:'#ffffff',
        width:'100%',
      },
    
      // didalam cluster
      titleCluster:{
        fontSize:30,
        fontWeight:'bold',
      },
      countCluster:{
        fontSize:18,
      },
      informationCluster:{
        display:'flex',
        flexDirection:'row',
        width:'100%',
        justifyContent:'space-between'
      },
      buttonCluster:{
        marginLeft:5,
       paddingHorizontal:8, 
       paddingVertical:5,
       borderRadius:5,
      },
      actionCluster:{
        flexDirection:'row'
      },
      editorCluster:{
        marginLeft:20,
      } 
});

export default ItemCluster;