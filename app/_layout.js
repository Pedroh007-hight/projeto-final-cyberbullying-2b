import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs 
      screenOptions={{ 
        tabBarActiveTintColor: '#2E86DE', 
        tabBarStyle: { 
          backgroundColor: '#F9F9F9', 
          height: 75, 
          borderTopWidth: 0,
          paddingBottom: 15,
        } 
      }}
    >
      {/* Tela inicial */}
      <Tabs.Screen
        name="index"
        options={{
          title: 'Início',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
          headerShown: false,
        }}
      />

      {/* Tela de prevenção de Cyberbullying */}
      <Tabs.Screen
        name="cyber"
        options={{
          title: 'Cyberbullying',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="shield" color={color} />,
          headerShown: false,
        }}
      />

      {/* Tela de Cuidados */}
      <Tabs.Screen
        name="careful"
        options={{
          title: 'Cuidados',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="medkit" color={color} />,
          headerShown: false,
        }}
      />

      {/* Tela Sobre (App) */}
      <Tabs.Screen
        name="about"
        options={{
          title: 'Sobre',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="info-circle" color={color} />, 
          headerShown: false,
        }}
      />

      {/* Tela Sobre Mim (Pessoa) */}
      <Tabs.Screen
        name="aboutme"
        options={{
          title: 'Sobre mim', // Título ajustado para clareza
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="user" color={color} />, // 💡 Ícone alterado para pessoa
          headerShown: false,
        }}
      />
    </Tabs>
  );
}