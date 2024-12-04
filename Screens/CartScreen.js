import React, { useContext } from 'react'; 
import { View, Text, FlatList, Alert, Image, TouchableOpacity } from 'react-native'; 
import { agregarFactura } from '../utils/AgregarFactura'; 
import { CartContext } from '../context/cart-context'; 
import { AuthContext } from '../context/auth-context'; 
import { useNavigation } from '@react-navigation/native'; 
import CartStyles from '../styles/CartStyles'; 

const CartScreen = () => {
    const { cartItems, clearCart } = useContext(CartContext);  // Obtén los productos del carrito y la función para vaciarlo
    const { token } = useContext(AuthContext);  // Obtén el token (usuario autenticado)
    const navigation = useNavigation();  // Hook de navegación

    const handlePurchase = async () => {
        try {
            if (cartItems.length === 0) {
                Alert.alert("Carrito vacío", "Agrega productos antes de confirmar la compra.");
                return;
            }

            if (!token || !token.userId) {
                Alert.alert("Error de autenticación", "Debes iniciar sesión para realizar una compra.");
                return;
            }

            // Generar la factura con los productos del carrito
            const productIds = cartItems.map((item) => item.id);
            await agregarFactura(token.userId, productIds);

            // Mostrar mensaje de éxito y limpiar el carrito
            Alert.alert("Compra exitosa", "Tu factura ha sido generada.");
            clearCart();

            // Navegar a la pantalla de factura
            navigation.navigate("FacturaScreen");  // Redirige a la pantalla de factura

        } catch (error) {
            console.error("Error al realizar la compra: ", error);
            Alert.alert("Error", "Hubo un problema al procesar tu compra.");
        }
    };

    const renderItem = ({ item }) => (
        <View style={CartStyles.itemContainer}>
            <Text style={CartStyles.itemText}>{item.name}</Text>
            <Text style={CartStyles.itemPrice}>${item.price.toFixed(2)}</Text>
            <Image source={{ uri: item.image }} style={CartStyles.itemImage} />
        </View>
    );

    return (
        <View style={CartStyles.container}>
            <Text style={CartStyles.title}>Tu Carrito</Text>
            {cartItems.length > 0 ? (
                <FlatList
                    data={cartItems}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id.toString()}
                />
            ) : (
                <Text style={CartStyles.emptyText}>No hay productos en tu carrito.</Text>
            )}
            <TouchableOpacity 
                style={CartStyles.buttonContainer} 
                onPress={handlePurchase}
            >
                <Text style={CartStyles.buttonText}>$ Confirmar Compra $</Text>
            </TouchableOpacity>
        </View>
    );
};

export default CartScreen;
