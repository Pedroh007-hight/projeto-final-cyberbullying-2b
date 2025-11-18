import { StyleSheet, Text, View } from "react-native";

export default function Page() {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Sobre Mim</Text>
        <Text style={styles.subtitle}>Detalhes estudantis</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
      fontSize: 24,
  },
  subtitle: {
    fontSize: 18,
    color: 'white',
  },
});
