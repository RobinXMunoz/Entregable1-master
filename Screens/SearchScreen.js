import React, { useState, useEffect } from 'react';
import { View, TextInput, FlatList, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { ref, onValue } from 'firebase/database';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Importa Firestore
import { database } from '../Firebase/firebase';




const SearchScreen = ({ navigation }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [products, setProducts] = useState([]);
    const [filteredResults, setFilteredResults] = useState([]);

    // Obtener productos desde Firebase Realtime Database
    useEffect(() => {
        const fetchProducts = () => {
            const productsRef = ref(database, 'products'); // Ruta en la base de datos
            onValue(productsRef, (snapshot) => {
                if (snapshot.exists()) {
                    const data = snapshot.val();
                    const productList = Object.keys(data).map((key) => ({
                        id: key,
                        ...data[key],
                    }));
                    setProducts(productList);
                    setFilteredResults(productList); // Mostrar todos inicialmente
                } else {
                    console.log('No se encontraron productos.');
                }
            });
        };

        fetchProducts();
    }, []);

    // Filtrar productos según la consulta de búsqueda
    const handleSearch = (query) => {
        setSearchQuery(query);
        if (query.trim() === '') {
            setFilteredResults(products); // Mostrar todos si no hay búsqueda
            return;
        }

        const filtered = products.filter((product) =>
            product.name.toLowerCase().includes(query.toLowerCase()) ||
            product.category.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredResults(filtered);
    };

    const renderProductItem = ({ item }) => (
        <TouchableOpacity
            style={styles.productItem}
            onPress={() => navigation.navigate('ProductDetail', { productId: item.id })}
        >
            <Image source={{ uri: item.image }} style={styles.productImage} />
            <View style={styles.productInfo}>
                <Text style={styles.productName}>{item.name}</Text>
                <Text style={styles.productCategory}>{item.category}</Text>
            </View>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.searchInput}
                placeholder="Buscar productos o categorías..."
                value={searchQuery}
                onChangeText={handleSearch}
            />
            <FlatList
                data={filteredResults}
                keyExtractor={(item) => item.id}
                renderItem={renderProductItem}
                ListEmptyComponent={<Text style={styles.emptyMessage}>No hay resultados.</Text>}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#fff',
    },
    searchInput: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 16,
    },
    productItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
        backgroundColor: '#f9f9f9',
        padding: 10,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    productImage: {
        width: 60,
        height: 60,
        borderRadius: 8,
        marginRight: 10,
    },
    productInfo: {
        flex: 1,
    },
    productName: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
    },
    productCategory: {
        fontSize: 14,
        color: '#666',
    },
    emptyMessage: {
        textAlign: 'center',
        color: '#666',
        marginTop: 20,
        fontSize: 16,
    },
});

export default SearchScreen;
