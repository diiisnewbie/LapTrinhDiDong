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
import { getCartItems } from "../src/db/cart.repo";
import { checkout } from "../src/db/order.repo";

export default function InvoiceScreen() {
  const [items, setItems] = useState<any[]>([]);
  const [currentTime, setCurrentTime] = useState<string>(""); // 🕒 thêm state lưu ngày giờ
  const router = useRouter();

  useEffect(() => {
    getCartItems().then(setItems);

    // 🕓 Lấy ngày giờ hiện tại
    const now = new Date();
    const formatted = now.toLocaleString("vi-VN", {
      hour12: false,
      weekday: "long",
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
    setCurrentTime(formatted);
  }, []);

  const subtotal = items.reduce((sum, i) => sum + (i.qty ?? 0) * (i.price ?? 0), 0);
  const vat = subtotal * 0.1;
  const total = subtotal + vat;

  const renderItem = ({ item }: { item: any }) => (
    <View style={styles.itemCard}>
      <View style={{ flex: 1 }}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemQty}>Số lượng: {item.qty}</Text>
      </View>
      <Text style={styles.itemPrice}>
        {((item.qty ?? 0) * (item.price ?? 0)).toLocaleString()}đ
      </Text>
    </View>
  );

  const handleCheckout = async () => {
    try {
      await checkout();
      Alert.alert("✅ Thành công", "Đã thanh toán và lưu đơn hàng!");
      router.push("/");
    } catch (err: any) {
      Alert.alert("❌ Lỗi", err.message || "Không thể thanh toán");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🧾 Hoá đơn thanh toán</Text>
      {/* 🕒 Thêm ngày giờ hóa đơn */}
      <Text style={styles.dateText}>Ngày lập: {currentTime}</Text>

      <FlatList
        data={items}
        keyExtractor={(i) => i.id.toString()}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: 24 }}
      />

      <View style={styles.summary}>
        <View style={styles.row}>
          <Text style={styles.label}>Tạm tính:</Text>
          <Text style={styles.value}>{subtotal.toLocaleString()}đ</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>VAT (10%):</Text>
          <Text style={styles.value}>{vat.toLocaleString()}đ</Text>
        </View>
        <View style={[styles.row, styles.totalRow]}>
          <Text style={styles.totalLabel}>Thành tiền:</Text>
          <Text style={styles.totalValue}>{total.toLocaleString()}đ</Text>
        </View>
      </View>

      <View style={styles.buttonRow}>
        <TouchableOpacity
          style={[styles.button, styles.backButton]}
          onPress={() => router.push("/cart")}
        >
          <Text style={styles.backText}>⬅️ Quay lại giỏ</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.payButton]}
          onPress={handleCheckout}
        >
          <Text style={styles.payText}>💳 Thanh toán</Text>
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
    marginBottom: 8,
  },
  dateText: {
    textAlign: "center",
    color: "#555",
    marginBottom: 16,
    fontStyle: "italic",
  },
  itemCard: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 12,
    marginBottom: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  itemName: {
    fontSize: 16,
    fontWeight: "600",
  },
  itemQty: {
    color: "#777",
    marginTop: 2,
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FF9500",
  },
  summary: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    marginTop: 12,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 3,
    elevation: 1,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 4,
  },
  label: {
    fontSize: 15,
    color: "#555",
  },
  value: {
    fontSize: 15,
    fontWeight: "500",
  },
  totalRow: {
    marginTop: 8,
    borderTopWidth: 1,
    borderTopColor: "#eee",
    paddingTop: 8,
  },
  totalLabel: {
    fontSize: 17,
    fontWeight: "700",
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
});
