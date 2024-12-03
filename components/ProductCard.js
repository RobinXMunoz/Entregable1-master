import React from 'react';
import { View, Text, Image, Pressable, StyleSheet } from 'react-native';


const ProductCard = ({ product, onClick }) => {
    return (
        <Pressable style={[styles.card, globalStyles.card]} onPress={onClick}>
            <Image 
                source={{ uri: product.image }} 
                style={styles.image} 
                resizeMode="contain"  // Se ajusta para que la imagen se vea completamente
            />
            <Text style={styles.name}>{product.name}</Text>
            <Text style={styles.price}>${product.price}</Text>
        </Pressable>
    );
};

// Mantén los estilos aquí
const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff', // Color de fondo de la tarjeta
        borderRadius: 15,
        padding: 15,
        margin: 10,
        boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.3)', // Nuevo estilo de sombra
        elevation: 7, // Mantén esto para Android
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
