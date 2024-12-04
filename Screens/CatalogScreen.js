import React, { useEffect, useState } from 'react';
import { View, FlatList, Text, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native';
import { getBebidas } from '../utils/Uploadbebidas';

const CatalogScreen = ({ navigation }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const productsData = await getBebidas();
      setProducts(productsData);
    }
    fetchData();
  }, []);

  // Agrupar productos por categorías
  const groupedProducts = products.reduce((acc, product) => {
    if (!acc[product.category]) {
      acc[product.category] = [];
    }
    acc[product.category].push(product);
    return acc;
  }, {});

  const renderProductItem = ({ item }) => (
    <TouchableOpacity
      style={styles.productContainer}
      onPress={() => navigation.navigate('ProductDetail', { productId: item.id })}
    >
      <Image source={{ uri: item.image }} style={styles.productImage} />
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.productPrice}>${item.price}</Text>
    </TouchableOpacity>
  );

  return (
    <ScrollView style={styles.container}>
      {Object.keys(groupedProducts).map((category) => (
        <View key={category} style={styles.categoryContainer}>
          <Text style={styles.categoryTitle}>{category}</Text>
          <FlatList
            data={groupedProducts[category]}
            renderItem={renderProductItem}
            keyExtractor={(item) => item.id.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.horizontalList}
          />
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 30,
  },
  categoryContainer: {
    marginBottom: 30,
  },
  categoryTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#790000',
  },
  horizontalList: {
    paddingLeft: 10,
  },
  productContainer: {
    marginRight: 15,
    alignItems: 'center',
    width: 150,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#790000', // Color marrón para el borde
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3, // Sombra en Android
  },
  productImage: {
    width: '100%',
    height: 120,
    borderRadius: 10,
    marginBottom: 10,
  },
  productName: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#790000',
  },
  productPrice: {
    fontSize: 14,
    color: '#00791f', // Color del precio
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default CatalogScreen;
