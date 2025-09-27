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
import FavoritesScreen from "../screens/FavoritesScreen"

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator();


function MyTabs() {
  return (
    <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = focused ? "home" : "home-outline";
            } else if (route.name === "Favorites") {
              iconName = focused ? "heart" : "heart-outline";
            }

            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Favorites" component={FavoritesScreen} />
      </Tab.Navigator>
  );
}

export default function Bai4() {


  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={MyTabs} options={{ headerShown: false }}/>
        <Stack.Screen name="Detail" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

});
