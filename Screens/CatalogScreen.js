import React, { useEffect, useState } from 'react';
import { View, ScrollView, Text, TouchableOpacity, Image, FlatList } from 'react-native';
import CatalogStyles from '../styles/CatalogStyles';
import { getBebidas } from '../utils/Uploadbebidas';
import { FormattedMessage } from 'react-intl';

const CatalogScreen = ({ navigation }) => {
  const [products, setProducts] = useState([]);

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
      {Object.keys(groupedProducts).map((category) => (
        <View key={category} style={CatalogStyles.categoryContainer}>
          <Text style={CatalogStyles.categoryTitle}>
            <FormattedMessage id={`categories.${category}`} defaultMessage={category} />
          </Text>
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
