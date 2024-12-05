import React, { useEffect, useState } from 'react';
import { View, ScrollView, Text, TouchableOpacity, Image, FlatList } from 'react-native';
import CatalogStyles from '../styles/CatalogStyles';
import { getBebidas } from '../utils/Uploadbebidas';
import { useLanguage } from './LanguageProvider';
import { FormattedMessage } from 'react-intl';

const CatalogScreen = ({ navigation }) => {
    const [products, setProducts] = useState([]);
    const { setLocale } = useLanguage();

    useEffect(() => {
        async function fetchData() {
            const productsData = await getBebidas();
            setProducts(productsData);
        }
        fetchData();
    }, []);

    const groupedProducts = products.reduce((acc, product) => {
        if (!acc[product.category]) {
            acc[product.category] = [];
        }
        acc[product.category].push(product);
        return acc;
    }, {});

    const handleProductPress = (product) => {
        navigation.navigate('ProductDetail', { productId: product.id });
    };

    return (
        <ScrollView style={CatalogStyles.container}>
            <Text><FormattedMessage id='Hola' /></Text>
            <TouchableOpacity onPress={() => setLocale('es')}>
                <Text>Español</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setLocale('en')}>
                <Text>English</Text>
            </TouchableOpacity>
            {Object.keys(groupedProducts).map((category) => (
                <View key={category} style={CatalogStyles.categoryContainer}>
                    <Text style={CatalogStyles.categoryTitle}>{category}</Text>
                    <FlatList
                        data={groupedProducts[category]}
                        horizontal
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) => (
                            <TouchableOpacity
                                style={CatalogStyles.productContainer}
                                onPress={() => handleProductPress(item)}
                            >
                                <Image source={{ uri: item.image }} style={CatalogStyles.productImage} />
                                <Text style={CatalogStyles.productName}>{item.name}</Text>
                                <Text style={CatalogStyles.productPrice}>${item.price}</Text>
                            </TouchableOpacity>
                        )}
                        contentContainerStyle={CatalogStyles.horizontalList}
                    />
                </View>
            ))}
        </ScrollView>
    );
};

export default CatalogScreen;
