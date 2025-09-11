import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput, Alert, SafeAreaView, ScrollView } from 'react-native';

// Single-file React Native cart screen (works with Expo)
// Usage: import CartScreen from './CartScreen' and render in your navigator or App.js

export default function Part2({ title,
  unitPrice,
  origPrice,
  quantity,
  onChangeQuantity,}) {

  return (
    <View style={{flexDirection:'row'}}>
      <Image
        source={require("../assets/book.png")} // thay bằng ảnh thật
        resizeMode="contain"
      />
      <View>
        <Text>{title}</Text>
        <Text>{unitPrice}</Text>
        <Text style={{textDecorationLine:'line-through'}}>{origPrice}</Text>
        <View>
          <View style = {{flexDirection:'row'}}>
            <TouchableOpacity onPress ={ () => onChangeQuantity(-1)} style={{width:20,borderWidth:1}}>
              <Text style={{textAlign:'center'}}>-</Text>
            </TouchableOpacity>

            <Text>{quantity}</Text>

            <TouchableOpacity onPress ={ () => onChangeQuantity(1)}>
              <Text>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

