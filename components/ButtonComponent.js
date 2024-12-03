// components/ButtonComponent.js
import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';

const ButtonComponent = ({ title, onClick }) => {
    return (
        <Pressable style={styles.button} onPress={onClick}>
            <Text style={styles.buttonText}>{title}</Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#6200EE',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        margin: 10,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center', // Asegura que el texto esté centrado
    },
});

export default ButtonComponent;

