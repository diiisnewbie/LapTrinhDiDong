import { Text, View, StyleSheet, Image ,FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon1 from 'react-native-vector-icons/FontAwesome';


export default function Footer() {
  return (
    <View style={styles.container}>
      <Icon name="menu" size={30} color="black" />
      <Image source={require("../assets/home.png")}/>
      <Image source={require("../assets/back.png")}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection:'row',
    backgroundColor:'#1BA9FF',
    padding:8
  },
});
