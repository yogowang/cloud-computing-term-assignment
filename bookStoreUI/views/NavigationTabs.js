import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import UserLogin from './UserLogin'
import Index from "./Index";
import UserRegister from"./UserRegister"
import ProductList from "./ProductList";
const Stack = createStackNavigator();
const NavigationTabs=()=>{
    return(
<Stack.Navigator
screenOptions={{headerShown: false}}>
    <Stack.Screen name='UserLogin' component={UserLogin}/>
    <Stack.Screen name='register' component={UserRegister}/>
    <Stack.Screen name='Index' component={Index}/>
    <Stack.Screen name='Product' component={ProductList}/>
</Stack.Navigator>)
};
export default NavigationTabs;