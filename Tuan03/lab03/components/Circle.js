import { Text, SafeAreaView, StyleSheet, View } from 'react-native';

// You can import supported modules from npm
import { Card } from 'react-native-paper';


export default function Circle() {
  return (
    <View style={styles.container}>
        <View style={{width:140,height:140,borderColor:'#000000',borderRadius:70,borderWidth:15}}>
            
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems:'center'
  },
});
