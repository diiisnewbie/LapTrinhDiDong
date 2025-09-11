import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';

export default function CartItem({
  title,
  unitPrice,
  origPrice,
  quantity,
  onChangeQuantity,
}) {
  const formatVND = (n) =>
    n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.') + ' đ';

  return (
    <View style={styles.card}>
      <Image
        source={require("../assets/book.png")} // thay bằng ảnh thật
        style={styles.thumb}
        resizeMode="contain"
      />

      <View style={styles.info}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.soldPrice}>{formatVND(unitPrice)}</Text>
        <Text style={styles.origPrice}>{origPrice}</Text>

        <View style={styles.qtyRow}>
          <TouchableOpacity
            style={styles.qtyBtn}
            onPress={() => onChangeQuantity(-1)}>
            <Text style={styles.qtyBtnText}>-</Text>
          </TouchableOpacity>

          <View style={styles.qtyBox}>
            <Text style={styles.qtyText}>{quantity}</Text>
          </View>

          <TouchableOpacity
            style={styles.qtyBtn}
            onPress={() => onChangeQuantity(1)}>
            <Text style={styles.qtyBtnText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 8,
    elevation: 2,
  },
  thumb: { width: 100, height: 120, borderRadius: 4, backgroundColor: '#eee' },
  info: { flex: 1, marginLeft: 12, justifyContent: 'space-between' },
  title: { fontSize: 16, fontWeight: '600' },
  soldPrice: {
    marginTop: 6,
    fontSize: 16,
    fontWeight: '700',
    color: '#e53935',
  },
  origPrice: {
    textDecorationLine: 'line-through',
    color: '#888',
    marginTop: 4,
  },
  qtyRow: { flexDirection: 'row', alignItems: 'center', marginTop: 10 },
  qtyBtn: {
    width: 36,
    height: 36,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  qtyBtnText: { fontSize: 18, fontWeight: '600' },
  qtyBox: { minWidth: 44, alignItems: 'center', justifyContent: 'center' },
  qtyText: { fontSize: 16 },
  couponRow: { flexDirection: 'row', marginTop: 12, alignItems: 'center' },
  couponInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 6,
    paddingHorizontal: 10,
    height: 40,
    backgroundColor: '#fff',
  },
  applyBtn: {
    marginLeft: 8,
    backgroundColor: '#2b8cff',
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 6,
  },
  applyText: { color: '#fff', fontWeight: '600' },
});
