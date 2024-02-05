import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import UserLogin from './UserLogin'
const Stack = createStackNavigator();
const NavigationTabs=()=>{
    return(
<Stack.Navigator>
    <Stack.Screen name='userLogin' component={UserLogin}/>
</Stack.Navigator>)
};
export default NavigationTabs;