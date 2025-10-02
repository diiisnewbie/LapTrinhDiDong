import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  FlatList,
} from 'react-native';
import { useState ,useEffect} from 'react';

// You can import supported modules from npm
import { Card } from 'react-native-paper';
import Item from "../components/Item"
import axios from 'axios';
// or any files within the Snack

export default function ListScreen({ navigation }) {
  const [selected, setSelected] = useState('All');
  const filters = ['All', 'RoadBike', 'Mountain'];
  const [bikes, setBikes] = useState([]);
  
  const apiUrl = 'https://68ddc568d7b591b4b78d5cfe.mockapi.io/vehicles';

  useEffect(() => {
  axios.get(apiUrl)
    .then(response => {
      setBikes(response.data);
    })
    .catch(error => {
      console.error('Lỗi khi gọi API:', error);
    });
}, []); 


  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>The world's Best Bike</Text>
      <View style={styles.type}>
        {filters.map((f) => (
          <Pressable
            key={f}
            style={[styles.button, selected === f && styles.activeButton]}
            onPress={() => setSelected(f)}>
            <Text style={[styles.text, selected === f && styles.activeText]}>
              {f}
            </Text>
          </Pressable>
        ))}
      </View>
      <View>
        <FlatList
          data={bikes.slice(0,4)}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Item
              name={item.name}
              price={item.price}
            />
          )}
          numColumns={2}
          contentContainerStyle={{ padding: 10 }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    padding: 8,
    justifyContent: 'center',
  },
  title: {
    color: 'red',
    fontSize: 18,
    fontWeight: 'bold',
  },
  type: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10,
  },
  button: {
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    marginHorizontal: 5,
  },
  activeButton: {
    backgroundColor: '#fce4ec',
    borderColor: 'red',
  },
  text: {
    color: '#555',
  },
  activeText: {
    color: 'red',
    fontWeight: 'bold',
  },
});
