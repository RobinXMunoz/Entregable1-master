import React, { useEffect, useState } from "react";
import { Text, View, FlatList, Image } from "react-native";
import { getFactura } from "../utils/Uploadbebidas";
import FacturaScreenStyles from "../styles/FacturaScreenStyles"; // Importa los estilos

const FacturaScreen = () => {
    const [factura, setFactura] = useState([]);
    const [loading, setLoading] = useState(true); // Estado para controlar la carga.
    const [error, setError] = useState(null); // Estado para manejar errores.

    useEffect(() => {
        async function fetchData() {
            try {
                const listData = await getFactura();
                setFactura(listData);
                console.log(listData);
                listData.forEach(async (element) => {
                    factura.push(element);
                });
                console.log(factura);
            } catch (err) {
                console.error("Error al obtener la factura:", err);
                setError("No se pudieron cargar los datos");
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, []);

    // Mostrar mensaje de carga o error si corresponde.
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
            </View>
        </View>
    );

    return (
        <FlatList
            data={factura}
            keyExtractor={(item) => item.id}
            renderItem={renderFactura}
            contentContainerStyle={FacturaScreenStyles.listContainer}
        />
    );
};

export default FacturaScreen;
