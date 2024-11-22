//export default TabNavigator;  ProductDetailScreen: 
import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, Button, Alert, ScrollView } from 'react-native';
import { getBebidas } from '../utils/Uploadbebidas'; // Asegúrate de que esta función esté disponible
import addCompra from '../utils/post-data'; // Asegúrate de que la función addCompra esté correctamente importada
import AgregarFactura from '../utils/AgregarFactura';
import { useContext } from 'react';
import { AuthContext } from '../context/auth-context';
import {utils} from '../utils/auth-context';

const ProductDetailScreen = ({ route }) => {
    const { productId, addToCart } = route.params; // Obtener el ID del producto y la función addToCart
    const [product, setProduct] = useState(null);
    const authCtx = useContext(AuthContext);

    useEffect(() => {
        const fetchProduct = async () => {
            const productsData = await getBebidas(); // Obtén los productos
            const selectedProduct = productsData.find(item => item.id === productId); // Busca el producto por ID
            setProduct(selectedProduct); // Establece el producto en el estado
        };

        fetchProduct();
    }, [productId]);

    const handleAddToCart = async () => {
        if (product) {
        
            await addCompra(product); // Llama a la función para agregar el producto a Firebase
            console.log(authCtx.token.userId)
            await AgregarFactura(authCtx.token.userId, product.id)
            Alert.alert(`${product.name} agregado al carrito`); // Usa backticks para la interpolación

        }
    };



    if (!product) {
        return <Text>Cargando...</Text>; // Muestra un mensaje mientras se carga el producto
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
        flexDirection: "row",
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
        overflow: 'hidden', // Asegura que el botón respete los bordes redondeados
    },
    loadingText: {
        flex: 1,
        fontSize: 18,
        color: '#333',
        textAlign: 'center',
        marginTop: 20,
    },
});

export default ProductDetailScreen;