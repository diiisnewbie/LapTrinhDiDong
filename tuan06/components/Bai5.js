import * as React from "react";
import { Text, View, Switch, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();

// Home Screen
function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to Home Screen</Text>
    </View>
  );
}

// Profile Screen
function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>👤 User Profile</Text>
      <Text>Name: Tran Nhat Duy</Text>
      <Text>Email: duytnd@example.com</Text>
    </View>
  );
}

// Settings Screen
function SettingsScreen() {
  const [isEnabled, setIsEnabled] = React.useState(false);
  const toggleSwitch = () => setIsEnabled((prev) => !prev);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>⚙️ Settings</Text>
      <View style={styles.switchRow}>
        <Text>Enable Notifications</Text>
        <Switch value={isEnabled} onValueChange={toggleSwitch} />
      </View>
    </View>
  );
}

export default function Bai5() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Profile" component={ProfileScreen} />
        <Drawer.Screen name="Settings" component={SettingsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
  text: { fontSize: 18, marginBottom: 20, fontWeight: "bold" },
  switchRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    gap: 10,
  },
});
