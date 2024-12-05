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
        width: '60%', 
        alignSelf: 'center', 
        backgroundColor: '#790000', 
        paddingVertical: 10,
    },
    buttonText: {
        color: '#fff', 
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 16,
    },
    // Nuevo estilo para el botón de "Eliminar"
    removeButton: {
        backgroundColor: '#f44336', // Rojo
        paddingVertical: 6,
        paddingHorizontal: 12,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 8,
    },
    removeButtonText: {
        color: '#fff',
        fontSize: 14,
    },
    
    clearCartButton: {
        backgroundColor: '#ff9800', 
        paddingVertical: 12,
        marginTop: 20,
        borderRadius: 5,
        alignItems: 'center',
    },
    clearCartButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default CartStyles;
