import React, { useState, useContext } from 'react'; 
import { View, TextInput, Text, TouchableOpacity, Alert } from 'react-native';
import { AuthContext } from '../context/auth-context'; // Importa el contexto de autenticación
import { login } from '../utils/auth';
import LoginScreenStyles from '../styles/LoginScreenStyles'; // Importa los estilos

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const authCtx = useContext(AuthContext);

  const handleLogin = async () => {
    try {
      const token = await login(email, password);
      authCtx.login(token); 

      navigation.navigate('Home'); 
    } catch (error) {
      Alert.alert('Error', 'Login failed. Please try again.');
    }
  };

  return (
    <View style={LoginScreenStyles.container}>
      <Text style={LoginScreenStyles.title}>Inicio de Sesión</Text>
      <TextInput
        style={LoginScreenStyles.input}
        placeholder="Correo Electrónico"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={LoginScreenStyles.input}
        placeholder="Contraseña"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableOpacity style={LoginScreenStyles.button} onPress={handleLogin}>
        <Text style={LoginScreenStyles.buttonText}>Iniciar Sesión</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
