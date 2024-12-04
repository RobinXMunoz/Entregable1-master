import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';

import CatalogScreen from '../Screens/CatalogScreen';
import ProductDetailScreen from '../Screens/ProductDetailScreen';
import ProfileScreen from '../Screens/ProfileScreen';
import SearchScreen from '../Screens/SearchScreen';
import CartScreen from '../Screens/CartScreen';
import FacturaScreen from '../Screens/FacturaScreen';
import TabNavigatorStyles from '../styles/TabNavigatorStyles'; // Importa los estilos

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Catalogo" 
        component={CatalogScreen} 
        options={{ headerShown: false }} 
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

          if (route.name === 'Catalogo') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Buscador') {
            iconName = focused ? 'search' : 'search-outline';
          } else if (route.name === 'Carrito') {
            iconName = focused ? 'cart' : 'cart-outline';
          } else if (route.name === 'Perfil') {
            iconName = focused ? 'person' : 'person-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },

        tabBarActiveTintColor: '#bb0000', // Color para los íconos activos
        tabBarInactiveTintColor: 'gray', // Color para los íconos inactivos
        tabBarStyle: TabNavigatorStyles.tabBarStyle, // Usamos los estilos del archivo TabNavigatorStyles
      })}
    >
      <Tab.Screen
        name="Catalogo" 
        component={StackNavigator} 
        options={{ headerShown: false }}
      />
      <Tab.Screen 
        name="Buscador" 
        component={SearchScreen} 
        options={{ title: '' }} 
      />
      <Tab.Screen 
        name="Carrito" 
        component={CartScreen} 
        options={{ title: '' }} 
      />
      <Tab.Screen 
        name="Perfil" 
        component={ProfileScreen} 
        options={{ title: '' }} 
      />
      <Tab.Screen 
        name="Factura" 
        component={FacturaScreen} 
        options={{ title: '' }} 
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
