import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from "react-native";

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

        {/* Chamada para Ação (CTA) */}
        <TouchableOpacity style={styles.ctaButton}>
          <Text style={styles.ctaButtonText}>Ver Dicas de Segurança</Text>
        </TouchableOpacity>

        {/* Crédito (Mantido no final) */}
        <Text style={styles.credit}>Desenvolvido por Pedro Henrique</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  // CONTAINER PRINCIPAL (Fundo)
  container: {
    flexGrow: 1,
    backgroundColor: '#E8EEF4',  // Fundo claro e suave
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 40,
  },
  main: {
    alignItems: 'center',
    width: '100%',
    maxWidth: 500, // Limita a largura em telas maiores
    paddingHorizontal: 20,
  },
  // ÍCONE HERO
  heroIcon: {
    fontSize: 90,
    marginBottom: 20,
    // Cor do ícone
    textShadowColor: 'rgba(52, 82, 211, 0.2)', // Sombra sutil
    textShadowOffset: { width: 0, height: 4 },
    textShadowRadius: 8,
  },
  // TÍTULOS
  title: {
    fontSize: 30,
    fontWeight: '800',
    color: '#1A2940', // Cor escura forte
    marginBottom: 15,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    color: '#65748F', // Cor de texto suave
    textAlign: 'center',
    marginBottom: 25,
  },
  // CARTÃO DE DESCRIÇÃO (Para visualização melhor)
  descriptionCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 25,
    marginBottom: 35,
    width: '100%',
    elevation: 5,
    shadowColor: '#1A2940',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 10,
  },
  description: {
    fontSize: 16,
    color: '#4B5C75',
    textAlign: 'center',
    lineHeight: 24,
  },
  // BOTÃO CTA (Chamada para Ação)
  ctaButton: {
    backgroundColor: '#3452D3', // Cor primária do design
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
    width: '80%',
    // Sombra para destacar o botão
    shadowColor: '#3452D3',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 8,
    elevation: 8,
  },
  ctaButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  // CRÉDITO
  credit: {
    fontSize: 14,
    color: '#65748F',
    marginTop: 40,
    textAlign: 'center',
    opacity: 0.7,
  },
});