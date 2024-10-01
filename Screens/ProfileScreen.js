// screens/ProfileScreen.js
import React from 'react';
import { View, Text } from 'react-native';
import globalStyles from '../styles/globalStyles';

const ProfileScreen = () => {
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.title}>Perfil del Usuario</Text>
            <Text style={globalStyles.text}>Nombre: Usuario Ejemplo</Text>
            <Text style={globalStyles.text}>Email: ejemplo@correo.com</Text>
            {/* Agrega más información del perfil según sea necesario */}
        </View>
    );
};

export default ProfileScreen;

