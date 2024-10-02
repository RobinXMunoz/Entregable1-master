import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
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
        <Tab.Navigator>
            <Tab.Screen name="Home" component={StackNavigator} />
            <Tab.Screen name="Buscador" component={SearchScreen} />
            <Tab.Screen name="Carrito" component={CartScreen} />
            <Tab.Screen name="Perfil" component={ProfileScreen} />
        </Tab.Navigator>
    );
};

export default TabNavigator;
