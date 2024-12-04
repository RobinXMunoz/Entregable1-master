import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthContext } from '../context/auth-context';
import { View, ActivityIndicator } from 'react-native';
import TabNavigator from './TabNavigator';
import LoginScreen from '../Screens/LoginScreen';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  const authCtx = useContext(AuthContext);

  if (authCtx.isLoading) {
    // Muestra un indicador de carga mientras se verifica el token
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={authCtx.isLogged ? "Home" : "Login"}>
        {/* Pantalla de inicio de sesión */}
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }} // Ocultar el header en el login
        />
        {/* Pantalla principal cuando el usuario está autenticado */}
        <Stack.Screen
          name="Home"
          component={TabNavigator}
          options={{ headerShown: false }} // Ocultar el header en el TabNavigator
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
