import React from 'react';
import { View, StyleSheet } from 'react-native';
import AppNavigator from './navigation/AppNavigator'; 
import AuthContextProvider from './context/auth-context'; // Importar el nuevo contexto

const App = () => {
  console.log("hola")
  return (
    <AuthContextProvider>
      <View style={styles.container}>
        <AppNavigator />
      </View>
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
