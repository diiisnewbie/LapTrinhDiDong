import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function CartSummary({ subtotal, onCheckout }) {
  const formatVND = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.') + ' đ';

  return (
    <View style={styles.summary}>
      <View style={styles.rowBetween}>
        <Text style={styles.label}>Tạm tính</Text>
        <Text style={styles.value}>{formatVND(subtotal)}</Text>
      </View>

      <View style={styles.divider} />

      <View style={styles.rowBetween}>
        <Text style={styles.totalLabel}>Thành tiền</Text>
        <Text style={styles.totalValue}>{formatVND(subtotal)}</Text>
      </View>

      <TouchableOpacity style={styles.checkoutBtn} onPress={onCheckout}>
        <Text style={styles.checkoutText}>TIẾN HÀNH ĐẶT HÀNG</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  summary: { marginTop: 16, backgroundColor: '#fff', padding: 16, borderRadius: 8 },
  rowBetween: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  label: { color: '#666' },
  value: { fontWeight: '700' },
  divider: { height: 1, backgroundColor: '#eee', marginVertical: 12 },
  totalLabel: { fontSize: 16, fontWeight: '600' },
  totalValue: { fontSize: 16, fontWeight: '700', color: '#e53935' },
  checkoutBtn: { marginTop: 16, backgroundColor: '#e53935', paddingVertical: 14, borderRadius: 8, alignItems: 'center' },
  checkoutText: { color: '#fff', fontWeight: '700' },
});
