import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from "react-native";
// A importação 'Image' foi removida.

// --- Componente Topic Atualizado (Com Emoji de Substituição) ---
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
  // As constantes de imagem foram removidas.

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

// --- Estilos de Design Adaptados (Removendo estilos de imagem) ---
const styles = StyleSheet.create({
  // CONTAINER PRINCIPAL (Fundo)
  container: {
    flexGrow: 1,
    backgroundColor: '#E8EEF4',
  },
  // BANNER HEADER (Substituindo a imagem de banner)
  bannerHeader: {
    backgroundColor: '#3452D3', // Cor de destaque do botão
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
  // TÓPICO - ELEMENTO DE SUBSTITUIÇÃO
  topicEmoji: {
    fontSize: 32, // Tamanho do emoji
    marginRight: 15,
  },
  // ESTILOS DO CARD DO TÓPICO
  topicContainer: {
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
  headerContent: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 10,
  },
  textHeader: {
    flex: 1,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: '#1A2940',
    marginBottom: 4,
    textAlign: 'left',
  },
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
  description: {
    fontSize: 15,
    color: '#4B5C75',
    textAlign: 'left',
    lineHeight: 22,
  },
  // ESTILOS DO BOTÃO
  toggleButton: {
    marginTop: 10,
    alignSelf: 'flex-start',
    backgroundColor: '#3452D3',
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 8,
    shadowColor: '#3452D3',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  toggleButtonText: {
    color: 'white',
    fontSize: 15,
    fontWeight: '600',
    textTransform: 'uppercase',
  },
});