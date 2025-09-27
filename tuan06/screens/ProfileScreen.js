import { Text, View, StyleSheet, Image, FlatList ,ScrollView} from 'react-native';
import ItemDetail from '../components/Item';
import phone1 from "../assets/phone1.png"
import Item from "../components/ItemList"
import React, { useState ,useEffect} from 'react';
export default function ProfileScreen({navigation}) {

  const data = [
    {
      id: 1,
      name : "Tran Nhat Duy",
      avatar : "../assets/phone1.png"
    },
  ]
  
  const imageMap = {
    phone1: require('../assets/phone1.png'),
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <FlatList
        data={data}
        renderItem={({ item }) => (
          <View style={{flexDirection:'row',padding:20, backgroundColor:'white',borderRadius:10, marginBottom:10,justifyContent:'space-between',width:300}}>
            <Image style={styles.image} source ={require(item.avatar)}/>
            <Text>{item.name}</Text>
          </View>
        )
        }
      horizontal={false}/>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width:'100%'
  },
  image:{
    width:70,
    height:80
  }
});
