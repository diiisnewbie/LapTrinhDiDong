import { Text, View, StyleSheet, Image ,TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";


export default function Header1() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon name="arrow-back" size={30} color="white" />
        <View style={styles.textSearch}>
          <Image style={{width:24,height:24,position:"absolute", alignSelf:'center'}} source={require("../assets/whh_magnifier.png")}/>
          <TextInput style={styles.search} placeholder="Dây cáp USB"/>
        </View>
        <Image style={styles.cart} source={require("../assets/bi_cart-check.png")}/>
        <MaterialIcons name="more-horiz" size={28} color="white" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  header:{
    flexDirection:'row',
    justifyContent:'space-between',
    width:'100%',
    backgroundColor:'#1BA9FF',
    padding:8
  },
  cart:{
    height:24,
    width:24
  },
  underHeader:{
    padding:8,
  },
  search:{
    backgroundColor:'white',
    width:'100%',
    paddingLeft:30
  },
  textSearch:{
    flexDirection:'row',

  }
});
