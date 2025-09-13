import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Switch,
} from 'react-native';

export default function PasswordGenerator() {
  const [length, setLength] = useState('8');
  const [includeLower, setIncludeLower] = useState(true);
  const [includeUpper, setIncludeUpper] = useState(false);
  const [includeNumber, setIncludeNumber] = useState(true);
  const [includeSymbol, setIncludeSymbol] = useState(false);
  const [password, setPassword] = useState('');

  const generatePassword = () => {
    let chars = '';
    let passwordChars = [];
    let lower = 'abcdefghijklmnopqrstuvwxyz';
    let upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let number = '0123456789';
    let symbolChar = '!@#$%^&*()_+[]{}|;:,.<>?';
    if (includeLower) {
      chars += lower;
      passwordChars.push(lower[Math.floor(Math.random() * lower.length)]);
    }
    if (includeUpper) {
      chars += upper;
      passwordChars.push(upper[Math.floor(Math.random() * upper.length)]);
    }
    if (includeNumber) {
      chars += number;
      passwordChars.push(number[Math.floor(Math.random() * number.length)]);
    }
    if (includeSymbol) {
      chars += symbolChar;
      passwordChars.push(
        symbolChar[Math.floor(Math.random() * symbolChar.length)]
      );
    }
    if (chars.length === 0) {
      setPassword('Select at least 1 option');
      return;
    }

    for (let i = passwordChars.length; i < parseInt(length || '0'); i++) {
      passwordChars.push(chars.charAt(Math.floor(Math.random() * chars.length)));
    }

    for (let i = passwordChars.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [passwordChars[i], passwordChars[j]] = [
        passwordChars[j],
        passwordChars[i],
      ];
    }

    setPassword(passwordChars.join(""))
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>PASSWORD GENERATOR</Text>

      <View style={styles.passwordBox}>
        <Text style={styles.passwordText}>{password}</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Password length</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={length}
          onChangeText={setLength}
        />
      </View>

      {/* Options */}
      <View style={styles.row}>
        <Text style={styles.label}>Include lower case letters</Text>
        <Switch value={includeLower} onValueChange={setIncludeLower} />
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Include upper case letters</Text>
        <Switch value={includeUpper} onValueChange={setIncludeUpper} />
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Include number</Text>
        <Switch value={includeNumber} onValueChange={setIncludeNumber} />
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Include special symbol</Text>
        <Switch value={includeSymbol} onValueChange={setIncludeSymbol} />
      </View>

      {/* Generate Button */}
      <TouchableOpacity style={styles.button} onPress={generatePassword}>
        <Text style={styles.buttonText}>GENERATE PASSWORD</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1c1c60',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20,
  },
  passwordBox: {
    backgroundColor: '#0f0f3d',
    padding: 15,
    borderRadius: 6,
    marginBottom: 20,
  },
  passwordText: {
    color: '#fff',
    fontSize: 16,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    justifyContent: 'space-between',
  },
  label: {
    color: '#fff',
    fontSize: 14,
    flex: 1,
  },
  input: {
    width: 60,
    height: 35,
    backgroundColor: '#fff',
    borderRadius: 4,
    paddingHorizontal: 8,
    textAlign: 'center',
  },
  button: {
    marginTop: 20,
    backgroundColor: '#000',
    paddingVertical: 12,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#f0f',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
