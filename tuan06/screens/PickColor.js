import React, { useState ,useCallback} from 'react';
import { View, Text, StyleSheet, Image, Pressable, ScrollView } from 'react-native';

export default function PickColor({ route ,navigation}) {
  const { product } = route.params;

  // Map các ảnh
  const imageMap = {
    phone1: require('../assets/phone1.png'),
    phone2: require('../assets/vs_black.png'),
    phone3: require('../assets/vs_red.png'),
    phone4: require('../assets/vs_silver.png'),
  };

  // Map màu tới ảnh tương ứng
  const colorMap = {
    '#BEEAF9': imageMap.phone1,
    '#000000': imageMap.phone2,
    '#FF0000': imageMap.phone3,
    '#808080': imageMap.phone4,
  };

  const colors = ['#BEEAF9', '#FF0000', '#000000', '#808080'];

  // State
  const [selectedColor, setSelectedColor] = useState(null);
  const [urlImage, setUrlImage] = useState(imageMap[product.url]);
  const handleOnClick = () => {
  const key = Object.keys(imageMap).find(k => imageMap[k] === urlImage);
  navigation.navigate('Detail', {
    product: {
      url: key,   // gửi key đúng
      title: product.title,
      rating: product.rating,
      quantityRating: product.quantityRating,
      price: product.price,
    }
  });
};

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Hình sản phẩm */}
      <Image source={urlImage} style={styles.image} />

      {/* Tên sản phẩm */}
      <Text style={styles.title}>{product.name || 'Điện Thoại Vsmart Joy 3'}</Text>
      <Text style={styles.subtitle}>Hàng chính hãng</Text>

      {/* Chọn màu */}
      <Text style={styles.label}>Chọn một màu bên dưới:</Text>
      <View style={styles.colorContainer}>
        {colors.map((color, index) => (
          <Pressable
            key={index}
            style={[
              styles.colorBox,
              { backgroundColor: color },
              selectedColor === color && styles.selectedColor,
            ]}
            onPress={() => {
              setUrlImage(colorMap[color]);
              setSelectedColor(color);
            }}
          />
        ))}
      </View>

      {/* Nút XONG */}
      <Pressable
        style={styles.button}
        onPress={handleOnClick}
      >
        <Text style={styles.buttonText}>XONG</Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#D3D3D3',
    alignItems: 'center',
  },
  image: {
    width: 150,
    height: 200,
    resizeMode: 'contain',
    marginBottom: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    color: '#555',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    alignSelf: 'flex-start',
    marginBottom: 8,
  },
  colorContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  colorBox: {
    width: 60,
    height: 60,
    marginHorizontal: 6,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#ccc',
  },
  selectedColor: {
    borderColor: '#000',
    borderWidth: 3,
  },
  button: {
    backgroundColor: '#3B4CCA',
    paddingVertical: 12,
    paddingHorizontal: 50,
    borderRadius: 6,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 16,
  },
});
