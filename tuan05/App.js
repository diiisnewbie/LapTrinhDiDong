import { StyleSheet, Text, View ,SafeAreaView,FlatList, ActivityIndicator} from 'react-native';
import React, { useState ,useEffect} from "react";
// You can import supported modules from npm
import { Card } from 'react-native-paper';

import Header from "./components/Header"
import {Item} from "./components/Item"
import Footer from "./components/Footer"
import Header1 from "./components/Header1"
import {Item1} from "./components/Item1"

export default function App() {
const DATA = [
  {
    id: "1",
    title: "Tai nghe Bluetooth",
    shopName: "Shop Sài Gòn",
    image: "https://picsum.photos/seed/1/200/200"
  },
  {
    id: "2",
    title: "Áo thun nam",
    shopName: "Cửa hàng Hà Nội",
    image: "https://picsum.photos/seed/2/200/200"
  },
  {
    id: "3",
    title: "Giày sneaker",
    shopName: "Store Đà Nẵng",
    image: "https://picsum.photos/seed/3/200/200"
  },
  {
    id: "4",
    title: "Balo laptop",
    shopName: "Shop Phúc",
    image: "https://picsum.photos/seed/4/200/200"
  },
  {
    id: "5",
    title: "Đồng hồ thông minh",
    shopName: "Nhà bán Thanh",
    image: "https://picsum.photos/seed/5/200/200"
  }
];

const data1 = [
  {
    id: "1",
    image: "https://picsum.photos/200/200?random=1",
    name: "Điện thoại iPhone 14 Pro",
    price: "290.000đ",
    discount: 10, // giảm 10%
    rating: 5, // số sao trung bình
    reviewCount: 1250 // số lượt đánh giá
  },
  {
    id: "2",
    image: "https://picsum.photos/200/200?random=2",
    name: "Laptop MacBook Air M2",
    price: "300.000đ",
    discount: 15,
    rating: 2,
    reviewCount: 980
  },
  {
    id: "3",
    image: "https://picsum.photos/200/200?random=3",
    name: "Tai nghe AirPods Pro 2",
    price: "350.000đ",
    discount: 20,
    rating: 3,
    reviewCount: 2100
  },
  {
    id: "4",
    image: "https://picsum.photos/200/200?random=4",
    name: "Đồng hồ Apple Watch Series 8",
    price: "500.000đ",
    discount: 12,
    rating: 4.6,
    reviewCount: 1575
  },
  {
    id: "5",
    image: "https://picsum.photos/200/200?random=5",
    name: "Loa Bluetooth JBL Charge 5",
    price: "300.000đ",
    discount: 25,
    rating: 4.5,
    reviewCount: 860
  }
];

  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Gọi API khi component mount
    fetch("https://68cb5fe4716562cf50733f31.mockapi.io/product/product") // API mẫu
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Lỗi khi fetch API:", error);
        setLoading(false);
      });
  }, []); // [] để chỉ chạy 1 lần khi component mount

  return (
    <SafeAreaView style={styles.container}>
        <Header/>
        {!loading? (
          <FlatList
          data={data}
          renderItem={({item}) => <Item url={item.image} title={item.title} nameshop={item.shopName}/>}
          keyExtractor={item => item.id}
        />
        ) : (
          <ActivityIndicator size="large" color="blue" />
        )}
        <Footer/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});
