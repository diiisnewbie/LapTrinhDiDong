import { Text, View, StyleSheet, Image ,Pressable} from 'react-native';

export const Item=({url,title,nameshop}) =>{
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: url }}/>
      <View style={styles.title}>
        <Text style={{fontWeight:'bold'}}>{title}</Text>
        <Text style={{color:'red'}}>{nameshop}</Text>
      </View>
      <Pressable style={styles.button}>
        <Text style={{color:'white',fontSize:15,fontWeight:'bold'}}>Chat</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor:'white',
    flexDirection:'row',
    justifyContent:'space-between',
    padding:5
  },
  image:{
    width:74,
    height:74
  },
  title:{
    justifyContent:'space-between',
    height:'100%'
  },
  button:{
    backgroundColor:'red',
    padding:8
  }
});
