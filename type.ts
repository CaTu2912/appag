import { StackNavigationProp } from '@react-navigation/stack';

export type RootStackParamList = {
  Login: undefined; // Không truyền tham số
  ForgotPassword: undefined; // Không truyền tham số
};

export type NavigationProps = StackNavigationProp<RootStackParamList>;
