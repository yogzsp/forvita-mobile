import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import { FontAwesome } from '@expo/vector-icons';
import * as Yup from 'yup';
import color from '../constants/color';

const validationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().required('Password is required'),
});

const LoginForm = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
        <View>
          <Text>Alamat email</Text>
          <TextInput
            style={styles.input}
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            value={values.email}
          />
          {touched.email && errors.email && <Text style={styles.errorText}>{errors.email}</Text>}

          <Text>Kata sandi</Text>
          <TextInput
            style={styles.input}
            secureTextEntry
            onChangeText={handleChange('password')}
            onBlur={handleBlur('password')}
            value={values.password}
          />
          {touched.password && errors.password && <Text style={styles.errorText}>{errors.password}</Text>}

          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>

          <View style={{ display:"flex", flexDirection:"row", justifyContent:"center", marginVertical:10, alignItems:'center' }}>
            <View style={styles.divider}/>
            <Text style={{color:"gray"}}>ATAU MASUK DENGAN</Text>
            <View style={styles.divider}/>
          </View>
          <TouchableOpacity style={styles.buttonIcon}>
            <FontAwesome name="google" size={20} color="white" />
            <Text style={styles.buttonText}>Google</Text>
          </TouchableOpacity>
        </View>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    borderRadius:5
  },
  button: {
    backgroundColor: color.primary,
    padding: 10,
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 10,
  },
  buttonIcon: {
    backgroundColor: color.danger,
    padding: 10,
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 10,
    display:'flex',
    flexDirection:'row',
    justifyContent:'center'
  },
  buttonText: {
    color: 'white',
  },
  errorText: {
    color: 'red',
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: 'gray', 
    marginHorizontal: 10,
  },
});

export default LoginForm;
