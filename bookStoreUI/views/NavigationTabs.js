import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import UserLogin from './UserLogin'
import Index from "./Index";
import UserRegister from"./UserRegister"
import ProductList from "./ProductList";
import UserInfo from "./UserInfo";
const Stack = createStackNavigator();
const NavigationTabs=()=>{
    return(
<Stack.Navigator
screenOptions={{headerShown: false}}>
    <Stack.Screen name='UserLogin' component={UserLogin}/>
    <Stack.Screen name='register' component={UserRegister}/>
    <Stack.Screen name='Index' component={Index}/>
    <Stack.Screen name='Product' component={ProductList}/>
    <Stack.Screen name='UserInfo' component={UserInfo}/>
</Stack.Navigator>)
};
export default NavigationTabs;