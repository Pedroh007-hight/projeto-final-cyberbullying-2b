import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Dimensions, Platform } from "react-native";
// A importação 'Image' foi removida.

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


// --- Componente Topic Atualizado (Com Emoji de Substituição e 'scale') ---
const Topic = ({ title, subtitle, description, expandedDescription, emoji }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleText = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <View style={styles.topicContainer}>
      <View style={styles.headerContent}>
        {/* Emoji de Substituição para o Ícone */}
        <Text style={styles.topicEmoji}>{emoji}</Text>
        <View style={styles.textHeader}>
          <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
        </View>
      </View>
     
      <View style={styles.descriptionSection}>
        <Text style={styles.description}>
          {description}
          {isExpanded && expandedDescription}
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
      {/* O banner de imagem foi substituído por um título/cabeçalho visual */}
      <View style={styles.bannerHeader}>
        <Text style={styles.bannerTitle}>🛡️ Guia de Segurança Digital</Text>
        <Text style={styles.bannerSubtitle}>Proteja-se contra o Cyberbullying</Text>
      </View>

      <View style={styles.main}>
       
        <Topic
          title="O Que é Cyberbullying?"
          subtitle="Identifique as formas de assédio online."
          description={
            "O cyberbullying envolve o uso da internet e das redes sociais para assediar, humilhar ou prejudicar outras pessoas. Isso pode ocorrer através de:\n\n- Mensagens agressivas ou humilhantes.\n- Compartilhamento de informações privadas sem consentimento.\n- Criação de perfis falsos para atacar alguém.\n- Espalhamento de boatos ou fofocas online."
          }
          expandedDescription={
            "\n\nÉ importante estar atento e saber como reagir. Se você estiver sendo alvo de cyberbullying:\n\n- Não responda aos agressores.\n- Guarde evidências do abuso (prints de mensagens ou publicações).\n- Informe a alguém de confiança, como um amigo ou um adulto responsável.\n- Denuncie a pessoa para a plataforma ou rede social."
          }
          emoji={"🚨"} // Alerta
        />

        <Topic
          title="Como Prevenir o Cyberbullying?"
          subtitle="Adote práticas de segurança para sua vida digital."
          description={
            "Aqui estão algumas maneiras de se proteger contra o cyberbullying:\n\n- Mantenha suas redes sociais privadas.\n- Evite compartilhar informações pessoais demais.\n- Não aceite amizades ou convites de desconhecidos online.\n- Use senhas fortes e altere-as regularmente."
          }
          expandedDescription={
            "\n\nAlém disso, como um bom hábito, é importante:\n\n- Educar-se sobre segurança digital.\n- Ficar atento às interações online.\n- Não hesite em pedir ajuda a um responsável ou professor."
          }
          emoji={"🔒"} // Cadeado/Segurança
        />

        <Topic
          title="O Que Fazer se Você for Vítima?"
          subtitle="Passos imediatos e apoio emocional."
          description={
            "Se você for vítima de cyberbullying, existem algumas ações que podem ser tomadas:\n\n- Tire prints das mensagens ou postagens ofensivas.\n- Não responda aos ataques.\n- Avise alguém em quem você confie, como um amigo ou um familiar."
          }
          expandedDescription={
            "\n\nAlém disso, você pode:\n\n- Bloquear o agressor nas redes sociais.\n- Denunciar o perfil ou postagem nas plataformas.\n- Procurar apoio psicológico se sentir necessidade."
          }
          emoji={"🤝"} // Ajuda/Suporte
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
  // BANNER HEADER (Substituindo a imagem de banner)
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
  // TÓPICO - ELEMENTO DE SUBSTITUIÇÃO
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
  title: {
    fontSize: scale(24), // Escalado
    fontWeight: '700',
    color: '#1A2940',
    marginBottom: scale(4),
    textAlign: 'left',
  },
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
  description: {
    fontSize: scale(17), // Escalado
    color: '#4B5C75',
    textAlign: 'left',
    lineHeight: scale(26), // Escalado
  },
  // ESTILOS DO BOTÃO
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