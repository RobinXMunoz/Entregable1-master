// components/ProductCard.js
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const ProductCard = ({ product, onClick }) => {
    return (
        <TouchableOpacity style={styles.card} onPress={onClick}>
            <Image 
                source={{ uri: product.image }} 
                style={styles.image} 
                resizeMode="cover" 
            />
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
        elevation: 5,
        width: 120,
        height: 150,
        width: 200, // Ancho de la tarjeta
        height: 250, // Establece la altura desead
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: '90%',
        height: 200,
        borderRadius: 10,
    },
    name: {
        fontWeight: 'bold',
        textAlign: 'center',
    },
    price: {
        color: 'green',

        height: 80, // Ajustar la altura de la imagen
        borderRadius: 10,
        marginBottom: 5, // Espaciado entre la imagen y el texto
    },
    name: {
        fontWeight: 'bold',
        fontSize: 16,
        marginVertical: 2,
        textAlign: 'center',
    },
    price: {
        fontWeight: 'bold',
        color: 'green',
        fontSize: 14,
    },
});

export default ProductCard;
