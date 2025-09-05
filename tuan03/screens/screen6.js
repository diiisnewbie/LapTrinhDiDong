import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet ,CheckBox} from "react-native";
import { Ionicons } from "@expo/vector-icons"; // dùng icon con mắt
import { FontAwesome } from "@expo/vector-icons"; // fb
import { Zocial } from "@expo/vector-icons"; // Zalo
import { AntDesign } from "@expo/vector-icons"; // Google

export default function Screen6() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>REGISTER</Text>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Name" />
      </View>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Phone" />
      </View>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Email" />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Password"
        />
        <TouchableOpacity>
          <Ionicons
            size={22}
            color="black"
          />
        </TouchableOpacity>
      </View>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Birthday" />
      </View>
      <View style={{flexDirection:'row',justifyContent:'space-between',width:'100%'}}>
        <View style={{flex:1,flexDirection:'row'}}>
          <TouchableOpacity style={{borderWidth:2,width:20,height:20,borderRadius:30,marginEnd:10}}/>
          <Text>Male</Text>
        </View>
        <View style={{flex:1,flexDirection:'row'}}>
          <TouchableOpacity style={{borderWidth:2,width:20,height:20,borderRadius:30,marginEnd:10}}/>
          <Text>Female</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginText}>REGISTER</Text>
      </TouchableOpacity>

      <Text style={styles.terms}>When you agree to terms and conditions</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8F5E9", 
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 30,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#d3e5d3",
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    width: "100%",
  },
  input: {
    flex: 1,
  },
  loginButton: {
    backgroundColor: "#C14431",
    paddingVertical: 15,
    borderRadius: 5,
    width: "100%",
    alignItems: "center",
    marginBottom: 15,
    marginTop:20
  },
  loginText: {
    fontWeight: "bold",
    color: "white",
  },
  terms: {
    fontSize: 12,
    textAlign: "center",
    marginBottom: 5,
  },
  forgot: {
    color: "blue",
    marginBottom: 15,
  },
  orLogin: {
    marginBottom: 10,
    color: "gray",
  },
  socialContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  socialButton: {
    flex: 1,
    paddingVertical: 12,
    alignItems: "center",
    marginHorizontal: 5,
    borderRadius: 5,
  },
});
