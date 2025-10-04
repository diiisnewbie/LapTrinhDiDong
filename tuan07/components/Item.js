import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Card } from 'react-native-paper';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

export default function Item({ name, price}) {
  const [isFavorite, setIsFavorite] = useState(false);
  const navigation = useNavigation();
  const onPressHeart = () => {
    setIsFavorite(!isFavorite); // đảo trạng thái khi bấm
  };
  return (
    <View style={styles.card}>
      <TouchableOpacity onPress={() => navigation.navigate('Detail',{product : {name , price,isFavorite}})}>
        <Image
          source={require('../assets/bike.png')}
          style={styles.image}
          resizeMode="contain"
        />
        <TouchableOpacity style={styles.heart} onPress={() => onPressHeart()}>
          <AntDesign
            name={isFavorite ? 'heart' : 'hearto'} // đổi icon
            size={20}
            color={isFavorite ? 'red' : 'gray'} // đổi màu
          />
        </TouchableOpacity>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.price}>${price}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 10,
    margin: 8,
    flex: 1,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    position: 'relative',
    cursor: 'pointer',
  },
  image: {
    width: 120,
    height: 100,
    marginBottom: 10,
  },
  heart: {
    position: 'absolute',
    top: 10,
    left: 10,
  },
  name: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 4,
  },
  price: {
    fontSize: 16,
    color: 'orange',
    fontWeight: 'bold',
  },
});
