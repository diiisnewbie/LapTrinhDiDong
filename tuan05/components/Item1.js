import { Text, View, StyleSheet, Image, Pressable } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome';

export const Item1 = ({ url, title, price, coupon, rating, quantityrating }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: url }} />
      <View style={styles.title}>
        <Text style={{ fontWeight: 'bold' }}>{title}</Text>
        <View style={{ flexDirection: 'row' }}>
          {[1, 2, 3, 4, 5].map((i) => (
            <Icon
              key={i}
              name={i <= rating ? 'star' : 'star-o'}
              size={15}
              color="#FFD700"
              style={{ marginRight: 2 }}
            />
          ))}
          <Text>({quantityrating})</Text>
        </View>
        <View style={{flexDirection:'row' ,justifyContent:'space-between',width:'100%'}}>
          <Text style={{ fontWeight: 'bold' }}>{price}</Text>
          <Text style={{color:'gray'}}>-{coupon}%</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: 'white',
    justifyContent: 'space-between',
    padding: 5,
  },
  image: {
    width: 155,
    height: 90,
  },
  title: {
    height: '100%',
  },
});
