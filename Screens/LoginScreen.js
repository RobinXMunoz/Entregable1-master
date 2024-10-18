import React, { useState, useContext } from 'react'; 
import { View, TextInput, StyleSheet, Text, TouchableOpacity, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'; 
import { AuthContext } from '../context/auth-context'; // Importa el contexto de autenticación

const LoginScreen = ({ navigation }) => {
  const { login } = useContext(AuthContext); // Usar el contexto
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    if (email === 'proyecto@bebidas.com' && password === '123456') {
      await AsyncStorage.setItem('userEmail', email);
      login(email); // Llama a la función de login del contexto
      navigation.navigate('Home');  // Navega hacia la pantalla principal
    } else {
      Alert.alert('Error', 'Correo o contraseña incorrectos');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Inicio de Sesión</Text>
      <TextInput
        style={styles.input}
        placeholder="Correo Electrónico"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
  
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Iniciar Sesión</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: '#bb0000',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 24,
  },
  button: {
    backgroundColor: '#bb0000', // Color de fondo del botón
    padding: 12,
    alignItems: 'center',
    borderRadius: 5, // Bordes redondeados
  },
  buttonText: {
    color: '#ffffff', // Color del texto del botón
    fontSize: 16,
  },
});

export default LoginScreen;
