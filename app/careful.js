import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from "react-native";

// --- Componente Topic Atualizado ---
const Topic = ({ title, subtitle, description, expandedContent, emoji }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleText = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <View style={styles.topicContainer}>
      <View style={styles.headerContent}>
        {/* Emoji para o Ícone */}
        <Text style={styles.topicEmoji}>{emoji}</Text>
        <View style={styles.textHeader}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>{subtitle}</Text>
        </View>
      </View>
     
      <View style={styles.descriptionSection}>
        <Text style={styles.description}>
          {description}
          {isExpanded && expandedContent}
        </Text>
      </View>

      <TouchableOpacity onPress={toggleText} style={styles.toggleButton}>
        <Text style={styles.toggleButtonText}>
          {isExpanded ? "Fechar" : "Ler mais"}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

// --- Componente Principal Page Atualizado ---
export default function Page() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Novo Banner/Cabeçalho */}
      <View style={styles.bannerHeader}>
        <Text style={styles.bannerTitle}>🚨 Guia Rápido de Prevenção</Text>
        <Text style={styles.bannerSubtitle}>Adote estas práticas para sua segurança digital.</Text>
      </View>

      <View style={styles.main}>
        {/* Tópicos reestruturados com Subtitle, Emoji e ExpandedContent */}
        <Topic
          title="Proteja suas Senhas"
          subtitle="A base da sua segurança online."
          description="- Crie senhas fortes e únicas para cada conta. Use combinações de letras, números e caracteres especiais."
          expandedContent={
            "\n\nPráticas Avançadas:\n\n- Sempre use autenticação em dois fatoressempre que possível.\n- Considere usar um Gerenciador de Senhas confiável."
          }
          emoji={"🔑"}
        />

        <Topic
          title="Cuidado com Phishing"
          subtitle="Ataques de engenharia social."
          description="- Nunca clique em links suspeitos enviados por e-mail, mensagens ou redes sociais. Sempre verifique o remetente."
          expandedContent={
            "\n\nRegra de Ouro:\n\n- Se for urgente ou inesperado, desconfie! Acesse sites digitando o endereço diretamente no navegador, em vez de clicar no link."
          }
          emoji={"🎣"}
        />

        <Topic
          title="Mantenha o Software Atualizado"
          subtitle="Defesa contra vulnerabilidades."
          description="- Atualize seus dispositivos e aplicativos regularmente. As atualizações corrigem falhas de segurança críticas."
          expandedContent={
            "\n\nO que atualizar?\n\n- Sistema operacional (Windows, macOS, Android, iOS).\n- Antivírus (se usar).\n- Aplicativos de navegador e mensageiros."
          }
          emoji={"⬆️"}
        />

        <Topic
          title="Denuncie Abusos"
          subtitle="Ação essencial contra o cyberbullying."
          description="- Caso presencie ou seja vítima de cyberbullying, denuncie imediatamente o agressor nas plataformas e procure um adulto de confiança."
          expandedContent={
            "\n\nComo denunciar?\n\n- Use a função 'Denunciar' ou 'Reportar' de cada rede social (Instagram, TikTok, X, etc.).\n- Guarde prints de tela como evidência."
          }
          emoji={"🛑"}
        />
      </View>
    </ScrollView>
  );
}

// --- Estilos de Design Aplicados ---
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
    maxWidth: 600, // Limite de largura para tablets/desktop
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
  // TÍTULO (cardTitle vira title)
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: '#1A2940',
    marginBottom: 4,
    textAlign: 'left',
  },
  // SUBTÍTULO (Novo)
  subtitle: {
    fontSize: 15,
    color: '#65748F',
    textAlign: 'left',
    marginBottom: 5,
  },
  descriptionSection: {
    paddingLeft: 5,
    paddingBottom: 15,
  },
  // DESCRIÇÃO (cardText vira description)
  description: {
    fontSize: 15,
    color: '#4B5C75',
    textAlign: 'left',
    lineHeight: 22,
  },
  // ESTILOS DO BOTÃO (toggleButton)
  toggleButton: {
    marginTop: 10,
    alignSelf: 'flex-start',
    backgroundColor: '#3452D3',
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 8, // Borda quadrada/suave
    shadowColor: '#3452D3',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  toggleButtonText: {
    color: 'white',
    fontSize: 15,
    fontWeight: '600',
    textTransform: 'uppercase', // Estilo do botão
  },
});