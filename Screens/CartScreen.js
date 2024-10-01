// screens/CartScreen.js
import React from 'react';
import { View, Text } from 'react-native';
import globalStyles from '../styles/globalStyles';

const CartScreen = () => {
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.title}>Tu Carrito</Text>
            {/* Aquí puedes mapear los productos del carrito */}
            <Text>No hay productos en tu carrito.</Text>
        </View>
    );
};

export default CartScreen;
