import React from 'react';
import {View, StyleSheet, Text, TextInput, TouchableOpacity} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {createStackNavigator} from "@react-navigation/stack";
import ProductList from "./ProductList";
import UserLogin from "./UserLogin";
import SharedUIStyles from "../styles/SharedUIStyles";

const Index = ({navigation}) => {
    const toProduct=()=>{
        navigation.replace("Product")
    }
    const toLogout=()=>{
        navigation.replace("UserLogin")
    }
    return(
       <View style={SharedUIStyles.container}>
            <TouchableOpacity style={SharedUIStyles.loginBtn} onPress={toProduct}>
                <Text style={SharedUIStyles.loginText}>Books</Text>
            </TouchableOpacity>
            <TouchableOpacity style={SharedUIStyles.loginBtn} onPress={toLogout}>
                <Text style={SharedUIStyles.loginText}>Log out</Text>
            </TouchableOpacity>
        </View>
    );
};
export default Index;