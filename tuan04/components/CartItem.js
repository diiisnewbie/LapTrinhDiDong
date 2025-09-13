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
    <View style={styles.container}>
      <View style={styles.card}>
        <Image
          source={require('../assets/book.png')} // thay bằng ảnh thật
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
      <View style={{ flexDirection: 'row' ,marginBottom:10}}>
        <Text style={{ flexGrow: 1 }}>Mã giảm giá đã lưu</Text>
        <Text style={{ color: 'blue', flexGrow: 2 }}>Xem tại đây</Text>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <View
          style={{
            flexDirection: 'row',
            borderWidth: 1,
            width: 140,
            padding: 10,
          }}>
          <View
            style={{
              width: 32,
              height: 16,
              borderWidth: 1,
              alignSelf: 'center',
              backgroundColor: 'yellow',
              marginRight: 5,
            }}></View>
          <Text style={{ fontSize: 13 }}>Mã giảm giá</Text>
        </View>
        <Text
          style={{
            color: 'white',
            borderWidth: 1,
            backgroundColor: 'blue',
            fontSize: 13,
            alignSelf: 'center',
            padding: 10,
          }}>
          Áp dụng
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 10,
  },
  card: {
    flexDirection: 'row',
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
});
