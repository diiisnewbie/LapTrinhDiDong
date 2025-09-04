import { Text, SafeAreaView, StyleSheet, View, Pressable ,Image} from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
// You can import supported modules from npm
import { Card } from 'react-native-paper';

import Circle from '../components/Circle.js';

export default function Screen3() {
  return (
    <LinearGradient colors={['#e0ffff','rgba(55, 214, 248, 1)']} locations={[0.7, 1]}  style={styles.container}>
      <View style={styles.container}>
      <View style={{ flex: 3 ,justifyContent:'center'}}>
        <Image source={require('../assets/lock.png')}
          style={{width:140,height:140}}
        >

        </Image>
      </View>
      <View style={{ flex: 2, alignItems: 'center', width: 189 }}>
        <Text style={{ fontWeight: 700, fontSize: 25, textAlign: 'center' }}>
          FORGET PASSWORD
        </Text>
      </View>
      <View style={{ flex: 2, alignItems: 'center', width: 302 }}>
        <Text style={{ fontWeight: 700, textAlign: 'center', fontSize: 15 }}>
          Provide your account's email for which you want to reset your password
        </Text>
      </View>
      <View style={{ flex: 1 ,width:'100%'}}>
        
      </View>
    </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 300,
  }
});
