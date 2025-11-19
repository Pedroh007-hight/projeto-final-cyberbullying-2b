import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: '#2E86DE', tabBarStyle: { backgroundColor: '#F9F9F9', height: 60, borderTopWidth: 0 } }}>
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
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="shield" color={color} />, // ícone de escudo
          headerShown: false,
        }}
      />

      {/* Tela de Cuidados */}
      <Tabs.Screen
        name="careful"
        options={{
          title: 'Cuidados',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="medkit" color={color} />, // ícone de kit de primeiros socorros
          headerShown: false,
        }}
      />

      {/* Tela Sobre */}
      <Tabs.Screen
        name="aboutme"
        options={{
          title: 'Sobre',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="user" color={color} />, // ícone de usuário
          headerShown: false,
        }}
      />
    </Tabs>
  );
}
