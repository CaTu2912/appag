import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import '../assets/css/main.css'

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    organization: '',
    phone: '',
    nationality: 'Vietnam',
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
    agreeTerms: false,
    subscribe: false,
    reviewer: false,
  });

  const handleChange = (name: string, value: string | boolean) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.header}>Đăng Ký</Text>
        
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Tên đệm và tên <Text style={styles.required}>*</Text></Text>
          <TextInput 
            style={styles.input}
            value={formData.firstName}
            onChangeText={(text) => handleChange('firstName', text)}
            placeholder="Enter text"
            />
            <Button title="Submit" onPress={handleSubmit} />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Họ <Text style={styles.required}>*</Text></Text>
          <TextInput 
            style={styles.input}
            value={formData.lastName}
            onChangeText={(text) => handleChange('lastName', text)}
            placeholder='Enter text'
          />
          <Button title="Submit" onPress={handleSubmit} />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Cơ quan <Text style={styles.required}>*</Text></Text>
          <TextInput 
            style={styles.input}
            value={formData.organization}
            onChangeText={(text) => handleChange('organization', text)}
            placeholder="Enter text"
          />
          <Button title="Submit" onPress={handleSubmit} />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Điện thoại</Text>
          <TextInput 
            style={styles.input}
            value={formData.phone}
            onChangeText={(text) => handleChange('phone', text)}
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Quốc tịch <Text style={styles.required}>*</Text></Text>
          <TextInput 
            style={styles.input}
            value={formData.nationality}
            onChangeText={(text) => handleChange('nationality', text)}
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Email <Text style={styles.required}>*</Text></Text>
          <TextInput 
            style={styles.input}
            value={formData.email}
            onChangeText={(text) => handleChange('email', text)}
            placeholder="Enter text"
            />
            <Button title="Submit" onPress={handleSubmit} />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Tên tài khoản <Text style={styles.required}>*</Text></Text>
          <TextInput 
            style={styles.input}
            value={formData.username}
            onChangeText={(text) => handleChange('username', text)}
            placeholder="Enter text"
          />
            <Button title="Submit" onPress={handleSubmit} />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Mật khẩu <Text style={styles.required}>*</Text></Text>
          <TextInput 
            style={styles.input}
            value={formData.password}
            onChangeText={(text) => handleChange('password', text)}
            secureTextEntry
            placeholder="Enter text"
            />
            <Button title="Submit" onPress={handleSubmit} />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Nhập lại mật khẩu <Text style={styles.required}>*</Text></Text>
          <TextInput 
            style={styles.input}
            value={formData.confirmPassword}
            onChangeText={(text) => handleChange('confirmPassword', text)}
            secureTextEntry
            placeholder="Enter text"
            />
            <Button title="Submit" onPress={handleSubmit} />
        </View>

        <View style={styles.checkboxGroup}>
          <CheckBox 
            value={formData.agreeTerms}
            onValueChange={(newValue) => handleChange('agreeTerms', newValue)}
          />
          <Text style={styles.checkboxLabel}>Tôi đồng ý để dữ liệu của tôi được thu thập và lưu trữ theo cam kết bảo mật.</Text>
        </View>

        <View style={styles.checkboxGroup}>
          <CheckBox 
            value={formData.subscribe}
            onValueChange={(newValue) => handleChange('subscribe', newValue)}
          />
          <Text style={styles.checkboxLabel}>Có, tôi muốn được thông báo về các ấn phẩm và thông báo mới.</Text>
        </View>

        <View style={styles.checkboxGroup}>
          <CheckBox 
            value={formData.reviewer}
            onValueChange={(newValue) => handleChange('reviewer', newValue)}
          />
          <Text style={styles.checkboxLabel}>Ông/Bà có sẵn sàng để làm phản biện cho tạp chí này? Có, yêu cầu vai trò Người phản biện.</Text>
        </View>

        <Button title="Đăng Ký" onPress={handleSubmit} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  formContainer: {
    flex: 1,
    marginTop: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  inputGroup: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  required: {
    color: 'red',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    fontSize: 16,
  },
  checkboxGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  checkboxLabel: {
    fontSize: 16,
    marginLeft: 10,
  },
});

export default RegistrationForm;
