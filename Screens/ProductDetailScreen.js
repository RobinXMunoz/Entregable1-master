import React, { useContext, useEffect, useState } from 'react';
import { View, Text, Image, Button, Alert, ScrollView } from 'react-native';
import { getBebidas } from '../utils/Uploadbebidas';
import addCompra from '../utils/post-data';
import AgregarFactura from '../utils/AgregarFactura';
import { AuthContext } from '../context/auth-context';
import { CartContext } from '../context/cart-context'; // Importar CartContext
import ProductDetailScreenStyles from '../styles/ProductDetailScreenStyles'; // Importar los estilos

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
        return <Text style={ProductDetailScreenStyles.loadingText}>Cargando...</Text>;
    }

    return (
        <View style={ProductDetailScreenStyles.container}>
            <ScrollView>
                <Image source={{ uri: product.image }} style={ProductDetailScreenStyles.image} />
                <View style={ProductDetailScreenStyles.detailsContainer}>
                    <Text style={ProductDetailScreenStyles.name}>{product.name}</Text>
                    <Text style={ProductDetailScreenStyles.description}>{product.description}</Text>
                    <Text style={ProductDetailScreenStyles.price}>${product.price}</Text>
                    <View style={ProductDetailScreenStyles.buttonContainer}>
                        <Button title="Agregar al carrito" onPress={handleAddToCart} color="#670000" />
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

export default ProductDetailScreen;
