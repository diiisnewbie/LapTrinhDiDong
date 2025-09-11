import React, { useState } from 'react';
import { SafeAreaView, ScrollView, Alert, StyleSheet } from 'react-native';
import CartItem from './CartItem';
import CartSummary from './CartSummary';

export default function CartScreen() {
  const [quantity, setQuantity] = useState(1);
  const unitPrice = 141800;

  const changeQuantity = (delta) => setQuantity((q) => delta+q);

  const subtotal = unitPrice * quantity;

  const proceedToCheckout = () => {
    Alert.alert('Đặt hàng', `Tổng: ${subtotal} đ\nSố lượng: ${quantity}`);
  };

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.container}>
        <CartItem
          title="Nguyên hàm, tích phân và ứng dụng"
          unitPrice={unitPrice}
          origPrice="~~111.000 đ~~"
          quantity={quantity}
          onChangeQuantity={changeQuantity}
        />
        <CartSummary subtotal={subtotal} onCheckout={proceedToCheckout} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#F6F6F6' },
  container: { padding: 16 },
});
