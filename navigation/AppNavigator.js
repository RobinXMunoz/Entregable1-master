import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigator from './TabNavigator';
import LoginScreen from '../Screens/LoginScreen';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Inicio de Sesión">
                <Stack.Screen 
                    name="Inicio de Sesión" 
                    component={LoginScreen} 
                    options={{ headerShown: false }}  // Ocultar el header en el login
                />
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
