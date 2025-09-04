import { Text, SafeAreaView, StyleSheet, View, Pressable } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
// You can import supported modules from npm
import { Card } from 'react-native-paper';

import Circle from '../components/Circle.js';

export default function Screen2() {
  return (
    <LinearGradient colors={['#e0ffff','rgba(55, 214, 248, 1)']} locations={[0.7, 1]}  style={styles.container}>
      <View style={styles.container}>
      <View style={{ flex: 3 }}>
        <Circle></Circle>
      </View>
      <View style={{ flex: 2, alignItems: 'center', width: 189 }}>
        <Text style={{ fontWeight: 700, fontSize: 25, textAlign: 'center' }}>
          GROW YOUR BUSSINESS
        </Text>
      </View>
      <View style={{ flex: 2, alignItems: 'center', width: 302 }}>
        <Text style={{ fontWeight: 700, textAlign: 'center', fontSize: 15 }}>
          We will help you to grow to bussiness using online server
        </Text>
      </View>
      <View style={{ flex: 2 ,width:'100%'}}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}>
          <Pressable
            style={{
              backgroundColor: '#ffd700',
              width: 125,
              height: 45,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{ fontSize: 18, fontWeight: 700 }}>LOGIN</Text>
          </Pressable>
          <Pressable
            style={{
              backgroundColor: '#ffd700',
              width: 125,
              height: 45,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{ fontSize: 18, fontWeight: 700 }}>SIGN UP</Text>
          </Pressable>
        </View>
        <Text style={{textAlign:'center',fontSize:18,fontWeight:700,flex:2}}>HOW WE WORK?</Text>
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
