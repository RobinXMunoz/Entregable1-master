// components/HeaderComponent.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HeaderComponent = ({ title }) => {
    return (
        <View style={styles.header}>
            <Text style={styles.headerTitle}>{title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#6200EE', // Cambia esto al color deseado
        padding: 20,
        alignItems: 'center',
    },
    headerTitle: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
    },
});

export default HeaderComponent;

