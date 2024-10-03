import React from 'react';
import { View, Dimensions, FlatList } from 'react-native';
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
        image: 'https://supermercadolaestacion.com/48463-large_default/whisky-jack-daniels-tradicional-botella-x-700-ml.jpg' 
    },
    { 
        id: '4', 
        name: 'Tequila', 
        price: 25, 
        image: 'https://licoresmedellin.com/cdn/shop/files/TEQUILA_DON_JULIO_70_BOTELL_700ml.jpg?v=1712781693&width=1024' 
    },
    { 
        id: '5', 
        name: 'Ron', 
        price: 30, 
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvHPfXD4EftN4_P3XZTo9YkvHAPtioEKsY2A&s' 
    },
    // Agrega más productos según sea necesario
];

const { width: screenWidth } = Dimensions.get('window');

const CatalogScreen = ({ navigation }) => {
    // Función para renderizar cada producto
    const renderItem = ({ item }) => (
        <ProductCard 
            product={item} 
            onClick={() => navigation.navigate('ProductDetail', { 
                product: item, 
                products: products, // Pasar la lista de productos
                index: products.indexOf(item) // Pasar el índice del producto actual
            })}  
        />
    );

    return (
        <View style={globalStyles.container}>
            <FlatList
                data={products}           // Datos que serán mostrados (productos)
                renderItem={renderItem}    // Función que renderiza cada producto
                keyExtractor={(item) => item.id} // Clave única para cada ítem
                horizontal={true}         // Mostrar en horizontal
                showsHorizontalScrollIndicator={false} // Ocultar la barra de desplazamiento horizontal
                contentContainerStyle={{ paddingHorizontal: 10}} // Agregar espaciado horizontal
            />
        </View>
    );
};

export default CatalogScreen;
