import React, { useContext } from 'react'; 
import { View, Text, FlatList, Button, Alert, Image } from 'react-native';
import { agregarFactura } from '../utils/AgregarFactura'; // Asegúrate de que la ruta sea correcta
import { CartContext } from '../context/cart-context'; // Importar el contexto del carrito
import { AuthContext } from '../context/auth-context'; // Importar el contexto de autenticación
import { useNavigation } from '@react-navigation/native';
import CartScreenStyles from '../styles/CartScreenStyles'; // Importa los estilos

const CartScreen = () => {
    const { cartItems, clearCart } = useContext(CartContext); // Obtener los productos del carrito y función para vaciarlo
    const { token } = useContext(AuthContext); // Obtener el token (usuario autenticado)
    const Navigation = useNavigation();

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
            Navigation.navigate("Factura");

        } catch (error) {
            console.error("Error al realizar la compra: ", error);
            Alert.alert("Error", "Hubo un problema al procesar tu compra.");
        }
    };

    const renderItem = (item) => {
        console.log(item.image); // Verifica que la URL sea válida.
        return (
            <View style={CartScreenStyles.itemContainer}>
                <Text style={CartScreenStyles.itemText}>{item.name}</Text>
                <Text style={CartScreenStyles.itemPrice}>${item.price.toFixed(2)}</Text>
                <Image source={{ uri: item.image }} style={CartScreenStyles.itemImage} />
            </View>
        );
    };

    return (
        <View style={CartScreenStyles.container}>
            <Text style={CartScreenStyles.title}>Tu Carrito</Text>
            {cartItems.length > 0 ? (
                <FlatList
                    data={cartItems}
                    renderItem={({ item }) => renderItem(item)}
                    keyExtractor={(item) => item.id.toString()}
                />
            ) : (
                <Text style={CartScreenStyles.emptyText}>No hay productos en tu carrito.</Text>
            )}
            <Button title="Confirmar Compra" onPress={handlePurchase} />
        </View>
    );
};

export default CartScreen;
