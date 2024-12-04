import React, { useState, useEffect, useCallback } from 'react';
import { View, TextInput, FlatList, Text, TouchableOpacity, Image } from 'react-native';
import { ref, onValue } from 'firebase/database';
import { database } from '../Firebase/firebase';
import SearchScreenStyles from '../styles/SearchScreenStyles'; // Importa los estilos

const SearchScreen = ({ navigation }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [products, setProducts] = useState([]);
    const [filteredResults, setFilteredResults] = useState([]);

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

    const handleSearch = useCallback((query) => {
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
    }, [products]);

    const renderProductItem = ({ item }) => (
        <TouchableOpacity
            style={SearchScreenStyles.productItem}
            onPress={() => navigation.navigate('ProductDetail', { productId: item.id })}
        >
            <Image source={{ uri: item.image }} style={SearchScreenStyles.productImage} />
            <View style={SearchScreenStyles.productInfo}>
                <Text style={SearchScreenStyles.productName}>{item.name}</Text>
                <Text style={SearchScreenStyles.productCategory}>{item.category}</Text>
            </View>
        </TouchableOpacity>
    );

    return (
        <View style={SearchScreenStyles.container}>
            <View style={SearchScreenStyles.searchBarContainer}>
                <TextInput
                    style={SearchScreenStyles.searchInput}
                    placeholder="🔍︎ Buscar productos o categorías..." 
                    placeholderTextColor="#a2a2a2" // Cambia el color del texto aquí
                    value={searchQuery}
                    onChangeText={handleSearch}
                />
            </View>
            <FlatList
                data={filteredResults}
                keyExtractor={(item) => item.id}
                renderItem={renderProductItem}
                ListEmptyComponent={<Text style={SearchScreenStyles.emptyMessage}>No hay resultados.</Text>}
            />
        </View>
    );
};

export default SearchScreen;
