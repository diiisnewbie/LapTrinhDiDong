import { StyleSheet, Text, View ,SafeAreaView,FlatList, ActivityIndicator} from 'react-native';
import React, { useState ,useEffect} from "react";
// You can import supported modules from npm
import { Card } from 'react-native-paper';

import Header1 from "./Header1"
import {Item1} from "./Item1"
import Footer from "./Footer"

export default function Bai2() {
const data = [
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


  return (
    <SafeAreaView style={styles.container}>
        <Header1/>
        <FlatList
          data={data}
          numColumns={2}
          renderItem={({item}) => <Item1 url={item.image} title={item.title} price={item.price} coupon = {item.discount} rating={item.rating}  quantityrating = {item.reviewCount}/>}
          keyExtractor={item => item.id}
        />
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
