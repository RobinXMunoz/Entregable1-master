import { StyleSheet } from 'react-native';

const CartStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#f5f5f5',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
        textAlign: 'center',
    },
    itemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    itemText: {
        fontSize: 18,
        color: '#333',
    },
    itemPrice: {
        fontSize: 18,
        color: '#4CAF50',
    },
    emptyText: {
        textAlign: 'center',
        color: '#666',
        fontSize: 16,
        marginTop: 20,
    },
    itemImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginLeft: 10,
    },
    buttonContainer: {
        marginTop: 10,
        borderRadius: 10,
        overflow: 'hidden',
        width: '20%', // Cambiar el ancho del botón según sea necesario
        alignSelf: 'center', // Centrar el botón horizontalmente
        backgroundColor: '#790000', // Fondo del botón
        paddingVertical: 10, // Altura del botón
    },
    buttonText: {
        color: '#fff', // Color del texto
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 16,
    },
});

export default CartStyles;
