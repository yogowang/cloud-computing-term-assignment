import React from 'react';
import {View,  Text,  TouchableOpacity} from "react-native";
import SharedUIStyles from "../styles/SharedUIStyles";
//source:https://reactnavigation.org/docs/params/
const Index = ({navigation,route}) => {
    const {userName,isadmin}=route.params
    const toProduct=()=>{
        navigation.replace("Product",{userName})
    }
    const toLogout=()=>{
        navigation.replace("UserLogin")
    }
    const toInfo=()=>{
        navigation.replace("UserInfo",{userName,isadmin})
    }
    const toCart=()=>{
        navigation.replace("Cart",{userName})
    }
    return(
       <View style={SharedUIStyles.container}>
            <TouchableOpacity style={SharedUIStyles.loginBtn} onPress={toProduct}>
                <Text style={SharedUIStyles.loginText}>Books</Text>
            </TouchableOpacity>
           <TouchableOpacity style={SharedUIStyles.loginBtn} onPress={toInfo}>
               <Text style={SharedUIStyles.loginText}>User Info</Text>
           </TouchableOpacity>
           <TouchableOpacity style={SharedUIStyles.loginBtn} onPress={toCart}>
               <Text style={SharedUIStyles.loginText}>Cart</Text>
           </TouchableOpacity>
            <TouchableOpacity style={SharedUIStyles.loginBtn} onPress={toLogout}>
                <Text style={SharedUIStyles.loginText}>Log out</Text>
            </TouchableOpacity>
        </View>
    );
};
export default Index;