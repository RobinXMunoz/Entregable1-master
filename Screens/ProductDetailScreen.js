import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';
import { getBebidas } from '../utils/Uploadbebidas'; // Asegúrate de que esta función esté disponible

const ProductDetailScreen = ({ route }) => {
    const { productId, addToCart } = route.params; // Obtener el ID del producto y la función addToCart
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            const productsData = await getBebidas(); // Obtén los productos
            const selectedProduct = productsData.find(item => item.id === productId); // Busca el producto por ID
            setProduct(selectedProduct); // Establece el producto en el estado
        };

        fetchProduct();
    }, [productId]);

    const handleAddToCart = () => {
        if (product) {
            addToCart(product); // Llama a la función para agregar el producto al carrito
            alert(`${product.name} agregado al carrito`); // Muestra un mensaje de confirmación
        }
    };

    if (!product) {
        return <Text>Cargando...</Text>; // Muestra un mensaje mientras se carga el producto
    }

    return (
        <View style={styles.container}>
            <Image source={{ uri: product.image }} style={styles.image} />
            <Text style={styles.name}>{product.name}</Text>
            <Text style={styles.description}>{product.description}</Text>
            <Text style={styles.price}>${product.price}</Text>
            <Button title="Agregar al carrito" onPress={handleAddToCart} /> {/* Botón para agregar al carrito */}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
    },
    image: {
        width: 200,
        height: 200,
        resizeMode: 'cover',
        marginBottom: 16,
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    description: {
        fontSize: 16,
        marginBottom: 8,
    },
    price: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'green',
    },
});

export default ProductDetailScreen;
