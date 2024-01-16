import React, { useRef, useEffect } from 'react';
import { FontAwesome } from "@expo/vector-icons"
import { TouchableOpacity, View, StyleSheet,Image,Animated } from "react-native"
import color from "../constants/color";
import { useNavigation } from "@react-navigation/native";
const NavbarTop = () => {
    // navigasi
    const navigation = useNavigation();
    const handleProfile = async (values) => {
        // Proses autentikasi atau navigasi setelah login
        // console.log('Login Data:', values);
        navigation.navigate('Profile');
      };

      const handleCluster = async(values)=>{
        navigation.navigate('Home');
      }

    //   animasi berpurar
    const rotationValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(rotationValue, {
        toValue: 1,
        duration: 5000, 
        useNativeDriver: true,
      })
    ).start();
  }, [rotationValue]);

  const rotate = rotationValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

    return (
        <View style={styles.header}>
        <TouchableOpacity style={styles.menuIcon} onPress={handleCluster}>
                <FontAwesome name="bars" size={22} color='gray' />
        </TouchableOpacity>
        <View style={styles.menuRight}>
            <Animated.View style={{ transform: [{ rotate }] }}>
                <FontAwesome name="gear" size={22} color={color.primary} />
            </Animated.View>
            <TouchableOpacity onPress={handleProfile}>
                <Image
                        source={{ uri: 'https://i0.wp.com/divedigital.id/wp-content/uploads/2021/10/2-min.png?w=720&ssl=1' }}
                        style={styles.profileMenu}
                        
                    />
            </TouchableOpacity>
        </View>
      </View>
    )
};

const styles = StyleSheet.create({
    header: { 
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        backgroundColor:"#fff"
      },
      profileMenu: {
        width: 30,
        height: 30,
        borderRadius: 25,
        backgroundColor:"gray",
        marginLeft:10,
      },
      menuIcon: {
        marginRight: 15,
      },
      menuRight:{
        alignItems:'center',
        flexDirection:'row'
      },
});

export default NavbarTop;