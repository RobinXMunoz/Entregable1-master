import React, { useContext, useEffect, useState } from 'react';
import { View, Text, Button, AsyncStorage, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { AuthContext } from '../context/auth-context'; // Importar el contexto

const ProfileScreen = ({ navigation }) => {
  const { token, logout } = useContext(AuthContext); // Obtener el token y la función de logout
  const [userEmail, setUserEmail] = useState('');

  useEffect(() => {
    // Puedes obtener el email almacenado si quieres mostrarlo
    const getUserEmail = async () => {
      const email = await AsyncStorage.getItem('userEmail');
      setUserEmail(email || '');
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
      <Text style={styles.text}>Token: {token}</Text>
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
