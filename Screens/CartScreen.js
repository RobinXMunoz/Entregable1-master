// screens/CartScreen.js
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import globalStyles from '../styles/globalStyles';
import { addCompra } from '../utils/Compra-data';
import { getCompras } from '../utils/getCompra';

const CartScreen = () => {
    const [compras, setCompras] = useState([]);

    useEffect(() => {
        // Añadir una compra de ejemplo al cargar la pantalla
        addCompra(5, 29.99, ['producto3', 'producto4'], '2023-11-01', 'factura002');

        // Obtener todas las compras y actualizarlas en el estado
        async function fetchCompras() {
            const comprasObtenidas = await getCompras();
            setCompras(comprasObtenidas);
        }
        
        fetchCompras();
    }, []);

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
        </View>
    );
};

export default CartScreen;
