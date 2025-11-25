import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Page() {
  return (
    // CONTAINER: Fundo gradiente sutil
    <View style={styles.container}>
      
      {/* MAIN: Card de conteúdo centralizado */}
      <View style={styles.main}>
        
        {/* Título Principal com Ícone/Emoji */}
        <Text style={styles.title}>
          🛡️ Cyber Bullying
        </Text>
        
        {/* Subtítulo de Boas-vindas */}
        <Text style={styles.subtitle}>
          Bem-vindo ao Aplicativo
        </Text>
        
        {/* Descrição do Aplicativo */}
        <Text style={styles.description}>
          Este aplicativo foi criado para ajudar a combater o cyber bullying, fornecendo recursos e
          informações sobre como lidar com essa questão, promovendo um ambiente digital mais seguro.
        </Text>
        
        {/* Crédito do Desenvolvedor (Estilizado de forma discreta) */}
        <View style={styles.creditContainer}>
          <Text style={styles.creditText}>
            Desenvolvido por **Pedro Henrique**
          </Text>
        </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  // --- CONTAINER PRINCIPAL ---
  container: {
    flex: 1,
    // Fundo azul muito suave (quase branco)
    backgroundColor: '#E8EEF4', 
    justifyContent: 'center', 
    alignItems: 'center', 
  },
  
  // --- CARD PRINCIPAL (MAIN) ---
  main: {
    backgroundColor: '#FFFFFF', // Card branco
    borderRadius: 15, // Bordas arredondadas
    padding: 30,
    marginHorizontal: 25,
    maxWidth: 450, 
    // Sombra proeminente para efeito flutuante
    shadowColor: '#1A2940',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.15,
    shadowRadius: 20,
    elevation: 10, 
    alignItems: 'center',
    width: '100%',
  },
  
  // --- TIPOGRAFIA ---
  title: {
    fontSize: 34, 
    fontWeight: '800', 
    color: '#3452D3', // Cor de destaque (Azul Primário)
    marginBottom: 10, 
    textAlign: 'center', 
  },
  subtitle: {
    fontSize: 18,
    color: '#65748F', 
    textAlign: 'center',
    marginBottom: 30, 
    fontWeight: '400',
  },
  description: {
    fontSize: 16,
    color: '#4B5C75', 
    textAlign: 'center',
    marginBottom: 40, 
    lineHeight: 24, 
    paddingHorizontal: 10, // Diminui o texto das bordas
  },
  
  // --- CRÉDITO ---
  creditContainer: {
    paddingTop: 15,
    borderTopWidth: 1,
    borderTopColor: '#F0F4F8', // Linha divisória sutil
    width: '100%',
    alignItems: 'center',
  },
  creditText: {
    fontSize: 14,
    color: '#65748F', 
    fontWeight: '300', 
  },
});