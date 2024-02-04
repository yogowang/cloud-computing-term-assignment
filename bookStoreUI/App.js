import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import UserLogin from './views/UserLogin'
import { NavigationContainer } from "@react-navigation/native";
export default function App() {
  return (
<NavigationContainer>
  <UserLogin/>
</NavigationContainer>
  )
}

