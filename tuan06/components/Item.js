import { Text, View, StyleSheet, Image, Pressable } from 'react-native';
import { Card } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

export default function Item({
  url,
  title,
  rating,
  quantityRating,
  price,
  oldPrice,
}) {
  const navigation = useNavigation();
  const imageMap = {
    phone1: require('../assets/phone1.png'),
    phone2: require('../assets/vs_black.png'),
    phone3: require('../assets/vs_red.png'),
    phone4: require('../assets/vs_silver.png'),
  };

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <View>
          <Image style={styles.image} source={imageMap[url]} />
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

          <Text style={styles.promoText}>Ở đâu rẻ hơn hoàn tiền</Text>

          <Pressable style={styles.colorButton} onPress={() => navigation.navigate('PickColor',{ product: { url, title, rating, quantityRating, price } } )}>
            <Text style={styles.colorButtonText}>4 màu - chọn màu</Text>
          </Pressable>

          <Pressable style={styles.buyButton}>
            <Text style={styles.buyButtonText}>CHỌN MUA</Text>
          </Pressable>
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 16,
  },
  card: {
    padding: 12,
    width: 300,
    height:500,
    borderRadius: 8,
  },
  image: {
    width: 131,
    height: 161,
    alignSelf: 'center',
  },
  title: {
    marginTop: 8,
    fontSize: 14,
    fontWeight: '500',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  quantityRating: {
    marginLeft: 4,
    fontSize: 12,
    color: '#555',
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
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
  promoText: {
    marginTop: 4,
    fontSize: 12,
    color: 'red',
  },
  colorButton: {
    marginTop: 8,
    padding: 6,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    alignItems: 'center',
  },
  colorButtonText: {
    fontSize: 12,
    color: '#333',
  },
  buyButton: {
    marginTop: 50,
    backgroundColor: '#E53935',
    paddingVertical: 8,
    borderRadius: 4,
    alignItems: 'center',
  },
  buyButtonText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 14,
  },
});
