import React from 'react';
import {View,  Text,  TouchableOpacity} from "react-native";
import SharedUIStyles from "../styles/SharedUIStyles";
//source:https://reactnavigation.org/docs/params/
const AdminIndex = ({navigation,route}) => {
    const {userName,isadmin}=route.params
    const toProduct=()=>{
        navigation.push("Product",{userName})
    }
    const toLogout=()=>{
        navigation.replace("UserLogin")
    }
    const toInfo=()=>{
        navigation.push("UserInfo",{userName,isadmin})
    }
    const toAdd=()=>{
        navigation.push("AddBook")
    }
    return(
        <View style={SharedUIStyles.container}>
            <TouchableOpacity style={SharedUIStyles.loginBtn} onPress={toProduct}>
                <Text style={SharedUIStyles.loginText}>Delete Books</Text>
            </TouchableOpacity>
            <TouchableOpacity style={SharedUIStyles.loginBtn} onPress={toInfo}>
                <Text style={SharedUIStyles.loginText}>User Info</Text>
            </TouchableOpacity>
            <TouchableOpacity style={SharedUIStyles.loginBtn} onPress={toAdd}>
                <Text style={SharedUIStyles.loginText}>Add books</Text>
            </TouchableOpacity>
            <TouchableOpacity style={SharedUIStyles.loginBtn} onPress={toLogout}>
                <Text style={SharedUIStyles.loginText}>Log out</Text>
            </TouchableOpacity>
        </View>
    );
};
export default AdminIndex;