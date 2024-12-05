import React, { useContext } from 'react'; 
import { View, Text, FlatList, Alert, Image, TouchableOpacity } from 'react-native'; 
import { agregarFactura } from '../utils/AgregarFactura'; 
import { CartContext } from '../context/cart-context'; 
import { AuthContext } from '../context/auth-context'; 
import { useNavigation } from '@react-navigation/native'; 
import CartStyles from '../styles/CartStyles'; 

const CartScreen = () => {
    const { cartItems, clearCart, removeFromCart } = useContext(CartContext);  // Agregamos la función removeFromCart
    const { token } = useContext(AuthContext);  
    const navigation = useNavigation();  

    
    const handlePurchase = async () => {
        try {
            if (cartItems.length === 0) {
                Alert.alert("Carrito vacío", "Agrega productos antes de confirmar la compra.");
                return;
            }

            if (!token ) {
                
                Alert.alert("Error de autenticación", "Debes iniciar sesión para realizar una compra.");
                return;
            } 
            cartItems.forEach(async (element) => {
                await agregarFactura(token.userId,element)
              });

            Alert.alert("Compra exitosa", "Tu factura ha sido generada.");
            clearCart();

            
        } catch (error) {
            console.error("Error al realizar la compra: ", error);
            Alert.alert("Error", "Hubo un problema al procesar tu compra.");
        }
    };

    const handleRemoveItem = (itemId) => {
        removeFromCart(itemId);
    };

   
    const handleClearCart = () => {
        Alert.alert(
            "Vaciar el carrito",
            "¿Estás seguro de que deseas eliminar todos los productos del carrito?",
            [
                { text: "Cancelar", style: "cancel" },
                { text: "Eliminar todo", onPress: clearCart },
            ]
        );
    };

    const renderItem = ({ item }) => (
        <View style={CartStyles.itemContainer}>
            <Text style={CartStyles.itemText}>{item.name}</Text>
            <Text style={CartStyles.itemPrice}>${item.price.toFixed(2)}</Text>
            <Image source={{ uri: item.image }} style={CartStyles.itemImage} />
            <TouchableOpacity 
                style={CartStyles.removeButton} 
                onPress={() => handleRemoveItem(item.id)}
            >
                <Text style={CartStyles.removeButtonText}>Eliminar</Text>
            </TouchableOpacity>
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
            <Text style={CartStyles.buttonText}>Confirmar Compra</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={CartStyles.clearCartButton} 
                onPress={handleClearCart}
            >
            <Text style={CartStyles.clearCartButtonText}>Vaciar carrito</Text>
            </TouchableOpacity>
        </View>
    );
};

export default CartScreen;
