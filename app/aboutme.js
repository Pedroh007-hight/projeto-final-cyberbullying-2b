import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";

// --- Componente de Card Reutilizável ---
// Este componente encapsula a lógica de estilo do card.
const InfoCard = ({ title, content, emoji }) => (
  <View style={styles.card}>
    <View style={styles.cardHeader}>
      <Text style={styles.cardEmoji}>{emoji}</Text>
      <Text style={styles.cardTitle}>{title}</Text>
    </View>
    <Text style={styles.cardText}>
      {content}
    </Text>
  </View>
);

// --- Componente Principal Page ---
export default function Page() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      
      {/* 1. BANNER/HEADER COESO */}
      <View style={styles.bannerHeader}>
        <Text style={styles.bannerTitle}>ℹ️ Sobre o Aplicativo</Text>
        <Text style={styles.bannerSubtitle}>Propósito</Text>
      </View>

      <View style={styles.main}>
        
        {/* 2. OBJETIVO DO APLICATIVO */}
        <InfoCard
          emoji={"🎯"}
          title="Nossa Missão"
          content={
            "Este aplicativo foi criado para conscientizar e prevenir o cyberbullying. Ele oferece dicas de segurança, formas de se proteger online e orientações claras sobre como agir diante de situações de assédio virtual." +
            "\n\nAtravés de conteúdo educativo e recursos úteis, buscamos criar um ambiente digital mais seguro e acolhedor para todos os usuários."
          }
        />

        {/* 3. COMO FUNCIONA */}
        <InfoCard
          emoji={"💡"}
          title="Como Funciona"
          content={
            "O aplicativo é dividido em seções claras e diretas: Cuidados Essenciais (prevenção), Identificação (o que é cyberbullying) e Ação (o que fazer se for vítima)." +
            "\n\nOs tópicos são organizados de forma simples, com informações práticas e acessíveis para o seu dia a dia, ajudando a fortalecer sua segurança digital."
          }
        />

        {/* 4. DESENVOLVEDOR (Com nome mantido) */}
        <InfoCard
          emoji={"👨‍💻"}
          title="Desenvolvedor"
          content={
            "O aplicativo foi desenvolvido com o intuito de combater o cyberbullying e oferecer suporte a quem precisa." +
            "\n\nSua sugestão ou feedback é muito importante! Sinta-se à vontade para entrar em contato através do canal de suporte da plataforma."
          }
        />
        
      </View>
    </ScrollView>
  );
}

// --- Estilos Adaptados para o Design Anterior ---
const styles = StyleSheet.create({
  // CONTAINER PRINCIPAL (Fundo)
  container: {
    flexGrow: 1, 
    backgroundColor: '#E8EEF4', // Fundo azul claro coeso
  },
  // BANNER HEADER 
  bannerHeader: {
    backgroundColor: '#3452D3', // Cor de destaque (azul escuro)
    paddingVertical: 40,
    paddingHorizontal: 20,
    marginBottom: 10,
    alignItems: 'center',
  },
  bannerTitle: {
    fontSize: 26,
    fontWeight: '800',
    color: 'white',
    textAlign: 'center',
    marginBottom: 5,
  },
  bannerSubtitle: {
    fontSize: 16,
    color: '#D4E2FF',
    textAlign: 'center',
  },
  // CONTEÚDO PRINCIPAL
  main: {
    paddingHorizontal: 20,
    paddingTop: 10, 
    paddingBottom: 40,
    maxWidth: 600, 
    width: '100%',
    alignSelf: 'center', 
  },
  // ESTILOS DO CARD
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15, 
    padding: 20,
    marginBottom: 20, 
    elevation: 5, 
    shadowColor: '#1A2940',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08, 
    shadowRadius: 10,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  cardEmoji: {
    fontSize: 24,
    marginRight: 10,
  },
  cardTitle: {
    fontSize: 20, 
    fontWeight: '700',
    color: '#1A2940', // Cor de destaque do texto
    flex: 1,
  },
  cardText: {
    fontSize: 16,
    lineHeight: 24,
    color: '#4B5C75', // Cor do texto da descrição
    textAlign: 'left',
  },
});