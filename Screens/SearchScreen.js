
import React, { useState } from 'react';
import { View, TextInput, FlatList, Text, StyleSheet } from 'react-native';

const SearchScreen = ({ navigation }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredProducts, setFilteredProducts] = useState([]);

    // Simulación de productos (esto debería venir de una API o base de datos)
    const products = [
        { id: '1', name: 'Producto 1' },
        { id: '2', name: 'Producto 2' },
        { id: '3', name: 'Producto 3' },
        // Agrega más productos según sea necesario
    ];

    const handleSearch = (query) => {
        setSearchQuery(query);
        // Filtrar productos según la consulta de búsqueda
        const filtered = products.filter(product =>
            product.name.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredProducts(filtered);
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.searchInput}
                placeholder="Buscar productos..."
                value={searchQuery}
                onChangeText={handleSearch}
            />
            <FlatList
                data={filteredProducts}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.productItem}>
                        <Text>{item.name}</Text>
                    </View>
                )}
                ListEmptyComponent={<Text>No hay productos que mostrar.</Text>}
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
        padding: 10,
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
    },
});

export default SearchScreen;




