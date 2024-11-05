import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const Login = ({ onNavigateToRecovery, onNavigateToRegistration }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
      />
      <View style={styles.buttonContainer}>
        <Button title="Login" onPress={() => alert('Login pressed!')} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Forgot Password?" onPress={onNavigateToRecovery} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Register" onPress={onNavigateToRegistration} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: '100%',
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  buttonContainer: {
    marginBottom: 10, 
    width: '100%', 
  },
});

export default Login;