import { Text, View, StyleSheet, Image ,Pressable} from 'react-native';

export const Product=({url,title,description}) =>{
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: url }}/>
      <View style={styles.title}>
        <Text style={{fontWeight:'bold'}}>{title}</Text>
        <Text>{description}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor:'white',
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
});
