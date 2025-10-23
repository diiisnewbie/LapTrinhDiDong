import { useEffect, useState, useCallback } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";
import { useRouter } from "expo-router";
import { useFocusEffect } from "@react-navigation/native";
import { getCartItems, updateQty } from "../src/db/cart.repo";
import { CartItem } from "../src/models/types";

export default function CartScreen() {
  const [items, setItems] = useState<CartItem[]>([]);
  const router = useRouter();

  const load = async () => {
    const data = await getCartItems();
    setItems(data);
  };

  useFocusEffect(
    useCallback(() => {
      load();
    }, [])
  );

  const total = items.reduce((sum, i) => sum + (i.price ?? 0) * i.qty, 0);

  const handleUpdate = async (id: number, newQty: number) => {
    await updateQty(id, newQty);
    await load();
  };

  const renderItem = ({ item }: { item: CartItem }) => (
    <View style={styles.itemCard}>
      <View style={{ flex: 1 }}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemPrice}>{(item.price ?? 0).toLocaleString()}đ</Text>
      </View>

      <View style={styles.qtyControl}>
        <TouchableOpacity
          style={styles.qtyButton}
          onPress={() => handleUpdate(item.id, item.qty - 1)}
        >
          <Text style={styles.qtyText}>−</Text>
        </TouchableOpacity>
        <Text style={styles.qtyValue}>{item.qty}</Text>
        <TouchableOpacity
          style={styles.qtyButton}
          onPress={() => handleUpdate(item.id, item.qty + 1)}
        >
          <Text style={styles.qtyText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🛒 Giỏ hàng của bạn</Text>

      {items.length === 0 ? (
        <Text style={styles.emptyText}>Giỏ hàng trống 😢</Text>
      ) : (
        <FlatList
          data={items}
          keyExtractor={(i) => i.id.toString()}
          renderItem={renderItem}
          contentContainerStyle={{ paddingBottom: 24 }}
        />
      )}

      <View style={styles.summary}>
        <Text style={styles.totalLabel}>Tạm tính:</Text>
        <Text style={styles.totalValue}>{total.toLocaleString()}đ</Text>
      </View>

      <View style={styles.buttonRow}>
        <TouchableOpacity
          style={[styles.button, styles.backButton]}
          onPress={() => router.push("/")}
        >
          <Text style={styles.backText}>⬅️ Tiếp tục mua</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.payButton]}
          onPress={() => router.push("/invoice")}
        >
          <Text style={styles.payText}>🧾 Xem hoá đơn</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
    padding: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 16,
  },
  itemCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 12,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 3,
    elevation: 2,
  },
  itemName: {
    fontSize: 16,
    fontWeight: "600",
  },
  itemPrice: {
    color: "#FF9500",
    marginTop: 4,
  },
  qtyControl: {
    flexDirection: "row",
    alignItems: "center",
  },
  qtyButton: {
    backgroundColor: "#007AFF",
    width: 32,
    height: 32,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  qtyText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "700",
  },
  qtyValue: {
    width: 36,
    textAlign: "center",
    fontSize: 16,
    fontWeight: "600",
  },
  summary: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 12,
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 3,
    elevation: 1,
  },
  totalLabel: {
    fontSize: 17,
    fontWeight: "600",
  },
  totalValue: {
    fontSize: 17,
    fontWeight: "700",
    color: "#007AFF",
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    gap: 12,
  },
  button: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: "center",
  },
  backButton: {
    backgroundColor: "#ddd",
  },
  payButton: {
    backgroundColor: "#34C759",
  },
  backText: {
    color: "#333",
    fontWeight: "600",
  },
  payText: {
    color: "#fff",
    fontWeight: "700",
  },
  emptyText: {
    textAlign: "center",
    marginTop: 100,
    fontSize: 16,
    color: "#888",
  },
});
