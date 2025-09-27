import React, { useState } from "react";
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function FavoritesScreen() {
  // Data giả lập
  const [favorites, setFavorites] = useState([
    { id: "1", name: "iPhone 15 Pro", image: require("../assets/phone1.png") },
    { id: "2", name: "Samsung S24 Ultra", image: require("../assets/vs_black.png") },
    { id: "3", name: "Xiaomi 14", image: require("../assets/vs_red.png") },
  ]);

  // Hàm xoá khỏi favorites
  const removeFromFavorites = (id) => {
    setFavorites(favorites.filter((item) => item.id !== id));
  };

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.name}>{item.name}</Text>
      <TouchableOpacity onPress={() => removeFromFavorites(item.id)}>
        <Ionicons name="trash" size={24} color="red" />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      {favorites.length > 0 ? (
        <FlatList
          data={favorites}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      ) : (
        <Text style={styles.emptyText}>Bạn chưa có sản phẩm yêu thích nào</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 10,
    borderRadius: 8,
  },
  name: {
    flex: 1,
    fontSize: 16,
  },
  emptyText: {
    textAlign: "center",
    marginTop: 20,
    fontSize: 16,
    color: "gray",
  },
});
