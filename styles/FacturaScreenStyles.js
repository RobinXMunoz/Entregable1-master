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
});

export default FacturaScreenStyles;
