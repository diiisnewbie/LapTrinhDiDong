import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import {useState} from "react"

export default function ItemDetail(product) {
  const [isFavorite,setIsFavorite] = useState(false)
  const onPressHeart = () => {
    setIsFavorite(!isFavorite); // đảo trạng thái khi bấm
  };
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>
        {/* Ảnh sản phẩm */}
        <Image
          source={require("../assets/bike.png")}
          style={styles.image}
          resizeMode="contain"
        />

        {/* Thông tin sản phẩm */}
        <Text style={styles.title}>{product.name}</Text>
        <Text style={styles.priceDiscount}>15% OFF | 350$</Text>
        <Text style={styles.oldPrice}>${product.price}</Text>

        {/* Description */}
        <Text style={styles.sectionTitle}>Description</Text>
        <Text style={styles.description}>
          It is a very important form of writing as we write almost everything
          in paragraphs, be it an answer, essay, story, emails, etc.
        </Text>

        {/* Icon + Button */}
        <View style={styles.footer}>
          <TouchableOpacity style={styles.heart} onPress={() => onPressHeart()}>
          <AntDesign
            name={product.isFavorite ? 'heart' : 'hearto'} // đổi icon
            size={20}
            color={product.isFavorite ? 'red' : 'gray'} // đổi màu
          />
        </TouchableOpacity>
          <TouchableOpacity style={styles.addButton}>
            <Text style={styles.addButtonText}>Add to card</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#f9f9f9",
  },
  card: {
    backgroundColor: "white",
    borderRadius: 12,
    padding: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  image: {
    width: "100%",
    height: 200,
    marginBottom: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 5,
  },
  priceDiscount: {
    fontSize: 16,
    color: "green",
    marginBottom: 2,
  },
  oldPrice: {
    fontSize: 16,
    color: "gray",
    textDecorationLine: "line-through",
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 6,
  },
  description: {
    fontSize: 14,
    color: "#444",
    marginBottom: 20,
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  heart: {
    padding: 10,
  },
  addButton: {
    backgroundColor: "red",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 30,
  },
  addButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});
