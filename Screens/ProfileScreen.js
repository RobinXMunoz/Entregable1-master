import React, { useContext, useEffect, useState } from 'react';
import { View, Text, Button, AsyncStorage, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { AuthContext } from '../context/auth-context'; // Importar el contexto
import { getAuth } from 'firebase/auth';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';

const ProfileScreen = ({ navigation }) => {
  const { token, logout } = useContext(AuthContext); // Obtener el token y la función de logout
  const [userEmail, setUserEmail] = useState('');
  const auth = getAuth(); // Obtener la instancia de Firebase Authentication

  useEffect(() => {
    const getUserEmail = () => {
      //const decode = jwtDecode(token)
      console.log(token.token)
      const decoded = jwtDecode(token.token)
      console.log(decoded)
    };

    getUserEmail();
  }, []);

  const handleLogout = async () => {
    await AsyncStorage.removeItem('authToken'); // Eliminar el token del almacenamiento
    logout(); // Llamar a la función de logout del contexto
    navigation.navigate('Login'); // Regresar al login
  };

  return ( 
    <View style={styles.container}>
      <View style={styles.profileHeader}>
        <Ionicons name="person-circle" size={200} color="#bb0000" />
      </View>
      <Text style={styles.text}>Token: {token.token}</Text>
      <Button title="Cerrar sesión" onPress={handleLogout} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  text: {
    fontSize: 18,
    marginVertical: 5,
  },
});

export default ProfileScreen;