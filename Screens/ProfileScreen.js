import React, { useEffect, useState } from 'react';
import { View, Text, Button, AsyncStorage, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Asegúrate de tener esto importado

const ProfileScreen = ({ navigation }) => {
  const [userEmail, setUserEmail] = useState('');

  useEffect(() => {
    const getUserEmail = async () => {
      const email = await AsyncStorage.getItem('userEmail');
      setUserEmail(email || ''); // Si no hay email, establece como vacío
    };
    getUserEmail();
  }, []);

  const handleLogout = async () => {
    await AsyncStorage.removeItem('userEmail'); // Elimina el correo del almacenamiento
    navigation.navigate('Inicio de Sesión'); // Regresa al login
  };

  return (
    <View style={styles.container}>
      <View style={styles.profileHeader}>
        <Ionicons name="person-circle" size={200} color="#bb0000" /> 
        
      </View>
      <Text style={styles.text}>Email: {userEmail}</Text>
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
    flexDirection: 'row', // Alinear el ícono y el texto en una fila
    alignItems: 'center', // Centrar verticalmente
    marginVertical: 10,
  },
  title: {
    fontSize: 24,
    marginLeft: 10, // Espacio entre el ícono y el texto
  },
  text: {
    fontSize: 18,
    marginVertical: 5,
  },
});

export default ProfileScreen;
