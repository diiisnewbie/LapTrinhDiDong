import { Text, View, StyleSheet, Image, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Card } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Item({ url, title, rating, quantityRating, price, oldPrice }) {
  const navigation = useNavigation();
  const imageMap = {
    phone1: require('../assets/phone1.png'),
    phone2: require('../assets/vs_black.png'),
    phone3: require('../assets/vs_red.png'),
    phone4: require('../assets/vs_silver.png')
  };

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <View style={styles.row}>
          <Image style={styles.image} source={imageMap[url]} />
          
          <View style={styles.info}>
            <Text style={styles.title}>{title}</Text>

            <View style={styles.ratingContainer}>
              {[1, 2, 3, 4, 5].map((i) => (
                <Icon
                  key={i}
                  name={i <= rating ? 'star' : 'star-o'}
                  size={15}
                  color="#FFD700"
                  style={{ marginRight: 2 }}
                />
              ))}
              <Text style={styles.quantityRating}>({quantityRating})</Text>
            </View>

            <View style={styles.priceContainer}>
              <Text style={styles.price}>{price} đ</Text>
              {oldPrice && <Text style={styles.oldPrice}>{oldPrice} đ</Text>}
            </View>
          </View>

          <Pressable style={styles.buyButton} onPress={() => navigation.navigate('Detail',{ product: { url, title, rating, quantityRating, price } } )}>
            <Text style={styles.buyButtonText}>Mua</Text>
          </Pressable>
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginVertical: 6,
  },
  card: {
    padding: 12,
    width: 300,
    borderRadius: 8,
    elevation: 3,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 80,
    height: 100,
    marginRight: 12,
  },
  info: {
    flex: 1,
  },
  title: {
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 4,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  quantityRating: {
    marginLeft: 4,
    fontSize: 12,
    color: '#555',
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  price: {
    fontSize: 16,
    fontWeight: '700',
    color: '#E53935',
    marginRight: 6,
  },
  oldPrice: {
    fontSize: 14,
    color: '#999',
    textDecorationLine: 'line-through',
  },
  buyButton: {
    backgroundColor: '#E53935',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 4,
    alignItems: 'center',
  },
  buyButtonText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 14,
  },
});
