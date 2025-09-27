import { Text, View, StyleSheet, Image, FlatList ,ScrollView} from 'react-native';
import ItemDetail from '../components/Item';
import phone1 from "../assets/phone1.png"
import Item from "../components/ItemList"
import React, { useState ,useEffect} from 'react';
export default function HomeScreen({navigation}) {
  const [data,setData] = useState([]);

  useEffect(() =>{
    fetch('https://68d803472144ea3f6da72144.mockapi.io/Products') // API mẫu
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Lỗi khi fetch API:', error);
        setLoading(false);
      });
  })
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
