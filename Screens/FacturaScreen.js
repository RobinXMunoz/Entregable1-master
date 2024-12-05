import React, { useEffect, useState } from "react";
import { Text, View, FlatList, Image } from "react-native";
import { getFactura } from "../utils/Uploadbebidas";
import FacturaScreenStyles from "../styles/FacturaScreenStyles"; // Importa tus estilos desde el archivo externo
import { FormattedMessage } from "react-intl";

const FacturaScreen = () => {
    const [factura, setFactura] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const listData = await getFactura();
                setFactura(listData);
            } catch (err) {
                console.error("Error al obtener la factura:", err);
                setError("No se pudieron cargar los datos");
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, []);

    if (loading) {
        return <Text style={FacturaScreenStyles.text}>Cargando...</Text>;
    }

    if (error) {
        return <Text style={FacturaScreenStyles.errorText}>{error}</Text>;
    }

    const renderFactura = ({ item }) => (
        <View style={FacturaScreenStyles.itemContainer}>
            <Image source={{ uri: item.producto.image }} style={FacturaScreenStyles.image} />
            <View style={FacturaScreenStyles.textContainer}>
                <Text style={FacturaScreenStyles.title}>{item.producto.name}</Text>
                <Text style={FacturaScreenStyles.description}>{item.producto.description}</Text>
                <Text style={FacturaScreenStyles.category}>{item.producto.category}</Text>
                <Text style={FacturaScreenStyles.price}><FormattedMessage id="precio" />: ${item.producto.price}</Text>
            </View>
        </View>
    );

    const calculateTotal = () => {
        return factura.reduce((sum, item) => sum + item.producto.price, 0).toFixed(2);
    };

    return (
        <View style={FacturaScreenStyles.container}>
           
            <View style={FacturaScreenStyles.header}>
                <Text style={FacturaScreenStyles.headerText}>Factura</Text>
                <Text style={FacturaScreenStyles.headerDetails}>Número: #001234</Text>
                <Text style={FacturaScreenStyles.headerDetails}>Fecha: {new Date().toLocaleDateString()}</Text>
            </View>

            <FlatList
                data={factura}
                keyExtractor={(item) => item.id}
                renderItem={renderFactura}
                contentContainerStyle={FacturaScreenStyles.listContainer}
            />

            <View style={FacturaScreenStyles.totalContainer}>
                <Text style={FacturaScreenStyles.totalText}>Total: ${calculateTotal()}</Text>
            </View>
        </View>
    );
};

export default FacturaScreen;
