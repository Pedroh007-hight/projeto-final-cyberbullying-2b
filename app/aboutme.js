import { StyleSheet, Text, View, ScrollView } from "react-native";

export default function Page() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Sobre o Aplicativo</Text>
        <Text style={styles.subtitle}>Conheça mais sobre como o aplicativo pode te ajudar</Text>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Objetivo do Aplicativo</Text>
          <Text style={styles.cardText}>
            Este aplicativo foi criado com o objetivo de conscientizar e prevenir o cyberbullying. Ele oferece dicas de segurança, maneiras de se proteger online e como agir diante de situações de bullying virtual.
            {"\n\n"}Através de conteúdo educativo e recursos úteis, o aplicativo visa criar um ambiente digital mais seguro para todos.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Como Funciona</Text>
          <Text style={styles.cardText}>
            O aplicativo é dividido em várias seções, onde os usuários podem aprender sobre o que é o cyberbullying, como se proteger e o que fazer se forem vítimas dessa prática. Além disso, ele oferece recursos interativos para informar e ajudar a prevenir o bullying online.
            {"\n\n"}Os tópicos são organizados de forma simples e direta, com informações claras e práticas para o dia a dia.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Desenvolvedor</Text>
          <Text style={styles.cardText}>
            O aplicativo foi desenvolvido por mim Pedro Henrique, com o intuito de ajudar as pessoas a entenderem os riscos do cyberbullying e oferecer soluções de como prevenir e agir diante disso.
            {"\n\n"}Se você tiver sugestões ou feedbacks, sinta-se à vontade para entrar em contato.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#F5F5F5", // Cor de fundo mais suave
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  main: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    paddingVertical: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#2E3A59", // Cor de destaque para o título
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 18,
    color: "#6A6A6A", // Cor mais suave para o subtítulo
    marginBottom: 25,
    textAlign: "center",
  },
  card: {
    width: "100%",
    backgroundColor: "white",
    padding: 20,
    borderRadius: 12,
    elevation: 4, // Sombra para o card (Android)
    shadowColor: "#000", // Sombra para iOS
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    marginTop: 20, // Espaço entre os cards
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#2E3A59", // Cor de destaque para os títulos dos cards
    marginBottom: 12,
  },
  cardText: {
    fontSize: 16,
    lineHeight: 24,
    color: "#555", // Cor do texto nos cards
  },
});
