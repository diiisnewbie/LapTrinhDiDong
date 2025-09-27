import { StyleSheet, Text, View } from 'react-native';

// You can import supported modules from npm
import { Card } from 'react-native-paper';
import HomeScreen from "./screens/HomeScreen"
import DetailScreen from "./screens/DetailScreen"
import PickColor from "./screens/PickColor"
// or any files within the Snack
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import Bai1 from "./components/Bai1"
import Bai3 from "./components/Bai3"
import Bai4 from "./components/Bai4"
import Bai5 from "./components/Bai5"
export default function App() {
  

  return (
    <Bai5/>
  );
}

const styles = StyleSheet.create({

});
