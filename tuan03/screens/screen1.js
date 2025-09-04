import { Text, SafeAreaView, StyleSheet, View, Pressable } from 'react-native';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

import Circle from '../components/Circle.js';

export default function Screen1() {
  return (
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
      <View style={{ flex: 1 ,width:'100%'}}>
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
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#00bfff',
    alignItems: 'center',
  },
});
