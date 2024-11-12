// screens/CartScreen.js
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Button, Alert } from 'react-native';
import globalStyles from '../styles/globalStyles';
import { addCompra } from '../utils/Compra-data';
import { getCompras } from '../utils/getCompra';
import { agregarFactura } from '../utils/factura'; // Asegúrate de que la ruta sea correcta

const CartScreen = () => {
    const [compras, setCompras] = useState([]);
    const [selectedItems, setSelectedItems] = useState(['producto3', 'producto4']); // Cambia esto según tu lógica de selección

    useEffect(() => {
        // Añadir una compra de ejemplo al cargar la pantalla
        addCompra(5, 29.99, selectedItems, '2023-11-01', 'factura002');

        // Obtener todas las compras y actualizarlas en el estado
        async function fetchCompras() {
            const comprasObtenidas = await getCompras();
            setCompras(comprasObtenidas);
        }
        
        fetchCompras();
    }, []);

    const handlePurchase = async () => {
        try {
            // Aquí deberías obtener el ID del usuario. Estoy usando un ID de ejemplo
            const userId = 'user123'; 
            await agregarFactura(userId, selectedItems);
            Alert.alert("Compra exitosa", "Tu factura ha sido generada.");
        } catch (error) {
            console.error("Error al realizar la compra: ", error);
            Alert.alert("Error", "Hubo un problema al procesar tu compra.");
        }
    };

    const renderItem = ({ item }) => (
        <View>
            <Text>{`ID: ${item.id}, Total: $${item.total}, Productos: ${item.productos.join(', ')}`}</Text>
        </View>
    );

    return (

        
        <View style={globalStyles.container}>
            <Text style={globalStyles.title}>Tu Carrito</Text>
            {compras.length > 0 ? (
                <FlatList
                    data={compras}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id.toString()}
                />
            ) : (
                <Text>No hay productos en tu carrito.</Text>
            )}
            <Button title="Confirmar Compra" onPress={handlePurchase} />
        </View>
    );
};

export default CartScreen;
