import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image
} from "react-native";
import { Ionicons } from "@expo/vector-icons"; 
import { FontAwesome } from "@expo/vector-icons";

export default function Screen8() {

  return (
    <View style={styles.container}>
      <Image source={require('../assets/eye.png')}
          style={{width:140,height:140,marginBottom:40}}
        >
        </Image>

      <View style={styles.inputContainer}>
        <FontAwesome name="user" size={20} color="black" style={{ marginRight: 8 }} />
        <TextInput style={styles.input} placeholder="Please input username" />
      </View>

      <View style={styles.inputContainer}>
        <FontAwesome name="lock" size={20} color="black" style={{ marginRight: 8 }} />
        <TextInput
          style={styles.input}
          placeholder="Please input password"
        />
        <TouchableOpacity>
          <Ionicons
            size={22}
            color="black"
          />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>

      <View style={{flexDirection:'row',justifyContent:'space-between',width:'100%'}}>
        <Text>Register</Text>
        <Text>Forgot Password</Text>
      </View>
      <View style={styles.divider}>
        <View style={styles.line} />
        <Text style={styles.text}>Other Login Methods</Text>
        <View style={styles.line} />
      </View>
      <View style={styles.social}>
        <Image source={require('../assets/addUser.png')}
          style={{width:70}}
        >
        </Image>
        <Image source={require('../assets/network.png')}
          style={{width:70}}
        >
        </Image>
        <Image source={require('../assets/facebook.png')}
          style={{width:70}}
        >
        </Image>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "white",
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    borderRadius: 3,
    padding: 10,
    marginBottom: 20,
    width: "100%",
  },
  input: {
    flex: 1,
    borderBottomWidth:1,
    opacity:0.3
  },
  loginButton: {
    backgroundColor: "blue",
    paddingVertical: 15,
    borderRadius: 10,
    width: "100%",
    alignItems: "center",
    marginBottom: 20,
  },
  loginText: {
    fontWeight: "bold",
    color: "white",
  },
  divider: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
    width:'100%'
  },
  line: {
    flex: 1,
    height: 1,
    marginHorizontal: 5,
    borderWidth:1,
    borderColor: "#8A2BE2",
  },
  text: {
    fontSize: 14,
    fontWeight: "500",
    color: "black",
  },
  social:{
    width:'100%',
    flexDirection:'row',
    justifyContent:'space-between'
  },
});
