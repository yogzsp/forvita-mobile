import React from 'react';
import { View, Text, TouchableOpacity, TextInput, Image, StyleSheet, ScrollView } from 'react-native';
import color from '../../constants/color';
import { StatusBar } from 'expo-status-bar';
import { FontAwesome } from '@expo/vector-icons';
import NavbarTop from '../../components/navbarCompoenent';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
        <StatusBar style="light" translucent={false}/>
      <NavbarTop/>
      <ScrollView style={styles.main}>
        <Text style={styles.title}>Profil</Text>
        <View style={styles.containerForm}>
            <View style={styles.information}>
                <Text style={styles.informationTitle}>Foto Profile</Text>
                <Text style={styles.informationCaption}>Gunakan foto profil yang menampilkan wajah Anda dengan jelas</Text>
            </View>
            <View style={styles.profileInfo}>
                <Image
                    source={{ uri: 'https://i0.wp.com/divedigital.id/wp-content/uploads/2021/10/2-min.png?w=720&ssl=1' }}
                    style={styles.profileImage}
                />
                <TouchableOpacity style={styles.uploadButton}>
                    <Text>Upload Foto Baru</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.form}>
            {/* Ganti dengan form yang sesuai */}
            <View style={styles.information}>
                <Text style={styles.informationTitle}>Nama</Text>
                <Text style={styles.informationCaption}>Nama pengguna anda yang di tampilkan.</Text>
            </View>
            <TextInput style={styles.input} placeholder="Masukkan nama Anda" value="Test" editable={false} />

            <View style={styles.information}>
                <Text style={styles.informationTitle}>Email</Text>
                <Text style={styles.informationCaption}>Email yang terdaftar</Text>
            </View>
            
            <TextInput style={styles.input} placeholder="Masukkan email Anda" value="test@example.com" editable={false} />

            <View style={styles.information}>
                <Text style={styles.informationTitle}>Password Baru</Text>
                <Text style={styles.informationCaption}>Gunakan password yang aman dan sulit untuk ditebak</Text>
            </View>
            <TextInput style={styles.input} placeholder="Masukkan password baru" secureTextEntry />

            <View style={styles.information}>
                <Text style={styles.informationTitle}>Konfirmasi Password Baru</Text>
                <Text style={styles.informationCaption}>Ketik ulang password sesuai dengan sebelumnya</Text>
            </View>
            <TextInput style={styles.input} placeholder="Masukkan konfirmasi password baru" secureTextEntry />

            <TouchableOpacity style={styles.saveButton}>
                <Text style={styles.saveButtonText}>Simpan Profil</Text>
            </TouchableOpacity>
            </View>
        </View>
        <View style={styles.footer}>
        <Text>&copy; 2023. DPR RI</Text>
      </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:color.bg,
  },
  containerForm:{
    backgroundColor:"#ffffff",
    padding:20,
    borderRadius:5
  },
  main: {
    flex: 1,
    padding: 15,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  profileInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
    backgroundColor:"gray"
  },
  uploadButton: {
    backgroundColor: '#eee',
    padding: 10,
    borderRadius: 5,
  },
  form: {
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    borderRadius: 5,
  },
  saveButton: {
    marginTop:10,
    backgroundColor: color.primary,
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  saveButtonText: {
    color: 'white',
  },
  footer: {
    padding: 10,
    paddingBottom:20,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    alignItems: 'center',
  },
  informationTitle:{
    fontWeight:'bold',
    color:'gray'
  },
  informationCaption:{
    color:'gray',
  },
  information:{
    paddingVertical:10
  }
});

export default ProfileScreen;
