import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CatalogScreen from '../Screens/CatalogScreen'; // Verifica las rutas
import ProfileScreen from '../Screens/ProfileScreen';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Catalog" component={CatalogScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
