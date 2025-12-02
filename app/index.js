import React from 'react';
import { StyleSheet, Text, View, ScrollView, Dimensions, Platform } from "react-native";

// -------------------------------------------------------------------------
// 1. LÓGICA DE ESCALA RESPONSIVA
// -------------------------------------------------------------------------

const MOBILE_BASE_WIDTH = 414;
// Base maior (1200) para reduzir o fator de escala (tirar o "zoom") na Web.
const WEB_BASE_WIDTH = 1200;

// 2. Função de Escala
const useResponsiveScale = () => {
    const currentBase = Platform.OS === 'web' ? WEB_BASE_WIDTH : MOBILE_BASE_WIDTH;
    const currentWidth = Dimensions.get('window').width;
    return (size) => Math.round((currentWidth / currentBase) * size);
}

// 3. Aplica a escala
const scale = useResponsiveScale();


export default function Page() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.main}>
       
        {/* Ícone de Destaque */}
        <Text style={styles.heroIcon}>🛡️</Text>

        {/* Título Principal */}
        <Text style={styles.title}>Cyberbullying: Guia de Proteção</Text>

        {/* Subtítulo */}
        <Text style={styles.subtitle}>
          Bem-vindo ao seu recurso de segurança digital.
        </Text>

        {/* Descrição */}
        <View style={styles.descriptionCard}>
          <Text style={styles.description}>
            Este aplicativo foi criado para ajudar a combater o cyberbullying, fornecendo recursos e informações sobre como lidar com essa questão de forma segura e eficaz.
          </Text>
        </View>

        {/* Crédito (Mantido no final) */}
        <Text style={styles.credit}></Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  // CONTAINER PRINCIPAL (Fundo)
  container: {
    flexGrow: 1,
    backgroundColor: '#E8EEF4', // Fundo claro e suave
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: scale(40),
  },
  main: {
    alignItems: 'center',
    width: '100%',
    // Largura máxima para a Web
    maxWidth: 700,
    paddingHorizontal: scale(20),
  },
  // ÍCONE HERO
  heroIcon: {
    fontSize: scale(100), // Escalado
    marginBottom: scale(30), // Escalado
    // Cor do ícone
    textShadowColor: 'rgba(52, 82, 211, 0.2)', // Sombra sutil
    textShadowOffset: { width: 0, height: scale(4) },
    textShadowRadius: scale(8),
  },
  // TÍTULOS
  title: {
    fontSize: scale(36), // Escalado
    fontWeight: '800',
    color: '#1A2940',
    marginBottom: scale(15),
    textAlign: 'center',
  },
  subtitle: {
    fontSize: scale(20), // Escalado
    color: '#65748F',
    textAlign: 'center',
    marginBottom: scale(30),
  },
  // CARTÃO DE DESCRIÇÃO
  descriptionCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: scale(15),
    padding: scale(30), // Escalado
    marginBottom: scale(1),
    width: '100%',
    elevation: 5,
    shadowColor: '#1A2940',
    shadowOffset: { width: 0, height: scale(4) },
    shadowOpacity: 0.08,
    shadowRadius: scale(10),
  },
  description: {
    fontSize: scale(18), // Escalado
    color: '#4B5C75',
    textAlign: 'center',
    lineHeight: scale(28), // Escalado
  },

  // CRÉDITO
  credit: {
    fontSize: scale(18),
    color: '#65748F',
    marginTop: scale(40),
    textAlign: 'center',
    opacity: 0.7,
  },
});