import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function Login() {

  return (
    <View style={styles.container}>
      <View style={{}}>
        <Text style={styles.title}>LOGIN</Text>
      </View>

      <View style={styles.inputContainer}>
        <Icon name="user" size={20} color="#000" style={styles.icon} />
        <TextInput placeholder="Name" style={styles.input} />
      </View>

      <View style={styles.inputContainer}>
        <Icon name="lock" size={20} color="#000" style={styles.icon} />
        <TextInput
          placeholder="Password"
          style={styles.input}
        />
        <TouchableOpacity
        >
          <Ionicons
            size={20}
            color="#000"
            style={styles.iconRight}
          />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>LOGIN</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.forgotText}>Forgot your password?</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "gold",
    justifyContent: "center",
    padding:10
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 40,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ddd",
    backgroundColor: "rgba(255,255,255,0.3)",
    borderRadius: 4,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  icon: {
    marginRight: 10,
  },
  iconRight: {
    marginLeft: 10,
  },
  input: {
    flex: 1,
    height: 40,
  },
  button: {
    backgroundColor: "#000",
    paddingVertical: 12,
    borderRadius: 4,
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },
  forgotText: {
    marginTop: 20,
    textAlign: "center",
    color: "#000",
    textDecorationLine: "underline",
  },
});
