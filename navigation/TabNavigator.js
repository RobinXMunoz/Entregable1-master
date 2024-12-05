import React, { useContext } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import { CartContext } from '../context/cart-context'; // Importar el contexto del carrito
import { View,Text } from 'react-native';

import CatalogScreen from '../Screens/CatalogScreen';
import ProductDetailScreen from '../Screens/ProductDetailScreen';
import ProfileScreen from '../Screens/ProfileScreen';
import SearchScreen from '../Screens/SearchScreen';
import CartScreen from '../Screens/CartScreen';
import FacturaScreen from '../Screens/FacturaScreen';
import TabNavigatorStyles from '../styles/TabNavigatorStyles'; // Importar los estilos

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
  const { cartItems } = useContext(CartContext); // Obtener los items del carrito

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
          } else if (route.name === 'Factura') {
            iconName = focused ? 'document' : 'document-outline';
          } else if (route.name === 'Perfil') {
            iconName = focused ? 'person' : 'person-outline';
          }

          return (
            <View style={{ position: 'relative' }}>
              <Ionicons name={iconName} size={size} color={color} />
              {route.name === 'Carrito' && cartItems.length > 0 && (
                <View style={TabNavigatorStyles.cartIconBadge}>
                  <Text style={TabNavigatorStyles.cartIconBadgeText}>{cartItems.length}</Text>
                </View>
              )}
            </View>
          );
        },
        tabBarActiveTintColor: '#bb0000', 
        tabBarInactiveTintColor: 'gray', 
        tabBarStyle: TabNavigatorStyles.tabBarStyle, 
      })}
    >
      <Tab.Screen
        name="Catalogo"
        component={StackNavigator}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarLabel: '',
        }}
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
        name="Factura"
        component={FacturaScreen}
        options={{ title: '' }}
      />
      <Tab.Screen
        name="Perfil"
        component={ProfileScreen}
        options={{ title: '' }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
