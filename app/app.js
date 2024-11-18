import React from 'react';
import { Router } from 'expo-router';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './home'; // Đảm bảo đường dẫn đúng
import { AuthProvider } from './AuthContext'; // Đường dẫn đúng đến AuthContext
import Login from './login';
import RegistrationForm from './regester';


const Stack = createNativeStackNavigator();

const Main = () => (
  <AuthProvider>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  </AuthProvider>
);
<Router>
      {/* Your App Content */}
    </Router>
// Đổi tên hàm App thành MainApp hoặc tên khác để tránh xung đột
export default function MainApp() {
  return <Main />;
}
