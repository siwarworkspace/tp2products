import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native';
import ProductScreen from './src/screens/ProductScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nos produits</Text>
      <Text style={styles.subtitle}>Découvrez notre collection</Text>
      <ProductScreen />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 50,
  },
  subtitle: {
    fontSize: 14,
    textAlign: 'center',
    color: 'gray',
    marginBottom: 10,
  },
});