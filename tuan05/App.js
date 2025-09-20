import { StyleSheet, Text, View ,SafeAreaView,FlatList, ActivityIndicator} from 'react-native';
import React, { useState ,useEffect} from "react";
// You can import supported modules from npm
import { Card } from 'react-native-paper';

import Bai1 from "./components/bai1"
import Bai2 from "./components/bai2"
import Bai3 from "./components/bai3"
import Bai4 from "./components/bai4"
import Bai5 from "./components/bai5"

export default function App() {



  return (
    <SafeAreaView style={styles.container}>
        <Bai5/>
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
