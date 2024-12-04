import React, { useEffect, useState } from "react";
import { Text, View, FlatList, StyleSheet, Image } from "react-native";
import { getFactura } from "../utils/Uploadbebidas";

// import { obtenerFacturaPorId } from "../utils/Uploadbebidas";

const FacturaScreen = () => {
    const [factura, setFactura] = useState([]);
    const [loading, setLoading] = useState(true); // Estado para controlar la carga.
    const [error, setError] = useState(null); // Estado para manejar errores.

    useEffect(() => {
        async function fetchData() {
            try {
                const listData = await getFactura();
                setFactura(listData);
                console.log(listData)
                listData.forEach(async(element) => {
                factura.push(element)  
            })
            console.log(factura)
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
        return <Text style={styles.text}>Cargando...</Text>;
    }

    if (error) {
        return <Text style={styles.errorText}>{error}</Text>;
    }

    const renderFactura = ({ item }) => (
        <View style={styles.itemContainer}>
          <Image source={{ uri: item.producto.image }} style={styles.image} />
          <View style={styles.textContainer}>
            <Text style={styles.title}>{item.producto.name}</Text>
            <Text style={styles.description}>{item.producto.description}</Text>
            <Text style={styles.category}>{item.producto.category}</Text>
          </View>
        </View>
      );

    return (


        <FlatList
        data={factura}
        keyExtractor={(item) => item.id}
        renderItem={renderFactura}
        contentContainerStyle={styles.listContainer}
      />
    );
};

const styles = StyleSheet.create({
    listContainer: {
      padding: 10,
    },
    itemContainer: {
      flexDirection: "row",
      alignItems: "center",
      marginBottom: 10,
      backgroundColor: "#f9f9f9",
      borderRadius: 8,
      padding: 10,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
    },
    image: {
      width: 50,
      height: 50,
      borderRadius: 25,
      marginRight: 10,
    },
    textContainer: {
      flex: 1,
    },
    title: {
      fontSize: 16,
      fontWeight: "bold",
      marginBottom: 2,
    },
    description: {
      fontSize: 14,
      color: "#666",
      marginBottom: 2,
    },
    category: {
      fontSize: 12,
      color: "#999",
    },
  });
export default FacturaScreen;