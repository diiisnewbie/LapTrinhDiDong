import {
  Text,
  View,
  StyleSheet,
  Image,
  FlatList,
  ScrollView,
  TextInput,
} from 'react-native';
import ItemDetail from '../components/Item';
import phone1 from '../assets/phone1.png';
import Item from '../components/ItemList';
import React, { useState, useEffect } from 'react';
export default function SearchScreen({ navigation }) {
  const [text, setText] = useState('');
  return (
    <View style={styles.container}>
      <TextInput style={styles.input}
        value={text} // nhưng text chưa khởi tạo hoặc bị undefined
        onChangeText={setText}
        placeholder="Nhập từ khóa để tìm kiếm"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding:10
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor:'white'
  },
});
