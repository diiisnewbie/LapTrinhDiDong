import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons"; 
import { FontAwesome } from "@expo/vector-icons";

export default function Screen7() {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>LOGIN</Text>

      <View style={styles.inputContainer}>
        <FontAwesome name="user" size={20} color="black" style={{ marginRight: 8 }} />
        <TextInput style={styles.input} placeholder="Name" />
      </View>

      <View style={styles.inputContainer}>
        <FontAwesome name="lock" size={20} color="black" style={{ marginRight: 8 }} />
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

      <TouchableOpacity>
        <Text style={styles.createAccount}>CREATE ACCOUNT</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFD700",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    alignSelf: "flex-start",
    marginBottom: 30,
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
  },
  loginButton: {
    backgroundColor: "black",
    paddingVertical: 15,
    borderRadius: 3,
    width: "100%",
    alignItems: "center",
    marginBottom: 20,
  },
  loginText: {
    fontWeight: "bold",
    color: "white",
  },
  createAccount: {
    fontWeight: "bold",
    color: "black",
  },
});
