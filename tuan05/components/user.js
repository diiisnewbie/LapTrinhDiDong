import { Text, View, StyleSheet, Image ,Pressable} from 'react-native';

export const User=({name,email}) =>{
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={{fontWeight:'bold'}}>{name}</Text>
        <Text>{email}</Text>
      </View>
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
  title:{
    padding:10
  }
});
