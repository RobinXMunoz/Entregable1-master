import React, { useEffect, useState, useContext } from 'react';
import { View, Text, Image, StyleSheet, Button, Alert, ScrollView } from 'react-native';
import { getBebidas } from '../utils/Uploadbebidas';
import addCompra from '../utils/post-data';
import AgregarFactura from '../utils/AgregarFactura';
import { AuthContext } from '../context/auth-context';
import { CartContext } from '../context/cart-context'; // Importar CartContext

const ProductDetailScreen = ({ route }) => {
    const { productId } = route.params; // Obtener el ID del producto
    const [product, setProduct] = useState(null);
    const authCtx = useContext(AuthContext);
    const { addToCart } = useContext(CartContext); // Usar función del contexto del carrito

    useEffect(() => {
        const fetchProduct = async () => {
            const productsData = await getBebidas();
            const selectedProduct = productsData.find(item => item.id === productId);
            setProduct(selectedProduct);
        };

        fetchProduct();
    }, [productId]);  // Solo vuelve a ejecutar si el productId cambia

    const handleAddToCart = async () => {
        if (product) {
            try {
                await addCompra(product); // Agregar producto a Firebase
                await AgregarFactura(authCtx.token.userId, product); // Registrar factura en Firebase

                addToCart(product); // Agregar producto al contexto del carrito
                Alert.alert("Producto agregado", `${product.name} ha sido agregado al carrito.`);
            } catch (error) {
                console.error("Error al agregar al carrito: ", error);
                Alert.alert("Error", "Hubo un problema al agregar el producto al carrito.");
            }
        }
    };

    if (!product) {
        return <Text style={styles.loadingText}>Cargando...</Text>;
    }

    return (
        <View style={styles.container}>
            <ScrollView>
                <Image source={{ uri: product.image }} style={styles.image} />
                <View style={styles.detailsContainer}>
                    <Text style={styles.name}>{product.name}</Text>
                    <Text style={styles.description}>{product.description}</Text>
                    <Text style={styles.price}>${product.price}</Text>
                    <View style={styles.buttonContainer}>
                        <Button title="Agregar al carrito" onPress={handleAddToCart} color="#670000" />
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignContent: "center",
        justifyContent: "center",
        flex: 1,
        backgroundColor: '#f5f5f5',
        padding: 16,
    },
    image: {
        alignSelf: "center",
        width: 200,
        height: 300,
        borderRadius: 15,
        marginBottom: 20,
        borderWidth: 2,
        borderColor: '#670000',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.3,
        shadowRadius: 10,
    },
    detailsContainer: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.3,
        shadowRadius: 10,
        elevation: 5,
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 10,
        textAlign: 'center',
    },
    description: {
        fontSize: 16,
        color: '#555',
        marginBottom: 20,
        lineHeight: 24,
        textAlign: 'center',
    },
    price: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#4CAF50',
        marginBottom: 20,
        textAlign: 'center',
    },
    buttonContainer: {
        marginTop: 10,
        borderRadius: 10,
        overflow: 'hidden',
    },
    loadingText: {
        fontSize: 18,
        color: '#333',
        textAlign: 'center',
        marginTop: 20,
    },
});

export default ProductDetailScreen;
