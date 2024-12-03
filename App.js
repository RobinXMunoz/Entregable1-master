import React from 'react';
import { View, StyleSheet } from 'react-native';
import AppNavigator from './navigation/AppNavigator';
import AuthContextProvider from './context/auth-context'; // Contexto de autenticación
import CartProvider from './context/cart-context'; // Contexto de carrito

const App = () => {
  return (
    <AuthContextProvider>
      <CartProvider>
        <View style={styles.container}>
          <AppNavigator />
        </View>
      </CartProvider>
    </AuthContextProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
  },
});

export default App;
