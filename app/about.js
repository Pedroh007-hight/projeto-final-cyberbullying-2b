import React from "react";
import { StyleSheet, Text, View, ScrollView, Dimensions, Platform } from "react-native";

// -------------------------------------------------------------------------
// 1. LÓGICA DE ESCALA RESPONSIVA
// -------------------------------------------------------------------------

const MOBILE_BASE_WIDTH = 414;
// Usamos uma base maior (1200) para reduzir o fator de escala na Web (tirar o "zoom").
const WEB_BASE_WIDTH = 1200; 

// 2. Função de Escala
const useResponsiveScale = () => {
    const currentBase = Platform.OS === 'web' ? WEB_BASE_WIDTH : MOBILE_BASE_WIDTH;
    const currentWidth = Dimensions.get('window').width;
    return (size) => Math.round((currentWidth / currentBase) * size);
}

// 3. Aplica a escala
const scale = useResponsiveScale();


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
            "Eu desenvolvi este aplicativo com o intuito de ajudar as pessoas a entenderem os riscos do cyberbullying e oferecer soluções de prevenção e ação. Se você tiver sugestões ou feedbacks, sinta-se à vontade para entrar em contato. Sua contribuição é valiosa!"
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
    backgroundColor: '#E8EEF4', 
  },
  // BANNER HEADER (Cabeçalho de Destaque)
  bannerHeader: {
    backgroundColor: '#3452D3', 
    paddingVertical: scale(40), // Aumentado e escalado
    paddingHorizontal: scale(20),
    marginBottom: scale(15), // Ajustado e escalado
    alignItems: 'center',
  },
  bannerTitle: {
    fontSize: scale(30), // Aumentado e escalado
    fontWeight: '800',
    color: 'white',
    textAlign: 'center',
    marginBottom: scale(5),
  },
  bannerSubtitle: {
    fontSize: scale(18), // Aumentado e escalado
    color: '#D4E2FF', 
    textAlign: 'center',
  },
  // CONTEÚDO PRINCIPAL
  main: {
    paddingHorizontal: scale(20),
    paddingTop: scale(10),
    paddingBottom: scale(40),
    maxWidth: 700, // Largura máxima para a Web
    width: '100%',
    alignSelf: 'center',
  },
  // TÓPICO - ELEMENTO DE SUBSTITUIÇÃO (Emoji/Ícone)
  topicEmoji: {
    fontSize: scale(36), // Aumentado e escalado
    marginRight: scale(15),
  },
  // ESTILOS DO CARD DO TÓPICO (topicContainer substitui 'card')
  topicContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: scale(15),
    padding: scale(30), // Aumentado e escalado para mais "respiro"
    marginBottom: scale(20),
    elevation: 5,
    shadowColor: '#1A2940', 
    shadowOffset: { width: 0, height: scale(4) },
    shadowOpacity: 0.08,
    shadowRadius: scale(10),
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: scale(10),
  },
  textHeader: {
    flex: 1,
  },
  // TÍTULO do Card (titleCard substitui cardTitle)
  titleCard: {
    fontSize: scale(24), // Aumentado e escalado
    fontWeight: '700',
    color: '#1A2940',
    marginBottom: scale(4),
    textAlign: 'left',
  },
  descriptionSection: {
    paddingLeft: scale(5),
    paddingBottom: scale(5),
  },
  // DESCRIÇÃO (description substitui cardText)
  description: {
    fontSize: scale(17), // Aumentado e escalado
    color: '#4B5C75',
    textAlign: 'left',
    lineHeight: scale(26), // Aumentado para melhor leitura
  },
});