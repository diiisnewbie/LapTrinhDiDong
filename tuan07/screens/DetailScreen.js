import { StyleSheet, Text, View, Image, Pressable } from 'react-native';

// You can import supported modules from npm
import { Card } from 'react-native-paper';
import ItemDetail from "../components/ItemDetail"

// or any files within the Snack

export default function DetailScreen({navigation,route}) {
  const {product} = route.params;
  return (
    <View style={styles.container}>
      <ItemDetail product={product}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    padding: 8,
    justifyContent: 'space-around',
  },
});
