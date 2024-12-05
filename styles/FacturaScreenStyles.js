import { StyleSheet } from "react-native";

const FacturaScreenStyles = StyleSheet.create({
   
    listContainer: {
        padding: 10,
    },
    itemContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 10,
        backgroundColor: "#f9f9f9",
        borderRadius: 8,
        padding: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10,
    },
    textContainer: {
        flex: 1,
    },
    title: {
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 2,
    },
    description: {
        fontSize: 14,
        color: "#666",
        marginBottom: 2,
    },
    category: {
        fontSize: 12,
        color: "#999",
    },

    // Nuevos estilos
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        padding: 16,
        backgroundColor: '#bb0000',
        marginBottom: 10,
    },
    headerText: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    headerDetails: {
        color: '#fff',
        fontSize: 14,
        textAlign: 'center',
    },
    totalContainer: {
        padding: 16,
        backgroundColor: '#f0f0f0',
        borderTopWidth: 1,
        borderColor: '#ddd',
    },
    totalText: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'right',
    },
});

export default FacturaScreenStyles;
