import { Text, View, StyleSheet, Image, FlatList ,ScrollView} from 'react-native';
import ItemDetail from '../components/Item';
import phone1 from "../assets/phone1.png"
import Item from "../components/ItemList"
export default function HomeScreen({navigation}) {
  data = [
    {
      id:1,
      image: "phone1",
      title: 'Product 1',
      rating: 4.5,
      quantityRating: 1200,
      price: 299.99,
    },
    {
      id:2,
      image: 'phone2',
      title: 'Product 2',
      rating: 3.8,
      quantityRating: 800,
      price: 199.49,
    },
    {
      id:3,
      image: 'phone3',
      title: 'Product 3',
      rating: 4.7,
      quantityRating: 1500,
      price: 399.99,
    },
    {
      id:4,
      image: 'phone4',
      title: 'Product 4',
      rating: 5.0,
      quantityRating: 2000,
      price: 149.99,
    },
    // {
    //   image: 'https://via.placeholder.com/150?text=Image5',
    //   title: 'Product 5',
    //   rating: 4.2,
    //   quantityRating: 950,
    //   price: 249.99,
    // },
  ];
  return (
    <View style={styles.container}>
      <ScrollView>
        <FlatList
        data={data}
        renderItem={({ item }) => (
          <Item
            url={item.image}
            title={item.title}
            rating={item.rating}
            quantityRating={item.quantityRating}
            price={item.price}
            id={item.id}
          />
        )
        }
      horizontal={false}/>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
