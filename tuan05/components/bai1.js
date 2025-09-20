import { StyleSheet, Text, View ,SafeAreaView,FlatList, ActivityIndicator} from 'react-native';
import React, { useState ,useEffect} from "react";
// You can import supported modules from npm
import { Card } from 'react-native-paper';

import Header from "./Header"
import {Item} from "./Item"
import Footer from "./Footer"

export default function Bai1() {
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


  return (
    <SafeAreaView style={styles.container}>
        <Header/>
        <FlatList
          data={DATA}
          renderItem={({item}) => <Item url={item.image} title={item.title} nameshop={item.shopName}/>}
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
