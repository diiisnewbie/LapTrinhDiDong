import { StyleSheet, Text, View } from 'react-native';


// or any files within the Snack
import CartScreen from "./components/CartScreen,js"
import Login from "./components/Login"
import Review from "./components/Review"
import PasswordGenerator from "./components/PasswordGenerator"

export default function App() {
  return (
    <View style={styles.container}>

      <PasswordGenerator/>
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
