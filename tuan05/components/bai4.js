import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import React, { useState, useEffect } from 'react';
// You can import supported modules from npm
import { Card } from 'react-native-paper';
import { User } from './user';

export default function Bai4() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(()=>{
      fetch('https://68319acc6205ab0d6c3cf98e.mockapi.io/User') // API mẫu
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Lỗi khi fetch API:', error);
        setLoading(false);
      });
  }, 1000);
},[])

  return (
    <SafeAreaView style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#00ff00" />
      ) : (
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <User name={item.name} email={item.email} />
          )}
          horizontal={true}
        />
      )}
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
