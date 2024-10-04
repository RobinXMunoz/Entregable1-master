import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';  // Importar Ionicons para las flechas

const ProductDetailScreen = ({ route, navigation }) => {
    const { product, products, index } = route.params;

    const handlePrevProduct = () => {
        if (index > 0) {
            navigation.navigate('ProductDetail', { product: products[index - 1], products, index: index - 1 });
        }
    };

    const handleNextProduct = () => {
        if (index < products.length - 1) {
            navigation.navigate('ProductDetail', { product: products[index + 1], products, index: index + 1 });
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                {/* Flecha hacia atrás */}
                <TouchableOpacity onPress={handlePrevProduct} disabled={index === 0}>
                    <Ionicons 
                        name="arrow-back-circle"  // Ícono de flecha hacia atrás
                        size={50} 
                        color={index === 0 ? "gray" : "#800020"}  // Color dependiendo de si está habilitado o deshabilitado
                        style={index === 0 && styles.disabledArrow}
                    />
                </TouchableOpacity>

                {/* Flecha hacia adelante */}
                <TouchableOpacity onPress={handleNextProduct} disabled={index === products.length - 1}>
                    <Ionicons 
                        name="arrow-forward-circle"  // Ícono de flecha hacia adelante
                        size={50} 
                        color={index === products.length - 1 ? "gray" : "#800020"}  // Color dependiendo de si está habilitado o deshabilitado
                        style={index === products.length - 1 && styles.disabledArrow}
                    />
                </TouchableOpacity>
            </View>

            <Image 
                source={{ uri: product.image }} 
                style={styles.image} 
                resizeMode="cover" 
            />
            <Text style={styles.name}>{product.name}</Text>
            <Text style={styles.price}>${product.price}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        alignItems: 'center',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        paddingVertical: 10,
    },
    disabledArrow: {
        opacity: 0.5,  // Disminuir la opacidad si está deshabilitado
    },
    image: {
        width: 200,
        height: 200,
        borderRadius: 10,
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        marginVertical: 10,
    },
    price: {
        fontSize: 20,
        color: 'green',
        marginVertical: 10,
    },
});

export default ProductDetailScreen;