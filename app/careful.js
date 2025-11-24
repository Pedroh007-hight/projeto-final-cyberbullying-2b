import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from "react-native";

// --- Componente Topic Atualizado (Com remoção das quebras de linha manuais) ---
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
          {/* O expandedDescription é renderizado diretamente, sem o "\n\n" no início */}
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

// --- Componente Principal Page Atualizado (Com conteúdo limpo) ---
export default function Page() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Banner com o estilo coeso do projeto */}
      <View style={styles.bannerHeader}>
        <Text style={styles.bannerTitle}>🔒 Cuidados Essenciais</Text>
        <Text style={styles.bannerSubtitle}>Práticas para uma navegação segura</Text>
      </View>

      <View style={styles.main}>
        
        <Topic
          title="Proteja suas Senhas"
          subtitle="A base da sua segurança digital."
          emoji={"🔑"}
          description={"Crie senhas fortes e únicas para cada conta. Use uma combinação de letras maiúsculas, minúsculas, números e caracteres especiais."}
          expandedDescription={
            "\n- Autenticação em Dois Fatores (2FA): Sempre use 2FA sempre que disponível. Isso adiciona uma camada de segurança extra, exigindo um código além da senha." +
            "\n- Gerenciador de Senhas: Considere usar um app gerenciador para armazenar e gerar senhas complexas de forma segura."
          }
        />

        <Topic
          title="Cuidado com Phishing"
          subtitle="Fique atento a e-mails e links falsos."
          emoji={"🎣"}
          description={"Nunca clique em links ou baixe anexos suspeitos enviados por e-mail ou mensagens. Sempre verifique a URL e a identidade do remetente."}
          expandedDescription={
            "\n- Sinais de Alerta: Erros de português, pedidos urgentes de informações pessoais ou ofertas boas demais para serem verdade são comuns em ataques de phishing." +
            "\n- Verificação Direta: Se suspeitar de um e-mail de um banco/serviço, acesse o site oficial digitando a URL no navegador, não pelo link no e-mail."
          }
        />

        <Topic
          title="Uso de Redes Sociais"
          subtitle="Mantenha sua vida privada segura."
          emoji={"🌐"}
          description={"Mantenha suas configurações de privacidade ajustadas para o nível máximo e evite compartilhar informações pessoais detalhadas ou em tempo real."}
          expandedDescription={
            "\n- Desconecte Apps: Revise quais aplicativos de terceiros têm acesso à sua conta e revogue permissões que não são mais necessárias." +
            "\n- Não Aceite Desconhecidos: Não aceite solicitações de amizade de pessoas que você não conhece na vida real, mesmo que pareçam ter amigos em comum."
          }
        />

        <Topic
          title="Atualização e Denúncia"
          subtitle="Mantenha o sistema seguro e reaja ao abuso."
          emoji={"🚨"}
          description={"Atualize seus dispositivos e aplicativos regularmente para corrigir falhas de segurança. Se presenciar ou sofrer abuso, denuncie imediatamente."}
          expandedDescription={
            "\n- Denúncia Imediata: Use os recursos de denúncia das próprias plataformas (Instagram, TikTok, WhatsApp) ou procure autoridades, se necessário." +
            "\n- Firewall e Antivírus: Garanta que seu computador tenha um firewall ativo e um software antivírus/antimalware atualizado."
          }
        />

      </View>
    </ScrollView>
  );
}

// --- Estilos de Design Adaptados (Mantidos do código anterior) ---
const styles = StyleSheet.create({
  // CONTAINER PRINCIPAL (Fundo)
  container: {
    flexGrow: 1, 
    backgroundColor: '#E8EEF4', 
  },
  // BANNER HEADER 
  bannerHeader: {
    backgroundColor: '#3452D3', 
    paddingVertical: 40,
    paddingHorizontal: 20,
    marginBottom: 10,
    alignItems: 'center',
  },
  bannerTitle: {
    fontSize: 28,
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
  // TÓPICO - ELEMENTO DE SUBSTITUIÇÃO (Emoji)
  topicEmoji: {
    fontSize: 32, 
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
    marginBottom: 2,
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
    lineHeight: 22, // Mantém o espaçamento limpo entre as linhas
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