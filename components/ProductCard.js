// components/ProductCard.js
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const ProductCard = ({ product, onClick }) => {
    return (
        <TouchableOpacity style={styles.card} onPress={onClick}>
            <Image source={{ uri: product.image }} style={styles.image} />
            <Text style={styles.name}>{product.name}</Text>
            <Text style={styles.price}>${product.price}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 10,
        margin: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.2,
        shadowRadius: 6,
        elevation: 5, // Para Android
    },
    image: {
        width: '100%',
        height: 150, // Aumentar altura
        borderRadius: 10,
        marginBottom: 10, // Agregar margen inferior
    },
    name: {
        fontWeight: 'bold',
        fontSize: 18, // Aumentar tamaño
        marginVertical: 5,
        textAlign: 'center', // Centrar el texto
    },
    price: {
        fontWeight: 'bold', // Hacerlo más destacado
        color: 'green',
        fontSize: 16, // Aumentar tamaño
    },
});

export default ProductCard;
