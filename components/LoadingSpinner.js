// components/LoadingSpinner.js
import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

const LoadingSpinner = () => {
    return (
        <View style={styles.loadingSpinner}>
            <ActivityIndicator size="large" color="#6200EE" />
        </View>
    );
};

const styles = StyleSheet.create({
    loadingSpinner: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default LoadingSpinner;

