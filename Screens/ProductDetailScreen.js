import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

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
                <TouchableOpacity onPress={handlePrevProduct} disabled={index === 0}>
                    <Text style={[styles.arrow, index === 0 && styles.disabledArrow]}>&lt;-</Text> {/* Flecha hacia atrás */}
                </TouchableOpacity>
                <Text style={styles.title}>Detalles del Producto</Text>
                <TouchableOpacity onPress={handleNextProduct} disabled={index === products.length - 1}>
                    <Text style={[styles.arrow, index === products.length - 1 && styles.disabledArrow]}>{'->'}</Text> {/* Flecha hacia adelante */}
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
    arrow: {
        fontSize: 24,
        paddingHorizontal: 10,
    },
    disabledArrow: {
        color: 'gray',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        flex: 1,
        textAlign: 'center',
    },
    image: {
        width: '100%',
        height: 200,
        borderRadius: 10,
        marginBottom: 10,
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        marginVertical: 10,
    },
    price: {
        fontSize: 20,
        color: 'green',
        marginBottom: 10,
    },
    description: {
        fontSize: 16,
        textAlign: 'center',
        marginTop: 10,
        color: '#333',
    },
});

export default ProductDetailScreen;
