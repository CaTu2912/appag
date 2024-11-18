import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import {
  View,
  Text,
  TextInput,
  Button,
  Alert,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { RootStackParamList } from '../type';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from './AuthContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface User {
  username: string;
  password: string;
  email: string;
}

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [userData, setUserData] = useState<User[]>([]);
  const { setIsLoggedIn, setEmail } = useContext(AuthContext);
  const navigation = useNavigation();

  // Fetch user data on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/users');
        console.log('User data:', response.data);
        setUserData(response.data);
      } catch (err) {
        console.error('Error fetching user data:', err);
        setError('Không thể tải dữ liệu người dùng. Vui lòng thử lại sau.');
      }
    };

    fetchData();
  }, []);

  // Handle login submission
  const handleSubmit = async () => {
    if (!username || !password) {
      setError('Vui lòng nhập đầy đủ thông tin.');
      return;
    }

    const user = userData.find(
      (user) => user.username === username || user.email === username
    );

    if (user && user.password === password) {
      Alert.alert('Đăng nhập thành công!');
      setIsLoggedIn(true);
      setEmail(user.email);

      try {
        await AsyncStorage.setItem('isLoggedIn', 'true');
        await AsyncStorage.setItem('email', user.email);
      } catch (err) {
        console.error('Lỗi khi lưu thông tin đăng nhập:', err);
      }
    } else {
      setError('Tên đăng nhập hoặc mật khẩu không đúng.');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.loginContainer}>
        <Text style={styles.title}>Đăng Nhập</Text>
        {error && <Text style={styles.errorText}>{error}</Text>}
        <View style={styles.inputGroup}>
          <Text>Tên tài khoản / Địa chỉ email</Text>
          <TextInput
            style={styles.input}
            value={username}
            onChangeText={setUsername}
            placeholder="Nhập tên tài khoản hoặc email"
            autoCapitalize="none"
          />
        </View>
        <View style={styles.inputGroup}>
          <Text>Mật khẩu</Text>
          <TextInput
            style={styles.input}
            value={password}
            onChangeText={setPassword}
            placeholder="Nhập mật khẩu"
            secureTextEntry
          />
        </View>
        <View style={styles.options}>
          <TouchableOpacity>
            <Text>Giữ đăng nhập</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('forgotPassword')}>
            <Text style={styles.forgotPassword}>Quên mật khẩu?</Text>
          </TouchableOpacity>
        </View>
        <Button title="Đăng Nhập" onPress={handleSubmit} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  loginContainer: {
    width: '100%',
    maxWidth: 400,
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  inputGroup: {
    marginBottom: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    borderRadius: 5,
  },
  options: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  forgotPassword: {
    color: 'blue',
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
    marginBottom: 10,
  },
});

export default Login;
