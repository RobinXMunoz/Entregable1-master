// screens/WelcomeScreen.js
import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import ButtonComponent from '../components/ButtonComponent';
import globalStyles from '../styles/globalStyles';

const WelcomeScreen = ({ navigation }) => {
    return (

        
            <View style={globalStyles.container}>
                <Text style={globalStyles.title}>¡Bienvenido a la App de Bebidas!</Text>
                <ButtonComponent 
                    title="Ir al Catálogo" 
                    onClick={() => navigation.navigate('Catalog')} 
                />
            </View>
       
    );
};

export default WelcomeScreen;



