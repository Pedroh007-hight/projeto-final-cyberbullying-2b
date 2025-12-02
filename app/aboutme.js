import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, Dimensions, Platform } from 'react-native';
import img from "../assets/Pedro.jpeg"

// 1. Definições de Largura Base
const MOBILE_BASE_WIDTH = 414;
// Aumentamos o WEB_BASE_WIDTH para reduzir o fator de escala (tirar o "zoom") em telas grandes.
const WEB_BASE_WIDTH = 1200;

// Pega a largura atual da tela
const { width } = Dimensions.get('window');

// 2. Função de Escala Responsiva (MANTIDA)
const useResponsiveScale = () => {
    const currentBase = Platform.OS === 'web' ? WEB_BASE_WIDTH : MOBILE_BASE_WIDTH;
    const currentWidth = Dimensions.get('window').width;

    // Retorna uma função de escala
    return (size) => Math.round((currentWidth / currentBase) * size);
}

// 3. Aplica a escala: scale agora é uma função mais inteligente
const scale = useResponsiveScale();


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
            style={styles.profileImage}
            source={img}
          />
        </View>

        {/* Card com Informações Pessoais */}
        <View style={styles.infoCard}>
          <Text style={styles.cardTitle}>Pedro Henrique</Text>
          <Text style={styles.cardSubtitle}>Tentando ser um desenvolvedor</Text>
          <Text style={styles.cardDescription}>
            Eu estou neste curso tentando virar um "desenvolvedor" para conseguir um trabalho bom, este aplicativo é a primeira coisa que eu faço com o intuito de ajudar as pessoas a se previnirem contra o cyberbullying, este é o meu objetivo por enquanto.
           
            {"\n\n"}
            Obrigado por visitar o aplicativo.
          </Text>
        </View>

      </View>
    </ScrollView>
  );
}

// -------------------------------------------------------------------------
// ESTILOS (VALORES BASE AJUSTADOS PARA MAIOR PROPORCIONALIDADE)
// -------------------------------------------------------------------------

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#E8EEF4',
  },
  bannerHeader: {
    backgroundColor: '#3452D3',
    paddingVertical: scale(40), // Aumentei o padding vertical do banner
    paddingHorizontal: scale(20),
    marginBottom: scale(80),
    alignItems: 'center',
    position: 'relative',
  },
  bannerTitle: {
    fontSize: scale(30), // Fonte um pouco maior
    fontWeight: '800',
    color: 'white',
    textAlign: 'center',
    marginBottom: scale(5),
  },
  bannerSubtitle: {
    fontSize: scale(18),
    color: '#D4E2FF',
    textAlign: 'center',
  },
  main: {
    paddingHorizontal: scale(20),
    paddingBottom: scale(40),
    // Tamanho máximo ideal para leitura em desktop
    maxWidth: 650,
    width: '100%',
    alignSelf: 'center',
    // Ajustado para a imagem de perfil subir corretamente
    marginTop: -scale(75),
  },
  // ESTILOS DA IMAGEM DE PERFIL
  profileImageContainer: {
    width: scale(150),
    height: scale(150),
    borderRadius: scale(75),
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: -scale(7),
    marginBottom: scale(20),
    elevation: 8,
    shadowColor: '#1A2940',
    shadowOffset: { width: 0, height: scale(4) },
    shadowOpacity: 0.2,
    shadowRadius: scale(10),
  },
  profileImage: {
    width: scale(140),
    height: scale(140),
    borderRadius: scale(70),
    borderWidth: scale(3),
    borderColor: '#D4E2FF',
  },
  // ESTILOS DOS CARDS DE INFORMAÇÃO
  infoCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: scale(15),
    padding: scale(30), // Padding interno maior para "respiro"
    marginBottom: scale(20),
    elevation: 5,
    shadowColor: '#1A2940',
    shadowOffset: { width: 0, height: scale(4) },
    shadowOpacity: 0.08,
    shadowRadius: scale(10),
  },
  cardTitle: {
    fontSize: scale(26),
    fontWeight: '700',
    color: '#1A2940',
    marginBottom: scale(8),
    textAlign: 'center',
  },
  cardSubtitle: {
    fontSize: scale(18),
    color: '#65748F',
    marginBottom: scale(15),
    textAlign: 'center',
  },
  cardDescription: {
    fontSize: scale(17),
    color: '#4B5C75',
    textAlign: 'left',
    lineHeight: scale(26),
  },
});