import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigator from './TabNavigator';
import LoginScreen from '../Screens/LoginScreen';
import { AuthContext } from '../context/auth-context';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
    const authCtx = useContext(AuthContext);

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={authCtx.isLoggedIn ? "Home" : "Login"}>
                {/* Pantalla de inicio de sesión */}
                {!authCtx.isLoggedIn && (
                    <Stack.Screen 
                        name="Login" 
                        component={LoginScreen} 
                        options={{ headerShown: false }} // Ocultar el header en el login
                    />
                )}
                {/* Pantalla principal cuando el usuario está autenticado */}
                {authCtx.isLoggedIn && (
                    <Stack.Screen 
                        name="Home" 
                        component={TabNavigator} 
                        options={{ headerShown: false }} // Ocultar el header en el TabNavigator
                    />
                )}
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;
