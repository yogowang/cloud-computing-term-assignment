import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {StatusBar} from 'expo-status-bar';
import axios from "axios";
import SharedUIStyles from "../styles/SharedUIStyles";
//source:https://code.tutsplus.com/common-react-native-app-layouts-login-page--cms-27639t
//source:https://bobbyhadz.com/blog/react-axios-network-error-stack-trace
export default function Login({ navigation }){
    const [userName,setUserName]=useState('');
    const [password,setPassword]=useState('');
    const validateLogin=()=>{
            let loginIfo={
                userName,password
            }
            //Change the ip to the current ip
            axios.post("http://localhost:8080/login",loginIfo)
                .then((response)=>{
                    //500 means internal error
                    if(response.data&&response.loginstat!=="error"&&response.status!==500){
                        const userName=response.data.username
                        const isAdmin=response.data.isadmin
                        if(isAdmin===0){
                        navigation.replace("Index",{userName,isAdmin});
                        }
                        else if(isAdmin===1){
                            navigation.replace("AdminIndex",{userName,isAdmin});
                        }
                    }
                    else{
                        alert("The account doesn't exist!!")
                    }
                }).catch((ex)=>{
                    console.error(ex);
                }
            );
    }
    const toRegister=()=>{
        navigation.push("register");
    }
    return(
        <View style={SharedUIStyles.container}>
            <StatusBar style='auto'/>
            <View style={SharedUIStyles.inputView}>
                <TextInput
                style={SharedUIStyles.TextInput}
                placeholder='User Name'
                onChangeText={(userName)=>setUserName(userName)}
                />
            </View>
            <View style={SharedUIStyles.inputView}>
                <TextInput
                style={SharedUIStyles.TextInput}
                placeholder='Password'
                secureTextEntry={true}
                onChangeText={(password)=>setPassword(password)}
                />
            </View>
            <TouchableOpacity style={SharedUIStyles.loginBtn} onPress={validateLogin}>
            <Text style={SharedUIStyles.loginText}>LOGIN</Text>
            </TouchableOpacity>
            <TouchableOpacity style={SharedUIStyles.loginBtn} onPress={toRegister}>
                <Text style={SharedUIStyles.loginText}>REGISTER</Text>
            </TouchableOpacity>
        </View>
    );
}
