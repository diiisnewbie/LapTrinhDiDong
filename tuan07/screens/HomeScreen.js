import { StyleSheet, Text, View, Image, Pressable } from 'react-native';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack

export default function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={{ fontWeight: 'bold', textAlign: 'center', fontSize: 15 }}>
        A premium online store for sporter and their stylish choice
      </Text>
      <Image style={styles.image} source={require('../assets/bike.png')} />
      <Text style={{ fontWeight: 'bold', textAlign: 'center', fontSize: 18 }}>
        POWER BIKE <br/> SHOP
      </Text>
      <Pressable style={styles.button} onPress={() => navigation.navigate('List')}>
        <Text style={{color:'white',textAlign:'center', fontSize:18}}>Get Started</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    padding: 8,
    justifyContent: 'space-around',
  },
  image: {
    width: 292,
    height: 270,
  },
  button:{
    backgroundColor:'red',
    borderRadius:30,
    padding: 8
  }
});
