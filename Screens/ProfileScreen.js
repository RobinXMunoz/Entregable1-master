import React, { useContext, useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthContext } from '../context/auth-context';
import jwt_decode, { jwtDecode } from 'jwt-decode';
import { useNavigation } from '@react-navigation/native';


const ProfileScreen = () => {
  const [email, setEmail] = useState('Cargando...');
  const authContext = useContext(AuthContext);
  const decoded=jwtDecode(authContext.token)
  const navigation=useNavigation()

  useEffect(() => {
    const fetchUserEmail = async () => {
      try {
        // Obtener el token almacenado en AsyncStorage
       
        
    console.log(decoded)
    setEmail(decoded.email)

        // if (token) {
        //   // Decodificar el token para obtener el correo
        //   const decodedToken = jwt_decode(token);
        //   console.log('Token decodificado:', decodedToken); // Verifica el token decodificado

        //   if (decodedToken && decodedToken.email) {
        //     setEmail(decodedToken.email);
        //   } else {
        //     setEmail('Correo no disponible');
        //   }
        // } else {
        //   setEmail('Token no encontrado');
        // }
      } catch (error) {
        console.error('Error al obtener el correo:', error);
        setEmail('Error al obtener el correo');
      }
    };

    fetchUserEmail();
  }, []);

  const handleLogout = async () => {
    try {
      // Eliminar el token de AsyncStorage
      await AsyncStorage.removeItem('authToken');
      authContext.logout(); // Cerrar sesión en el contexto de autenticación
      navigation.replace("Login")
      
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{email}</Text> {/* Mostrar el correo */}
      <Button title="Cerrar sesión" onPress={handleLogout} /> {/* Botón de cerrar sesión */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  text: {
    fontSize: 18,
    marginBottom: 16,
  },
});

export default ProfileScreen;
