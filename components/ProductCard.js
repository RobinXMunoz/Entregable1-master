import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import globalStyles from '../styles/globalStyles'; // Asegúrate de que la ruta sea correcta

const ProductCard = ({ product, onClick }) => {
    return (
        <TouchableOpacity style={[styles.card, globalStyles.card]} onPress={onClick}>
            <Image 
                source={{ uri: product.image }} 
                style={styles.image} 
                resizeMode="contain"  // Se ajusta para que la imagen se vea completamente
            />
            <Text style={styles.name}>{product.name}</Text>
            <Text style={styles.price}>${product.price}</Text>
        </TouchableOpacity>
    );
};

// Mantén los estilos aquí
const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff', // Color de fondo de la tarjeta
        borderRadius: 15,
        padding: 15,
        margin: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.3,
        shadowRadius: 10,
        elevation: 7,
        width: 150, // Ancho de la tarjeta
        height: 230, // Establece la altura deseada
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: '90%',
        height: 150,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#670000', // Color de borde
    },
    name: {
        fontWeight: 'bold',
        fontSize: 18,
        marginVertical: 4,
        textAlign: 'center',
    },
    price: {
        fontWeight: 'bold',
        color: '#581845', // Color de Precio
        fontSize: 16,
    },
});

export default ProductCard;
