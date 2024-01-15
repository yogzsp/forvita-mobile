import { FontAwesome } from "@expo/vector-icons"
import { TouchableOpacity, View, StyleSheet,Image } from "react-native"
import color from "../constants/color";
const NavbarTop = () => {
    return (
        <View style={styles.header}>
        <TouchableOpacity style={styles.menuIcon}>
            <FontAwesome name="bars" size={22} color='gray' />
        </TouchableOpacity>
        <View style={styles.menuRight}>
            <FontAwesome name="gear" size={22} color={color.primary} />
            <Image
                    source={{ uri: 'https://i0.wp.com/divedigital.id/wp-content/uploads/2021/10/2-min.png?w=720&ssl=1' }}
                    style={styles.profileMenu}
                />
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