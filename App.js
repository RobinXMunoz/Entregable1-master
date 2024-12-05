import React from 'react';
import { View, StyleSheet } from 'react-native';
import AppNavigator from './navigation/AppNavigator';
import AuthContextProvider from './context/auth-context'; // Contexto de autenticación
import CartProvider from './context/cart-context'; // Contexto de carrito
import enMessages from './translations/en/globalEn.json';
import esMessages from './translations/es/globalEs.json';
import { LanguageProvider, useLanguage } from './Screens/LanguageProvider';
import { IntlProvider } from 'react-intl';


const messages = {
  en: enMessages,
  es: esMessages,
};

const App = () => {
  return (
    <LanguageProvider>
      <MainApp />
    </LanguageProvider>
  );
};

const MainApp = () => {
  const { locale } = useLanguage(); // Correcto: ya está dentro del proveedor

  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <AuthContextProvider>
        <CartProvider>
          <View style={styles.container}>
            <AppNavigator />
          </View>
        </CartProvider>
      </AuthContextProvider>
    </IntlProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
  },
});

export default App;
