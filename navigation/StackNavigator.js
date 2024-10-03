import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CatalogScreen from '../Screens/CatalogScreen'; 
import ProductDetailScreen from '../Screens/ProductDetailScreen'; 

const Stack = createStackNavigator();

const StackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="Catalog" 
                component={CatalogScreen} 
                options={{ title: 'Catálogo de Productos' }} // Opciones de encabezado
            />
            <Stack.Screen 
                name="ProductDetail" 
                component={ProductDetailScreen} 
                options={{ title: 'Detalles del Producto' }} // Opciones de encabezado
            />
        </Stack.Navigator>
    );
};
