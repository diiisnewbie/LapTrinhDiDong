import { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
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
      Alert.alert("✅ Thành công", "Đã thêm vào giỏ hàng!");
    } catch (e: any) {
      Alert.alert("❌ Lỗi", e.message);
    }
  };

  const renderItem = ({ item }: { item: Product }) => (
    <View style={styles.card}>
      <View style={{ flex: 1 }}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.stock}>Tồn: {item.stock}</Text>
      </View>
      <View style={styles.priceSection}>
        <Text style={styles.price}>{item.price.toLocaleString()}đ</Text>
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => handleAdd(item.product_id)}
        >
          <Text style={styles.addText}>＋ Thêm</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>☕ Danh sách sản phẩm</Text>

      <TouchableOpacity
        style={styles.cartButton}
        onPress={() => router.push("/cart")}
      >
        <Text style={styles.cartText}>🛒 Xem giỏ hàng</Text>
      </TouchableOpacity>

      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={(item) => item.product_id}
        contentContainerStyle={{ paddingBottom: 40 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
    padding: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 12,
    textAlign: "center",
  },
  cartButton: {
    backgroundColor: "#007AFF",
    paddingVertical: 10,
    borderRadius: 10,
    marginBottom: 16,
  },
  cartText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
    textAlign: "center",
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3, // Android shadow
  },
  name: {
    fontSize: 16,
    fontWeight: "600",
  },
  stock: {
    color: "#888",
    marginTop: 4,
  },
  priceSection: {
    alignItems: "flex-end",
  },
  price: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FF9500",
    marginBottom: 6,
  },
  addButton: {
    backgroundColor: "#34C759",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
  },
  addText: {
    color: "#fff",
    fontWeight: "600",
  },
});
