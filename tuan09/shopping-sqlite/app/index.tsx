import { useEffect, useState } from "react";
import { View, Text, FlatList, Button, Alert } from "react-native";
import { useRouter } from "expo-router";
import { initDb } from "../src/db/db";
import { getAllProducts } from "../src/db/product.repo";
import { addToCart } from "../src/db/cart.repo";
import { Product } from "../src/models/types";

export default function ProductScreen() {
  const [products, setProducts] = useState<Product[]>([]);
  const router = useRouter();

  useEffect(() => {
    (async () => {
      await initDb();
      const list = await getAllProducts();
      setProducts(list);
    })();
  }, []);

  const handleAdd = async (id: string) => {
    try {
      await addToCart(id);
      Alert.alert("Đã thêm vào giỏ!");
    } catch (e: any) {
      Alert.alert("Lỗi", e.message);
    }
  };

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Button title="🛒 Xem giỏ hàng" onPress={() => router.push("/cart")} />
      <FlatList
        data={products}
        keyExtractor={(item) => item.product_id}
        renderItem={({ item }) => (
          <View
            style={{
              padding: 12,
              borderBottomWidth: 1,
              borderColor: "#ddd",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text>{item.name} ({item.stock})</Text>
            <Text>{item.price.toLocaleString()}đ</Text>
            <Button title="Thêm" onPress={() => handleAdd(item.product_id)} />
          </View>
        )}
      />
    </View>
  );
}
