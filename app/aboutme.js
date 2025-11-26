import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, Dimensions } from 'react-native';
import {Pedrojpeg} from "../assets/Pedro.jpeg";
// Pega a largura da tela para ajustes proporcionais
const { width } = Dimensions.get('window');
const scale = size => Math.round(width / 414 * size);

export default function Page() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Cabeçalho de Banner */}
      <View style={styles.bannerHeader}>
        <Text style={styles.bannerTitle}>🧑‍💻 Sobre Mim</Text>
        <Text style={styles.bannerSubtitle}>Conheça quem criou este projeto.</Text>
      </View>

      <View style={styles.main}>
        {/* Seção da Imagem de Perfil */}
       <View style={styles.profileImageContainer}>
          <Image
            // >>> TROQUE ESTA LINHA <<<
            source={{ uri: 'Pedro.jpeg' }} 
            // Pelo caminho da sua imagem, por exemplo:
            // source={require('./assets/minha_foto.png')} 
            style={styles.profileImage}
          />
        </View>

        {/* Card com Informações Pessoais */}
        <View style={styles.infoCard}>
          <Text style={styles.cardTitle}>Pedro Henrique</Text>
          <Text style={styles.cardSubtitle}>Desenvolvedor Full Stack Júnior</Text>
          <Text style={styles.cardDescription}>
            Sou um desenvolvedor apaixonado por criar soluções que fazem a diferença. Este aplicativo é um reflexo do meu compromisso em tornar o ambiente digital mais seguro para todos, especialmente contra o cyberbullying.
            {"\n\n"}
            Tenho experiência em React Native, Node.js e busco constantemente aprender e aprimorar minhas habilidades. Acredito que a tecnologia pode ser uma ferramenta poderosa para o bem social.
          </Text>
        </View>

        {/* Card de Contato (Exemplo) */}
        <View style={styles.infoCard}>
          <Text style={styles.cardTitle}>Contato</Text>
          <Text style={styles.cardDescription}>
            **Email:** seu.email@exemplo.com {"\n"}
            **LinkedIn:** [Seu Perfil do LinkedIn](link-do-linkedin) {"\n"}
            **GitHub:** [Seu Perfil do GitHub](link-do-github)
          </Text>
        </View>

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#E8EEF4', // Fundo claro e suave
  },
  bannerHeader: {
    backgroundColor: '#3452D3', // Cor de destaque azul
    paddingVertical: scale(30),
    paddingHorizontal: scale(20),
    marginBottom: scale(80), // Maior marginBottom para a imagem se sobrepor
    alignItems: 'center',
    position: 'relative', // Para posicionar a imagem de perfil
  },
  bannerTitle: {
    fontSize: scale(26),
    fontWeight: '800',
    color: 'white',
    textAlign: 'center',
    marginBottom: scale(5),
  },
  bannerSubtitle: {
    fontSize: scale(16),
    color: '#D4E2FF',
    textAlign: 'center',
  },
  main: {
    paddingHorizontal: scale(20),
    // paddingTop: scale(10), // Removido para a imagem se sobrepor
    paddingBottom: scale(40),
    maxWidth: 600,
    width: '100%',
    alignSelf: 'center',
    marginTop: -scale(60), // Ajuste para a imagem de perfil subir e se sobrepor ao banner
  },
  // ESTILOS DA IMAGEM DE PERFIL
  profileImageContainer: {
    width: scale(140),
    height: scale(140),
    borderRadius: scale(70), // Transforma em círculo
    backgroundColor: '#FFFFFF', // Fundo branco para a borda
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center', // Centraliza o círculo
    marginTop: -scale(7), // Move o círculo para cima, sobrepondo o banner
    marginBottom: scale(20),
    elevation: 8, // Sombra para o círculo
    shadowColor: '#1A2940',
    shadowOffset: { width: 0, height: scale(4) },
    shadowOpacity: 0.2,
    shadowRadius: scale(10),
  },
  profileImage: {
    width: scale(130), // Ligeiramente menor que o container para borda
    height: scale(130),
    borderRadius: scale(65), // Metade da largura/altura para círculo
    borderWidth: scale(3), // Borda da imagem
    borderColor: '#D4E2FF', // Cor da borda
  },
  // ESTILOS DOS CARDS DE INFORMAÇÃO
  infoCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: scale(15),
    padding: scale(20),
    marginBottom: scale(20),
    elevation: 5,
    shadowColor: '#1A2940',
    shadowOffset: { width: 0, height: scale(4) },
    shadowOpacity: 0.08,
    shadowRadius: scale(10),
  },
  cardTitle: {
    fontSize: scale(22),
    fontWeight: '700',
    color: '#1A2940',
    marginBottom: scale(8),
    textAlign: 'center', // Centralizado
  },
  cardSubtitle: {
    fontSize: scale(16),
    color: '#65748F',
    marginBottom: scale(15),
    textAlign: 'center', // Centralizado
  },
  cardDescription: {
    fontSize: scale(15),
    color: '#4B5C75',
    textAlign: 'left',
    lineHeight: scale(22),
  },
});