import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";

// --- Componente de Card Reutilizável (Adaptado) ---
const InfoCard = ({ icon, title, text }) => {
  return (
    <View style={styles.topicContainer}>
      <View style={styles.headerContent}>
        {/* Ícone/Emoji de Destaque */}
        <Text style={styles.topicEmoji}>{icon}</Text>
        <View style={styles.textHeader}>
          <Text style={styles.titleCard}>{title}</Text>
        </View>
      </View>
      
      <View style={styles.descriptionSection}>
        <Text style={styles.description}>{text}</Text>
      </View>
    </View>
  );
};

// --- Componente Principal Page Atualizado ---
export default function Page() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* BANNER HEADER (Design Consistente) */}
      <View style={styles.bannerHeader}>
        <Text style={styles.bannerTitle}>ℹ️ Sobre o Aplicativo</Text>
        <Text style={styles.bannerSubtitle}>Conheça a missão e a origem desta ferramenta.</Text>
      </View>

      <View style={styles.main}>
        
        <InfoCard
          icon={"🎯"}
          title="Objetivo da Missão"
          text={
            "Este aplicativo foi criado para conscientizar e prevenir o cyberbullying. Ele oferece dicas de segurança, maneiras de se proteger online e como agir diante de situações de bullying virtual. Através de conteúdo educativo, visamos criar um ambiente digital mais seguro para todos."
          }
        />

        <InfoCard
          icon={"🛠️"}
          title="Estrutura e Funcionalidades"
          text={
            "O aplicativo é dividido em seções para que você possa aprender sobre o que é o cyberbullying, como se proteger e o que fazer se for vítima. Os tópicos são organizados de forma simples e direta, com informações claras e práticas para o dia a dia e prevenção contínua."
          }
        />

        <InfoCard
          icon={"🧑‍💻"}
          title="Desenvolvimento "
          text={
            "Eu Pedro Henrique, desenvolvi este aplicativo com a ajuda do gemini, com o intuito de ajudar as pessoas a entenderem os riscos do cyberbullying e oferecer soluções de prevenção e ação. Se você tiver sugestões ou feedbacks, sinta-se à vontade para entrar em contato. Sua contribuição é valiosa!"
          }
        />
      </View>
    </ScrollView>
  );
}

// --- Estilos de Design Aplicados (Consistentes) ---
const styles = StyleSheet.create({
  // CONTAINER PRINCIPAL (Fundo)
  container: {
    flexGrow: 1, 
    backgroundColor: '#E8EEF4', // Fundo claro do design original
  },
  // BANNER HEADER (Cabeçalho de Destaque)
  bannerHeader: {
    backgroundColor: '#3452D3', // Cor de destaque azul
    paddingVertical: 30,
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
    color: '#D4E2FF', // Branco suave
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
  // TÓPICO - ELEMENTO DE SUBSTITUIÇÃO (Emoji/Ícone)
  topicEmoji: {
    fontSize: 32, 
    marginRight: 15,
  },
  // ESTILOS DO CARD DO TÓPICO (topicContainer substitui 'card')
  topicContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15, 
    padding: 20,
    marginBottom: 20,
    elevation: 5, 
    shadowColor: '#1A2940', // Sombra escura sutil
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08, 
    shadowRadius: 10,
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'flex-start', 
    marginBottom: 10,
  },
  textHeader: {
    flex: 1, 
  },
  // TÍTULO do Card (titleCard substitui cardTitle)
  titleCard: {
    fontSize: 22, 
    fontWeight: '700',
    color: '#1A2940',
    marginBottom: 4,
    textAlign: 'left', 
  },
  descriptionSection: {
    paddingLeft: 5, 
    paddingBottom: 5,
  },
  // DESCRIÇÃO (description substitui cardText)
  description: {
    fontSize: 15,
    color: '#4B5C75',
    textAlign: 'left',
    lineHeight: 22,
  },
});