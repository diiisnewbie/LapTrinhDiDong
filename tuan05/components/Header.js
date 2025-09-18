import { Text, View, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


export default function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon name="arrow-back" size={30} color="white" />
        <Text style={{color:'white',fontSize:18,fontWeight:'bold'}}>Chat</Text>
        <Image style={styles.cart} source={require("../assets/bi_cart-check.png")}/>
      </View>
      <View style={styles.underHeader}>
        <Text style={{fontWeight:'bold'}}>Bạn có thắc mắc với sản phẩm vừa xem. Đừng ngại chat với shop</Text>
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
  }
});
