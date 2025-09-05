import { Text, SafeAreaView, StyleSheet, View, Pressable ,Image , TextInput} from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from "@expo/vector-icons";
// You can import supported modules from npm
import { Card } from 'react-native-paper';

import Circle from '../components/Circle.js';

export default function Screen4() {
  return (
    <LinearGradient colors={['#e0ffff','rgba(55, 214, 248, 1)']} locations={[0.7, 1]}  style={styles.container}>
      <View style={styles.container}>
      <View style={{ flex: 3 ,justifyContent:'center'}}>
        <Text style={{fontSize:60,fontWeight:'bold'}}>CODE</Text>
      </View>
      <View style={{ flex: 1, alignItems: 'center', width: 189 }}>
        <Text style={{ fontWeight: 700, fontSize: 25, textAlign: 'center' }}>
          VERIFICATION
        </Text>
      </View>
      <View style={{ flex: 2, alignItems: 'center', width: 302 }}>
        <Text style={{ fontWeight: 700, textAlign: 'center', fontSize: 15 }}>
          Enter ontime password send on ++849092605798
        </Text>
        <View style={{flex:1,flexDirection:'row',marginTop:20}}>
          <View style={{width:50,height:50,borderWidth:3}}></View>
          <View style={{width:50,height:50,borderWidth:3}}></View>
          <View style={{width:50,height:50,borderWidth:3}}></View>
          <View style={{width:50,height:50,borderWidth:3}}></View>
          <View style={{width:50,height:50,borderWidth:3}}></View>
          <View style={{width:50,height:50,borderWidth:3}}></View>
        </View>
        <View style={{flex:1}}>
          <Pressable style={{backgroundColor:'#ffd700',width:305,height:45,justifyContent:'center',alignItems:'center',fontSize:18,fontWeight:'bold'}}>VERIFY CODE</Pressable>
        </View>
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
});
