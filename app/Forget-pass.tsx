import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Alert, ScrollView } from 'react-native';
import '../assets/css/main.css'

const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    // Handle form submission logic here
    if (!email) {
      Alert.alert('Please enter your registered email');
      return;
    }
    // Example of submitting the form (e.g., sending OTP)
    Alert.alert(`OTP has been sent to ${email}`);
  };

  const navigateToRegister = () => {
    // Handle navigation to Register screen (replace with navigation logic if needed)
    Alert.alert('Navigate to Register Screen');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.layoutLogin}>
        <View style={styles.loginContainer}>
          <Text style={styles.header}>Quên mật khẩu</Text>

          <TextInput
            style={styles.input}
            placeholder="Email của người dùng đã đăng ký"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            // required
          />

          <Button title="Gửi mã OTP" onPress={handleSubmit} />

          <TouchableOpacity onPress={navigateToRegister} style={styles.registerButton}>
            <Text style={styles.registerText}>Đăng ký</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#fff',
  },
  layoutLogin: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginContainer: {
    width: '100%',
    maxWidth: 400,
    padding: 20,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    elevation: 5,
    alignItems: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    padding: 10,
    marginBottom: 20,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
  },
  registerButton: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#007bff',
    borderRadius: 5,
    alignItems: 'center',
  },
  registerText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default ForgotPassword;
