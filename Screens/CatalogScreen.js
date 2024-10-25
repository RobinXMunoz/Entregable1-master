import React from 'react';
import { View, Dimensions, FlatList } from 'react-native';
import ProductCard from '../components/ProductCard';
import globalStyles from '../styles/globalStyles';

// Lista de productos
const products = [
    { 
        id: '1', 
        name: 'Hit', 
        price: 10, 
        description: 'Un delicioso jugo de fruta natural',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4KoMp8hC_ZfXwYZqFuMtAUeGxtNAr8q8vzg&s',
    },
    { 
        id: '2', 
        name: 'Coca-Cola', 
        price: 20, 
        description: 'Refresco popular y refrescante',
        image: 'https://lavaquita.co/cdn/shop/products/supermercados_la_vaquita_supervaquita_gaseosa_coca_cola_10_oz_zero_bebidas_liquidas_700x700.jpg?v=1620489359',
    },
    { 
        id: '3', 
        name: 'Tea Hatsu', 
        price: 30, 
        description: 'Té helado refrescante',
        image: 'https://hatsu.co/wp-content/uploads/2023/04/PRODUCTOS-SITIO-WEB_20.png',
    },
    { 
        id: '4', 
        name: 'Cafecito', 
        price: 25, 
        description: 'Café aromático y delicioso',
        image: 'https://carulla.vtexassets.com/arquivos/ids/17473436/Bebida-Cafe-Frappuccino-Coffee-281-ml-91398_a.jpg?v=638613191889800000',
    },
    { 
        id: '5', 
        name: 'Granizado', 
        price: 30, 
        description: 'Bebida fría y refrescante',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwYgRmYE2Fd_SZLmguRbF565s3xdfx4sLuNA&s',
    },
];

const { width: screenWidth } = Dimensions.get('window');

const CatalogScreen = ({ navigation }) => {
    const renderItem = ({ item, index }) => (
        <ProductCard 
            product={item} 
            onClick={() => navigation.navigate('ProductDetail', { 
                product: item, 
                products: products, 
                index: index 
            })} 
        />
    );

    return (
        <View style={globalStyles.container}>
            <FlatList
                data={products}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingHorizontal: 10 }}
            />
        </View>
    );
};

export default CatalogScreen;
