import React, { useState, useContext } from 'react'; 
import { View, TextInput, StyleSheet, Text, TouchableOpacity, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'; 
import { AuthContext } from '../context/auth-context'; // Importa el contexto de autenticación
import { login } from '../utils/auth-context';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const authCtx = useContext(AuthContext);

  const handleLogin = async () => {
    console.log("try")

    try {
      const token = await login(email, password); // llamamos la utilidad de autenticacion
      // si esta autenticacion tiene exito devuelve un token. El que devuelve esto es firebase
      //el cual le pasamos al contexto

      authCtx.login(token); // el token se pasa al contexto de autenticacion y lo cargamos con la funcion de login
      // (por dentro de un setAuthToken(token))

      navigation.navigate('Home'); //si todo sale bien navegamos a la pantalla de MainTabs
    } catch (error) {
      Alert.alert('Error', 'Login failed. Please try again.');
    }
   
      // const token = 'fakeToken123'; // Generar o recibir el token
      // await AsyncStorage.setItem('authToken', token); // Guardar el token en el almacenamiento local
      // login(token); // Llama a la función de login del contexto
      // navigation.navigate('Home');  // Navega hacia la pantalla principal
   
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
    backgroundColor: '#bb0000',
    padding: 12,
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
  },
});

export default LoginScreen;