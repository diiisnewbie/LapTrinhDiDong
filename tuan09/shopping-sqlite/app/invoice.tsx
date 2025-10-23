import { useEffect, useState } from "react";
import { View, Text, FlatList, Button } from "react-native";
import { useRouter } from "expo-router";
import { getCartItems, clearCart } from "../src/db/cart.repo";

export default function InvoiceScreen() {
  const [items, setItems] = useState<any[]>([]);
  const router = useRouter();

  useEffect(() => {
    getCartItems().then(setItems);
  }, []);

  const subtotal = items.reduce((sum, i) => sum + i.qty * i.price, 0);
  const vat = subtotal * 0.1;
  const total = subtotal + vat;

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Text style={{ fontSize: 18, fontWeight: "bold" }}>Hoá đơn</Text>
      <FlatList
        data={items}
        keyExtractor={(i) => i.id.toString()}
        renderItem={({ item }) => (
          <Text>
            {item.name} x{item.qty} = {(item.qty * item.price).toLocaleString()}đ
          </Text>
        )}
      />
      <Text>Tổng: {subtotal.toLocaleString()}đ</Text>
      <Text>VAT (10%): {vat.toLocaleString()}đ</Text>
      <Text style={{ fontWeight: "bold" }}>Thành tiền: {total.toLocaleString()}đ</Text>

      <Button title="⬅️ Quay lại giỏ" onPress={() => router.push("/cart")} />
      <Button
        title="💳 Thanh toán"
        onPress={async () => {
          await clearCart();
          alert("Đã thanh toán!");
          router.push("/");
        }}
      />
    </View>
  );
}
