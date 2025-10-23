import { useEffect, useState, useCallback } from "react";
import { View, Text, Button, FlatList } from "react-native";
import { useRouter } from "expo-router";
import { useFocusEffect } from "@react-navigation/native"; // 👈 thêm dòng này
import { getCartItems, updateQty } from "../src/db/cart.repo";
import { CartItem } from "../src/models/types";

export default function CartScreen() {
  const [items, setItems] = useState<CartItem[]>([]);
  const router = useRouter();

  // Hàm load giỏ hàng
  const load = async () => {
    const data = await getCartItems();
    setItems(data);
  };

  // 👇 Khi màn hình được focus, tự động reload dữ liệu
  useFocusEffect(
    useCallback(() => {
      load();
    }, [])
  );

  const total = items.reduce((sum, i) => sum + (i.price ?? 0) * i.qty, 0);

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Button title="⬅️ Sản phẩm" onPress={() => router.push("/")} />

      <FlatList
        data={items}
        keyExtractor={(i) => i.id.toString()}
        renderItem={({ item }) => (
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingVertical: 8,
            }}
          >
            <Text style={{ flex: 1 }}>{item.name}</Text>
            <Button title="-" onPress={() => updateQty(item.id, item.qty - 1).then(load)} />
            <Text style={{ width: 30, textAlign: "center" }}>{item.qty}</Text>
            <Button title="+" onPress={() => updateQty(item.id, item.qty + 1).then(load)} />
          </View>
        )}
      />

      <Text style={{ fontWeight: "bold", marginVertical: 12 }}>
        Tạm tính: {total.toLocaleString()}đ
      </Text>

      <Button title="Xem hoá đơn" onPress={() => router.push("/invoice")} />
    </View>
  );
}
