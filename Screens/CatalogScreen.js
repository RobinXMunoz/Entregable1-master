import React, { useEffect, useState } from 'react';
import { View, Dimensions, FlatList, Text, TouchableOpacity } from 'react-native';
import ProductCard from '../components/ProductCard';
import globalStyles from '../styles/globalStyles';
import { getBebidas } from '../utils/Uploadbebidas';
import { getCategories } from '../utils/Categories-data';

const { width: screenWidth } = Dimensions.get('window');

const CatalogScreen = ({ navigation }) => {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);
console.log("Catalogo");
    useEffect(() => {
        async function fetchData() {
            const productsData = await getBebidas();
            const categoriesData = await getCategories();
            console.log("Productos:", productsData); // Verifica si se obtienen los productos
            console.log("Categorías:", categoriesData); // Verifica si se obtienen las categorías
            setProducts(productsData);
            setCategories(categoriesData);
            console.log(Products);
        }
        fetchData();
    }, []);

    const renderProductItem = ({ item, index }) => (
        <ProductCard 
            product={item} 
            onClick={() => navigation.navigate('ProductDetail', { 
                product: item, 
                products: products, 
                index: index 
            })} 
        />
    );

    const renderCategoryItem = ({ item }) => (
        <TouchableOpacity 
            style={{
                padding: 10,
                marginRight: 8,
                backgroundColor: selectedCategory === item.id ? '#333' : '#ccc',
                borderRadius: 20,
            }}
            onPress={() => setSelectedCategory(item.id)}
        >
            <Text style={{ color: selectedCategory === item.id ? '#fff' : '#000' }}>{item.nombre}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={globalStyles.container}>
            <FlatList
                data={categories}
                renderItem={renderCategoryItem}
                keyExtractor={(item) => item.id}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingHorizontal: 10, paddingVertical: 10 }}
            />

            {/* Elimina el filtro temporalmente para ver si los productos se muestran */}
            <FlatList
                data={products}
                renderItem={renderProductItem}
                keyExtractor={(item) => item.id}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingHorizontal: 10 }}
            />
        </View>
    );
};

export default CatalogScreen;
