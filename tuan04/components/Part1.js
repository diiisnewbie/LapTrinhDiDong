import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  Alert,
  StyleSheet,
  View,
} from 'react-native';
import CartItem from './CartItem';
import CartSummary from './CartSummary';

import Part2 from './Part2';
import Part3 from './Part3'

export default function Part1() {
  const [quantity, setQuantity] = useState(1);
  const price = 141800;

  const subTotal = quantity * price;

  const changeQuantity = (delta) => setQuantity((q) => Math.max(1,delta+q));

  return (
    <View>
      <Part2 title="Nguyên hàm tích phân và ứng dụng" 
      unitPrice={price} origPrice={price}  quantity={quantity} onChangeQuantity={changeQuantity}/>
      <Part3 subtotal={subTotal}/>
    </View>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#F6F6F6' },
  container: { padding: 16 },
});
