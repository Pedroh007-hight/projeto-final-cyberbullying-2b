import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from "react-native";

// Componente para cada tópico de cuidados e prevenções
const Topic = ({ title, description }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleText = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>{title}</Text>
      <Text style={styles.cardText}>
        {description}
        {isExpanded && (
          <Text>
            {"\n\n"}
            - Sempre use autenticação em dois fatores sempre que possível.{"\n"}
            - Atualize seus dispositivos e aplicativos regularmente.
          </Text>
        )}
      </Text>
      <TouchableOpacity onPress={toggleText} style={styles.toggleButton}>
        <Text style={styles.toggleButtonText}>
          {isExpanded ? "Ler menos" : "Ler mais"}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default function Page() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Cuidados e Prevenções</Text>
        
        <Topic 
          title="Proteja suas Senhas" 
          description="- Crie senhas fortes e únicas para cada conta. Use combinações de letras, números e caracteres especiais." 
        />

        <Topic 
          title="Cuidado com Phishing" 
          description="- Nunca clique em links suspeitos enviados por e-mail, mensagens ou redes sociais. Sempre verifique a origem antes de abrir um link." 
        />

        <Topic 
          title="Use Redes Sociais com Segurança" 
          description="- Mantenha suas configurações de privacidade ajustadas e não compartilhe informações pessoais com desconhecidos." 
        />

        <Topic 
          title="Denuncie Abusos" 
          description="- Caso presencie ou seja vítima de cyberbullying, denuncie imediatamente o agressor nas plataformas." 
        />

        <Topic 
          title="Educando sobre Segurança Digital" 
          description="- Eduque-se sobre segurança digital. Conheça as melhores práticas para se proteger na internet." 
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#F5F5F5",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  main: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#2E3A59",
    marginBottom: 16,
  },
  card: {
    width: "100%",
    backgroundColor: "white",
    padding: 20,
    borderRadius: 12,
    elevation: 4, // sombra Android
    shadowColor: "#000", // sombra iOS
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    marginTop: 20, // Espaço entre os cards
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#2E3A59",
    marginBottom: 12,
  },
  cardText: {
    fontSize: 16,
    lineHeight: 24,
    color: "#555",
  },
  toggleButton: {
    marginTop: 15,
    backgroundColor: "#2E3A59",
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 25,
    alignSelf: "flex-start",
  },
  toggleButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
});
