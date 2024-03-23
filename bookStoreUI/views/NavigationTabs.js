import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import UserLogin from './UserLogin'
import Index from "./Index";
import UserRegister from"./UserRegister"
import ProductList from "./ProductList";
import UserInfo from "./UserInfo";
import Cart from "./Cart";
import AdminIndex from "./AdminIndex";
import AddBook from "./AddBook";
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
    <Stack.Screen name='Cart' component={Cart}/>
    <Stack.Screen name='AdminIndex' component={AdminIndex}/>
    <Stack.Screen name='AddBook' component={AddBook}/>
</Stack.Navigator>)
};
export default NavigationTabs;