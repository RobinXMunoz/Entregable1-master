import React, { useEffect, useState } from 'react';
import { View, Dimensions, FlatList, Text, TouchableOpacity, ImageBackground, ScrollView, StyleSheet, Image } from 'react-native';
import ProductCard from '../components/ProductCard';
import globalStyles from '../styles/globalStyles';
import { getBebidas } from '../utils/Uploadbebidas';
import { getCategories } from '../utils/Categories-data';


const { width: screenWidth } = Dimensions.get('window');

const CatalogScreen = ({ navigation }) => {
    const [products, setProducts] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);

    useEffect(() => {
        async function fetchData() {
            const productsData = await getBebidas();
            // const categoriesData = await getCategories();
            console.log("Productos:", productsData); // Verifica si se obtienen los productos
            // console.log("Categorías:", categoriesData); // Verifica si se obtienen las categorías
            setProducts(productsData);
            console.log (products)

            // setCategories(categoriesData);
        }
        fetchData();
    }, []);

    const renderProductItem = ({ item }) => (
        navigation.navigate('ProductDetail', { productId: item.id })
        // <ProductCard 
        //     product={item} 
        //     onClick={() => navigation.navigate('ProductDetail', { productId: item.id })} // Pasar solo el ID
        // />
    );

    const renderCategoryItem = ({ item }) => (
        <TouchableOpacity 
            style={{
                padding: 10,
                marginRight: 8,
                //backgroundColor: selectedCategory === item.id ? '#333' : '#ccc',
                borderRadius: 20,
            }}
            onPress={() => setSelectedCategory(item.id)}
        >
            <Text style={{ color: selectedCategory === item.id ? '#fff' : '#000' }}>{item.nombre}</Text>
        </TouchableOpacity>
    );

    const groupedProducts = products.reduce((acc, product) => {
        if (!acc[product.category]) {
          acc[product.category] = [];
        }
        acc[product.category].push(product);
        return acc;
      }, {});

    return (

        <ScrollView style={styles.container}>
      {Object.keys(groupedProducts).map((category) => (
        <View key={category} style={styles.categoryContainer}>
          <Text style={styles.categoryTitle}>{category}</Text>
          {groupedProducts[category].map((product) => (
            <TouchableOpacity key={product.id} style={styles.productContainer} onPress={() => renderProductItem({ item: product })}>
              <Image source={{ uri: product.image }} style={styles.productImage} />
              <View style={styles.productInfo}>
                <Text style={styles.productName}>{product.name}</Text>
                <Text style={styles.productDescription}>{product.description}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      ))}
    </ScrollView>

    //     <ImageBackground
    //     source={require('../assets/Fondo.jpg')} // Asegúrate de que la imagen esté en la carpeta assets
    //     style={{ flex: 1, width: '100%', justifyContent :'center'}}
    //     resizeMode="cover"
        
    // >

    //     <View style={globalStyles.container}>

    //         <FlatList
    //             data={products}
    //             renderItem={renderProductItem}
    //             keyExtractor={(item) => item.id}
    //             horizontal={true}
    //             showsHorizontalScrollIndicator={false}
    //             contentContainerStyle={{ paddingHorizontal: 10 }}
    //         />
    //          </View>
    //          </ImageBackground>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f5f5f5',
      padding: 10,
    },
    categoryContainer: {
      marginBottom: 20,
    },
    categoryTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 10,
      color: '#333',
    },
    productContainer: {
      flexDirection: 'row',
      marginBottom: 10,
      backgroundColor: '#fff',
      padding: 10,
      borderRadius: 8,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 4,
      elevation: 3,
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
    productDescription: {
      fontSize: 14,
      color: '#666',
    },
  });

export default CatalogScreen;