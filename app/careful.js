import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Dimensions, Platform } from "react-native";

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


// --- Componente Topic Atualizado (Agora usa 'scale') ---
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

// -------------------------------------------------------------------------
// ESTILOS COM APLICAÇÃO DA ESCALA
// -------------------------------------------------------------------------

const styles = StyleSheet.create({
  // CONTAINER PRINCIPAL (Fundo)
  container: {
    flexGrow: 1,
    backgroundColor: '#E8EEF4',
  },
  // BANNER HEADER (Cabeçalho de Destaque)
  bannerHeader: {
    backgroundColor: '#3452D3',
    paddingVertical: scale(40), // Escalado
    paddingHorizontal: scale(20),
    marginBottom: scale(15), // Escalado
    alignItems: 'center',
  },
  bannerTitle: {
    fontSize: scale(30), // Escalado
    fontWeight: '800',
    color: 'white',
    textAlign: 'center',
    marginBottom: scale(5),
  },
  bannerSubtitle: {
    fontSize: scale(18), // Escalado
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
    fontSize: scale(36), // Escalado
    marginRight: scale(15),
  },
  // ESTILOS DO CARD DO TÓPICO
  topicContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: scale(15),
    padding: scale(30), // Escalado
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
  // TÍTULO
  title: {
    fontSize: scale(24), // Escalado
    fontWeight: '700',
    color: '#1A2940',
    marginBottom: scale(4),
    textAlign: 'left',
  },
  // SUBTÍTULO
  subtitle: {
    fontSize: scale(17), // Escalado
    color: '#65748F',
    textAlign: 'left',
    marginBottom: scale(5),
  },
  descriptionSection: {
    paddingLeft: scale(5),
    paddingBottom: scale(15),
  },
  // DESCRIÇÃO
  description: {
    fontSize: scale(17), // Escalado
    color: '#4B5C75',
    textAlign: 'left',
    lineHeight: scale(26), // Escalado
  },
  // ESTILOS DO BOTÃO (toggleButton)
  toggleButton: {
    marginTop: scale(10),
    alignSelf: 'flex-start',
    backgroundColor: '#3452D3',
    paddingVertical: scale(10),
    paddingHorizontal: scale(25),
    borderRadius: scale(8),
    shadowColor: '#3452D3',
    shadowOffset: { width: 0, height: scale(2) },
    shadowOpacity: 0.3,
    shadowRadius: scale(4),
  },
  toggleButtonText: {
    color: 'white',
    fontSize: scale(16), // Escalado
    fontWeight: '600',
    textTransform: 'uppercase',
  },
});
