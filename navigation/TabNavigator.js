import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';  // Importar Ionicons para los íconos

import CatalogScreen from '../Screens/CatalogScreen'; 
import ProductDetailScreen from '../Screens/ProductDetailScreen'; 
import ProfileScreen from '../Screens/ProfileScreen'; 
import SearchScreen from '../Screens/SearchScreen'; 
import CartScreen from '../Screens/CartScreen'; 

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const StackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="Catalog" 
                component={CatalogScreen} 
                options={{ title: 'Catálogo' }} 
            />
            <Stack.Screen 
                name="ProductDetail" 
                component={ProductDetailScreen} 
                options={{ title: 'Detalles del Producto' }} 
            />
        </Stack.Navigator>
    );
};

const TabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    // Define íconos según el nombre de la ruta
                    if (route.name === 'Home') {
                        iconName = focused ? 'home' : 'home-outline';
                    } else if (route.name === 'Buscador') {
                        iconName = focused ? 'search' : 'search-outline';
                    } else if (route.name === 'Carrito') {
                        iconName = focused ? 'cart' : 'cart-outline';
                    } else if (route.name === 'Perfil') {
                        iconName = focused ? 'person' : 'person-outline';
                    }

                    // Retorna el ícono de Ionicons
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
            })}
            tabBarOptions={{
                activeTintColor: '#800020',  // Color del ícono cuando está activo
                inactiveTintColor: 'gray',  // Color del ícono cuando está inactivo
            }}
        >
            <Tab.Screen //
                name="Home" 
                component={StackNavigator} 
                options={{ headerShown: false }} // Oculta el header de la pantalla

            />
            <Tab.Screen 
                name="Buscador" 
                component={SearchScreen} 
                options={{ title: '' }}  // Título personalizado
            />
            <Tab.Screen 
                name="Carrito" 
                component={CartScreen} 
                options={{ title: '' }}  // Título personalizado
            />
            <Tab.Screen 
                name="Perfil" 
                component={ProfileScreen} 
                options={{ title: '' }}  // Título personalizado
            />
        </Tab.Navigator>
    );
};

export default TabNavigator;