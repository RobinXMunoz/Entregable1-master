// screens/CatalogScreen.js
import React from 'react';
import { View, Dimensions } from 'react-native';
//import Carousel from 'react-native-snap-carousel';
import ProductCard from '../components/ProductCard';
import globalStyles from '../styles/globalStyles';

// Lista de productos
const products = [
    { 
        id: '1', 
        name: 'Cerveza', 
        price: 10, 
        image: 'https://images.unsplash.com/photo-1618885472179-5e474019f2a9?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2VydmV6YXxlbnwwfHwwfHx8MA%3D%3D' 
    },
    { 
        id: '2', 
        name: 'Vino', 
        price: 20, 
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0mEBYb-I9KDimRiK2DZWq9PhIU_JxWmQg0w&s' 
    },
    { 
        id: '3', 
        name: 'Whisky', 
        price: 30, 
        image: 'https://images.unsplash.com/photo-1555685813-96c2d527c2de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwyMDg4NzZ8MHwxfGFsbHwxfHx8fHx8fHwxNjE3MzM2NjY1&ixlib=rb-1.2.1&q=80&w=400' 
    },
    { 
        id: '4', 
        name: 'Tequila', 
        price: 25, 
        image: 'https://images.unsplash.com/photo-1517694712202-b8e7b70c27f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwyMDg4NzZ8MHwxfGFsbHw0fHx8fHx8fHwxNjE3MzM2NjY1&ixlib=rb-1.2.1&q=80&w=400' 
    },
    // Agrega más productos según sea necesario
];

const { width: screenWidth } = Dimensions.get('window');

const CatalogScreen = ({ navigation }) => {
    // Función para renderizar cada producto
    const renderItem = ({ item }) => (
        <ProductCard 
            product={item} 
            onClick={() => navigation.navigate('ProductDetail', { productId: item.id })} 
        />
    );

    return (
        <View style={globalStyles.container}>
           
        </View>
    );
};

export default CatalogScreen;
