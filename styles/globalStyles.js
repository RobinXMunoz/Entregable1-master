// styles/globalStyles.js
import { StyleSheet } from 'react-native';

const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000', // Cambiado a negro
        textAlign: 'center',
    },
    background: {
        width: '100%', // Ajusta el porcentaje según necesites
        height: '100%', // Ajusta el tamaño para que sea más pequeño
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center', // Centra el componente en el medio
    },
    
    
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
    },
    // Otros estilos...
});

export default globalStyles;



