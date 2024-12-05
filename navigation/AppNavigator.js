import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthContext } from '../context/auth-context';
import { View, ActivityIndicator } from 'react-native';
import TabNavigator from './TabNavigator';
import LoginScreen from '../Screens/LoginScreen';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  const authCtx = useContext(AuthContext);

  if (authCtx.isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={authCtx.isLogged ? "Home" : "Login"}>
    
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }} 
        />
        
        <Stack.Screen
          name="Home"
          component={TabNavigator}
          options={{ headerShown: false }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
