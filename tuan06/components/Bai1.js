import { StyleSheet, Text, View } from 'react-native';
import React, { useState ,useEffect} from 'react';
// You can import supported modules from npm
import { Card } from 'react-native-paper';
import HomeScreen from "../screens/HomeScreen"
import DetailScreen from "../screens/DetailScreen"
import PickColor from "../screens/PickColor"
// or any files within the Snack
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

const Stack = createStackNavigator()
export default function Bai1() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Detail" component={DetailScreen} />
        <Stack.Screen name="PickColor" component={PickColor} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

});
