import React from 'react';
import { View, Dimensions, FlatList } from 'react-native';
import ProductCard from '../components/ProductCard';
import globalStyles from '../styles/globalStyles';

// Lista de productos
const products = [
    { 
        id: '1', 
        name: 'Jugo Hit', 
        price: 10, 
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4KoMp8hC_ZfXwYZqFuMtAUeGxtNAr8q8vzg&s' 
    },
    { 
        id: '2', 
        name: 'Coca-Cola', 
        price: 20, 
        image: 'https://lavaquita.co/cdn/shop/products/supermercados_la_vaquita_supervaquita_gaseosa_coca_cola_10_oz_zero_bebidas_liquidas_700x700.jpg?v=1620489359' 
    },
    { 
        id: '3', 
        name: 'Tea Hatsu', 
        price: 30, 
        image: 'https://hatsu.co/wp-content/uploads/2023/04/PRODUCTOS-SITIO-WEB_20.png' 
    },
    { 
        id: '4', 
        name: 'Cafecito', 
        price: 25, 
        image: 'https://carulla.vtexassets.com/arquivos/ids/17473436/Bebida-Cafe-Frappuccino-Coffee-281-ml-91398_a.jpg?v=638613191889800000' 
    },
    { 
        id: '5', 
        name: 'Granizado', 
        price: 30, 
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwYgRmYE2Fd_SZLmguRbF565s3xdfx4sLuNA&s' 
    },
    // Agrega más productos según sea necesario
];

const { width: screenWidth } = Dimensions.get('window');

const CatalogScreen = ({ navigation }) => {
    // Función para renderizar cada producto
    const renderItem = ({ item, index }) => (
        <ProductCard 
            product={item} 
            onClick={() => navigation.navigate('ProductDetail', { 
                product: item,      // Pasar el producto actual
                products: products, // Pasar la lista completa de productos
                index: index        // Pasar el índice del producto actual
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
                contentContainerStyle={{ paddingHorizontal: 10 }} // Agregar espaciado horizontal
            />
        </View>
    );
};

export default CatalogScreen;
