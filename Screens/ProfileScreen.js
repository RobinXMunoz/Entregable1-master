import React, { useContext, useEffect, useState } from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthContext } from '../context/auth-context';
import { jwtDecode } from 'jwt-decode';
import { useNavigation } from '@react-navigation/native';
import ProfileScreenStyles from '../styles/ProfileScreenStyles'; // Importar los estilos
import { Ionicons } from 'react-native-vector-icons'; // Importar Ionicons
import { useLanguage } from './LanguageProvider';


const ProfileScreen = () => {
  const [email, setEmail] = useState('Cargando...');
  const authContext = useContext(AuthContext);
  const decoded = jwtDecode(authContext.token);
  console.log(decoded)
  const navigation = useNavigation();
  const { setLocale } = useLanguage(); // Función para cambiar el idioma
  

  useEffect(() => {
    const fetchUserEmail = async () => {
      try {
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
      await AsyncStorage.removeItem('authToken');
      authContext.logout();
      navigation.replace('Login');
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    }
  };

  return (
    <View style={ProfileScreenStyles.container}>
      <View style={ProfileScreenStyles.iconContainer}>
        <Ionicons name="person-circle" size={100} color="#670000" />
      </View>
      <Text style={ProfileScreenStyles.text}>{email}</Text>

      {/* Botones para cambiar de idioma */}
      <View style={ProfileScreenStyles.languageContainer}>
        <TouchableOpacity
          style={ProfileScreenStyles.languageButton}
          onPress={() => setLocale('es')}
        >
          <Text style={ProfileScreenStyles.languageButtonText}>Español</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={ProfileScreenStyles.languageButton}
          onPress={() => setLocale('en')}
        >
          <Text style={ProfileScreenStyles.languageButtonText}>English</Text>
        </TouchableOpacity>
      </View>

      <Button title="Cerrar Sesión ✘" onPress={handleLogout} color="black" />
    </View>
  );
};

export default ProfileScreen;
