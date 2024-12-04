import React, { useContext, useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthContext } from '../context/auth-context';
import jwt_decode, { jwtDecode } from 'jwt-decode';
import { useNavigation } from '@react-navigation/native';
import ProfileScreenStyles from '../styles/ProfileScreenStyles'; // Importar los estilos
import { Ionicons } from 'react-native-vector-icons'; // Importar Ionicons

const ProfileScreen = () => {
  const [email, setEmail] = useState('Cargando...');
  const authContext = useContext(AuthContext);
  const decoded = jwtDecode(authContext.token);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchUserEmail = async () => {
      try {
        console.log(decoded);
        setEmail(decoded.email);
      } catch (error) {
        console.error('Error al obtener el correo:', error);
        setEmail('Error al obtener el correo');
      }
    };

    fetchUserEmail();
  }, [authContext.token]);

  const handleLogout = async () => {
    try {
      // Eliminar el token de AsyncStorage
      await AsyncStorage.removeItem('authToken');
      authContext.logout(); // Cerrar sesión en el contexto de autenticación
      navigation.replace("Login");
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    }
  };

  return (
    <View style={ProfileScreenStyles.container}>
      <View style={ProfileScreenStyles.iconContainer}>
        <Ionicons name="person-circle" size={100} color="#670000" /> {/* Icono de perfil */}
      </View>
      <Text style={ProfileScreenStyles.text}>{email}</Text> {/* Mostrar el correo */}
      <Button title="Cerrar Sesión ✘" onPress={handleLogout} color="#670000" /> {/* Botón de cerrar sesión */}
    </View>
  );
};

export default ProfileScreen;
