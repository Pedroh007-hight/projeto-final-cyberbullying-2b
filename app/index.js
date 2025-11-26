import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Dimensions } from "react-native";

const { width } = Dimensions.get('window');
const scale = size => Math.round(width / 414 * size);

export default function Page() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.main}>
        
        <Text style={styles.heroIcon}>🛡️</Text>

        {/* Título Principal (Revisado) */}
        <Text style={styles.title}>Guia de Proteção contra Cyberbullying</Text>

        {/* Subtítulo (Revisado) */}
        <Text style={styles.subtitle}>
 Bem-vindo ao seu recurso essencial de segurança digital.
        </Text>

        {/* Descrição */}
        <View style={styles.descriptionCard}>
          <Text style={styles.description}>
  Este aplicativo foi criado para ajudar a combater o cyberbullying, fornecendo recursos e informações sobre como lidar com essa questão de forma segura e eficaz.
          </Text>
        </View>

        {/* Chamada para Ação (CTA) */}
        <TouchableOpacity style={styles.ctaButton}>
          <Text style={styles.ctaButtonText}>Começar e Ver Dicas</Text>
        </TouchableOpacity>

        {/* Crédito */}
        <Text style={styles.credit}>Desenvolvido por Pedro Henrique</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  // CONTAINER PRINCIPAL
  container: {
    flexGrow: 1,
    backgroundColor: '#E8EEF4', 
    justifyContent: 'center', 
    alignItems: 'center', 
    paddingVertical: scale(40),
  },
  main: {
    alignItems: 'center',
    width: '100%',
    maxWidth: 500,
    paddingHorizontal: '5%',
  },
  // ÍCONE HERO
  heroIcon: {
    fontSize: scale(100), 
    marginBottom: scale(20),
    textShadowColor: 'rgba(52, 82, 211, 0.2)', 
    textShadowOffset: { width: 0, height: scale(4) },
    textShadowRadius: scale(8),
  },
  // TÍTULOS
  title: {
    fontSize: scale(32),
    fontWeight: '800', 
    color: '#1A2940', 
    marginBottom: scale(15),
    textAlign: 'center', // Garante alinhamento
    width: '100%', // Adiciona 100% de largura para garantir o centro perfeito
  },
  subtitle: {
    fontSize: scale(20),
    color: '#65748F', 
    textAlign: 'center', // Garante alinhamento
    width: '100%', // Adiciona 100% de largura para garantir o centro perfeito
    marginBottom: scale(25), 
  },
  // CARTÃO DE DESCRIÇÃO
  descriptionCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: scale(15), 
    padding: scale(15),
    marginBottom: scale(35),
    width: '100%',
    elevation: 5, 
    shadowColor: '#1A2940',
    shadowOffset: { width: 0, height: scale(4) },
    shadowOpacity: 0.08, 
    shadowRadius: scale(10),
  },
  description: {
    fontSize: scale(17), 
    color: '#4B5C75', 
    textAlign: 'center', 
    lineHeight: scale(26), 
  },
  // BOTÃO CTA
  ctaButton: {
    backgroundColor: '#3452D3', 
    paddingVertical: scale(18),
    paddingHorizontal: scale(40),
    borderRadius: scale(10), 
    width: '90%', 
    shadowColor: '#3452D3',
    shadowOffset: { width: 0, height: scale(4) },
    shadowOpacity: 0.5,
    shadowRadius: scale(8),
    elevation: 8,
  },
  ctaButtonText: {
    color: 'white',
    fontSize: scale(19), 
    fontWeight: '700',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  // CRÉDITO
  credit: {
    fontSize: scale(15), 
    color: '#65748F',
    marginTop: scale(40), 
    textAlign: 'center', 
    opacity: 0.7,
  },
});