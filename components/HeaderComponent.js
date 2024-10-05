// components/HeaderComponent.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient'; // Asegúrate de instalar este paquete

const HeaderComponent = ({ title }) => {
    return (
        <LinearGradient
            colors={['#8E0F16', '#1F1C2C']} // Colores del degradado
            style={styles.header}
        >
            <Text style={styles.headerTitle}>{title}</Text>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    header: {
        height: 100, // Mayor altura para un mejor impacto
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 6,
    },
    headerTitle: {
        color: '#FFFFFF', // Color del texto
        fontSize: 28,   // Tamaño del texto aumentado
        fontWeight: 'bold', // Fuente en negrita
        textAlign: 'center',
    },
});

export default HeaderComponent;
