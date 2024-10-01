// screens/ProductDetailScreen.js
import React from 'react';
import { View, Text, Image } from 'react-native';
import globalStyles from '../styles/globalStyles';

// Simula la obtención de un producto (deberías hacer esto dinámicamente)
const getProductById = (id) => {
    const products = [
        {
            id: '1',
            name: 'Cerveza',
            price: 10,
            description: 'Descripción de la cerveza.',
            image: 'https://images.unsplash.com/photo-1618885472179-5e474019f2a9?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2VydmV6YXxlbnwwfHwwfHx8MA%3D%3D',
        },
        {
            id: '2',
            name: 'Vino',
            price: 20,
            description: 'Descripción del vino.',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0mEBYb-I9KDimRiK2DZWq9PhIU_JxWmQg0w&s',
        },
        // Agrega más productos aquí
    ];

    return products.find(product => product.id === id);
};

const ProductDetailScreen = ({ route }) => {
    const { productId } = route.params;
    const product = getProductById(productId); // Obtén el producto basado en el ID

    if (!product) {
        return (
            <View style={globalStyles.container}>
                <Text style={globalStyles.title}>Producto no encontrado</Text>
            </View>
        );
    }

    return (
        <View style={globalStyles.container}>
            <Image source={{ uri: product.image }} style={{ width: '100%', height: 200, borderRadius: 10 }} />
            <Text style={globalStyles.title}>{product.name}</Text>
            <Text>Precio: ${product.price}</Text>
            <Text>{product.description}</Text>
        </View>
    );
};

export default ProductDetailScreen;
