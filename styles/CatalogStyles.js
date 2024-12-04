import { StyleSheet } from 'react-native';

const CatalogStyles = StyleSheet.create({
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

export default CatalogStyles;
