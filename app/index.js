import { StyleSheet, Text, View } from "react-native";

export default function Page() {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Cyber Bullying</Text>
        <Text style={styles.subtitle}>Bem-vindo ao Aplicativo</Text>
        <Text style={styles.description}>
          Este aplicativo foi criado para ajudar a combater o cyber bullying, fornecendo recursos e
          informações sobre como lidar com essa questão.
        </Text>
        <Text style={styles.credit}>Desenvolvido por Pedro Henrique</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F7FC',  // Fundo mais suave e sofisticado
    justifyContent: 'center',     // Centraliza o conteúdo
    alignItems: 'center',         // Alinha os itens no centro
    paddingHorizontal: 20,
  },
  main: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,  // Lateral para espaçamento
    maxWidth: 400,          // Limita a largura para evitar que o texto se estique demais
    shadowColor: '#000',    // Sombra do container principal
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 5,           // Sombra suave (Android)
  },
  title: {
    fontSize: 42,           // Tamanho maior para dar mais impacto
    fontWeight: '700',      // Peso extra para mais destaque
    color: '#1A2D4B',       // Azul mais escuro, sofisticado
    marginBottom: 15,       // Espaço abaixo do título
    textAlign: 'center',    // Garantir que o título fique centralizado
    fontFamily: 'serif',    // Fonte serifada para um toque de sofisticação
  },
  subtitle: {
    fontSize: 20,
    color: '#6D7B8D',       // Cor mais neutra e suave
    fontFamily: 'sans-serif', // Fonte sem serifa para contraste
    textAlign: 'center',
    marginBottom: 25,       // Maior espaçamento abaixo do subtítulo
  },
  description: {
    fontSize: 16,
    color: '#6D7B8D',       // Cor de texto suave
    textAlign: 'center',
    paddingHorizontal: 20,  // Adiciona um pouco de espaçamento lateral
    marginBottom: 30,       // Espaçamento antes do crédito
    lineHeight: 24,         // Aumenta a altura da linha para melhorar a leitura
    fontFamily: 'serif',    // Fonte serifada para elegância
  },
  credit: {
    fontSize: 18,
    color: '#1A2D4B',       // Mesmo tom de azul escuro para manter a harmonia
    fontWeight: '600',      // Peso de fonte mais leve para o crédito
    marginTop: 20,          // Espaçamento entre o conteúdo e o crédito
    textAlign: 'center',
    fontFamily: 'sans-serif', // Fonte sem serifa para o crédito
  },
});
