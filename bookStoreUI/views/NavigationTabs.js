import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import UserLogin from './UserLogin'
import Index from "./Index";
const Stack = createStackNavigator();
const NavigationTabs=()=>{
    return(
<Stack.Navigator>
    <Stack.Screen name='userLogin' component={UserLogin}/>
    <Stack.Screen name='Index' component={Index}/>
</Stack.Navigator>)
};
export default NavigationTabs;