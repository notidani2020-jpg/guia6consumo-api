import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import LoginScreen from './LoginScreen';
import UsersScreen from './UsersScreen';
import UserDetailScreen from './UserDetailScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// Navegador con menú inferior (Bottom Tabs)
function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerStyle: { backgroundColor: '#3A24EC' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' },
        tabBarActiveTintColor: '#3A24EC',
        tabBarInactiveTintColor: '#8E8E93',
        tabBarStyle: { paddingBottom: 5, height: 60 },
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'UsuariosTab') {
            iconName = 'people';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen 
        name="Home" 
        component={LoginScreen} 
        options={{ 
          title: 'Home', 
          headerShown: false 
        }} 
      />
      <Tab.Screen 
        name="UsuariosTab" 
        component={UsersScreen} 
        options={{ title: 'Usuarios' }} 
      />
    </Tab.Navigator>
  );
}

// Navegador principal (Stack)
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="MainTabs"
        screenOptions={{
          headerStyle: { backgroundColor: '#3A24EC' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' },
        }}
      >
        <Stack.Screen 
          name="MainTabs" 
          component={BottomTabs} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="UserDetail" 
          component={UserDetailScreen} 
          options={{ title: 'Detalle del usuario' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}