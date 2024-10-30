import React from 'react';
import { View, Text, Image, StyleSheet, Pressable } from 'react-native';
import globalStyles from '../styles/globalStyles';
import addCompra from '../utils/post-data';

const ProductDetail = ({ route, navigation }) => {
    const { product } = route.params;
    const [loading, setLoading] = React.useState(true);

    const handleAddToCart = () => {
        console.log(product.id);
        addCompra(product)
    };

    return (
        <View style={globalStyles.container}>
            <View style={styles.imageContainer}>
                {loading && <Text>Cargando imagen...</Text>}
                <Image 
                    source={{ uri: product.image }}
                    style={styles.image} 
                    resizeMode="contain"  // Ajuste para que la imagen se vea completamente
                    onLoad={() => setLoading(false)}
                    onError={() => {
                        setLoading(false);
                        console.log('Error al cargar la imagen');
                    }}
                />
            </View>
            <Text style={styles.name}>{product.name}</Text>
            <Text style={styles.price}>${product.price}</Text>
            <Text style={styles.description}>{product.description}</Text>
            <Pressable style={styles.button} onPress={handleAddToCart}>
                <Text style={styles.buttonText}>Agregar al carrito</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    imageContainer: {
        alignItems: 'center',
        marginVertical: 20,
    },
    image: {
        width: '100%',
        height: 300,  // Ajusta este valor según tus necesidades
        borderRadius: 10,
    },
    name: {
        fontWeight: 'bold',
        fontSize: 24,
        marginVertical: 10,
        textAlign: 'center',
    },
    price: {
        fontWeight: 'bold',
        color: '#581845',
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 10,
    },
    description: {
        fontSize: 16,
        color: '#333',
        marginVertical: 10,
        paddingHorizontal: 20,
        textAlign: 'center',
    },
    button: {
        backgroundColor: '#670000',
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginTop: 20,
        alignSelf: 'center',
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 4,
        shadowOffset: { width: 0, height: 2 },
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
});

export default ProductDetail;
