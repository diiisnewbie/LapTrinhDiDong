import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  ActivityIndicator,
  ScrollView,
  Pressable
} from 'react-native';
import React, { useState, useEffect } from 'react';
import { Product } from './Product';

export default function Bai5() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isGrid, setIsGrid] = useState(false);
  const [numCol, setNumCol] = useState(1);

  useEffect(() => {
    setTimeout(() => {
      fetch('https://68319acc6205ab0d6c3cf98e.mockapi.io/demo')
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
  }, []);

  const onChangeView = () =>{
    setIsGrid(!isGrid);
    setNumCol(2)
  }

  return (
    <SafeAreaView style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#00ff00" />
      ) : (
        <ScrollView>
          <Text style={styles.sectionTitle}>Sản phẩm nổi bật</Text>
          <FlatList
            data={data.slice(0, 5)}
            renderItem={({ item }) => (
              <Product url={item.img} title={item.title} description="" />
            )}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={true}
          />

          <View style={styles.headerRow}>
            <Text style={styles.sectionTitle}>Tất cả sản phẩm</Text>
            <Pressable
              style={styles.toggleButton}
              onPress={() => onChangeView()}
            >
              <Text style={styles.toggleText}>
                {isGrid ? 'Chuyển sang List' : 'Chuyển sang Grid'}
              </Text>
            </Pressable>
          </View>

          {isGrid ?  (
            <FlatList
            data={data}
             key={'_'}
            keyExtractor={item => "_" + item.id}
            renderItem={({ item }) => (
              <View style={isGrid ? styles.gridItem : styles.listItem}>
                <Product url={item.img} title={item.title} description="" />
              </View>
            )}
            numColumns={2}
            scrollEnabled={false}
          />
          ) : (
            <FlatList
            data={data}
             key={'#'}
            keyExtractor={item => "#" + item.id}
            renderItem={({ item }) => (
              <View style={isGrid ? styles.gridItem : styles.listItem}>
                <Product url={item.img} title={item.title} description="" />
              </View>
            )}
            numColumns={1}
            scrollEnabled={false}
          />
          )}
        </ScrollView>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 8,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  toggleButton: {
    backgroundColor: '#3498db',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
  },
  toggleText: {
    color: '#fff',
    fontWeight: '600',
  },
  gridItem: {
    flex: 1,
    margin: 5,
  },
  listItem: {
    flex: 1,
    marginVertical: 5,
  },
});
