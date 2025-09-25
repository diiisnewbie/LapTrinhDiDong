import { Text, View, StyleSheet, Image, FlatList ,ScrollView} from 'react-native';
import ItemDetail from '../components/Item';
import phone1 from "../assets/phone1.png"
import Item from "../components/Item"
export default function DetailScreen({ route, navigation }) {
  const { product } = route.params;
  return (
    <View style={styles.container}>
      <Item
            url={product.url}
            title={product.title}
            rating={product.rating}
            quantityRating={product.quantityRating}
            price={product.price}
          />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
