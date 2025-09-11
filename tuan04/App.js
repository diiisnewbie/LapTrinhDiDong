import { StyleSheet, Text, View } from 'react-native';


// or any files within the Snack
import CartScreen from "./components/CartScreen,js"
import Part1 from "./components/Part1.js"

export default function App() {
  return (
    <View style={styles.container}>

      <Part1/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
