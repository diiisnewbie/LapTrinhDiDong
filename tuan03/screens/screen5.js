import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // dùng icon con mắt
import { FontAwesome } from "@expo/vector-icons"; // fb
import { Zocial } from "@expo/vector-icons"; // Zalo
import { AntDesign } from "@expo/vector-icons"; // Google

export default function Screen5() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>LOGIN</Text>

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

      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>

      <Text style={styles.terms}>When you agree to terms and conditions</Text>

      <TouchableOpacity>
        <Text style={styles.forgot}>For got your password?</Text>
      </TouchableOpacity>

      <Text style={styles.orLogin}>Or login with</Text>

      <View style={styles.socialContainer}>
        <TouchableOpacity style={[styles.socialButton, { backgroundColor: "#3b5998" }]}>
          <FontAwesome name="facebook-f" size={20} color="white" />
        </TouchableOpacity>

        <TouchableOpacity style={[styles.socialButton, { backgroundColor: "#1DA1F2" }]}>
          <Zocial name="zocial" size={20} color="white" />
        </TouchableOpacity>

        <TouchableOpacity style={[styles.socialButton, { backgroundColor: "white", borderWidth: 1 }]}>
          <AntDesign name="google" size={20} color="red" />
        </TouchableOpacity>
      </View>
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
