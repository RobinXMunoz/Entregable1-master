import { StyleSheet } from 'react-native';

const TabNavigatorStyles = StyleSheet.create({
    tabBarStyle: {
        backgroundColor: '#fff', 
        height: 60, 
        paddingBottom: 10, 
    },
    cartIconBadge: {
        position: 'absolute',
        top: -5,
        right: -5,
        backgroundColor: '#bb0000',
        borderRadius: 10,
        width: 20,
        height: 20,
        justifyContent: 'center',
        alignItems: 'center',
      },
      cartIconBadgeText: {
        color: '#fff',
        fontSize: 12,
        fontWeight: 'bold',
      },
});

export default TabNavigatorStyles;
