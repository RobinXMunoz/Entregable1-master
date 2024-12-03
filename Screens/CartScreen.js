import React, { useContext } from 'react';
import { View, Text, FlatList, Button, Alert, StyleSheet } from 'react-native';
import { agregarFactura } from '../utils/AgregarFactura'; // Asegúrate de que la ruta sea correcta
import { CartContext } from '../context/cart-context'; // Importar el contexto del carrito
import { AuthContext } from '../context/auth-context'; // Importar el contexto de autenticación

const CartScreen = () => {
    const { cartItems, clearCart } = useContext(CartContext); // Obtener los productos del carrito y función para vaciarlo
    const { token } = useContext(AuthContext); // Obtener el token (usuario autenticado)

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

            // Generar la factura en Firebase con el userId y los productos
            const productIds = cartItems.map((item) => item.id);
            await agregarFactura(token.userId, productIds);

            // Mostrar éxito y limpiar el carrito
            Alert.alert("Compra exitosa", "Tu factura ha sido generada.");
            clearCart();
        } catch (error) {
            console.error("Error al realizar la compra: ", error);
            Alert.alert("Error", "Hubo un problema al procesar tu compra.");
        }
    };

    const renderItem = ({ item }) => (
        <View style={styles.itemContainer}>
            <Text style={styles.itemText}>{item.name}</Text>
            <Text style={styles.itemPrice}>${item.price.toFixed(2)}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Tu Carrito</Text>
            {cartItems.length > 0 ? (
                <FlatList
                    data={cartItems}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id.toString()}
                />
            ) : (
                <Text style={styles.emptyText}>No hay productos en tu carrito.</Text>
            )}
            <Button title="Confirmar Compra" onPress={handlePurchase} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#f5f5f5',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
        textAlign: 'center',
    },
    itemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    itemText: {
        fontSize: 18,
        color: '#333',
    },
    itemPrice: {
        fontSize: 18,
        color: '#4CAF50',
    },
    emptyText: {
        textAlign: 'center',
        color: '#666',
        fontSize: 16,
        marginTop: 20,
    },
});

export default CartScreen;
