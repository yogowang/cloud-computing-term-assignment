import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {StatusBar} from 'expo-status-bar';
import axios from "axios";
import {StackActions as navigation} from "@react-navigation/routers/src";
//source:https://code.tutsplus.com/common-react-native-app-layouts-login-page--cms-27639t
export default function Login(){
    const [userName,setUserName]=useState('');
    const [password,setPassword]=useState('');
    const [exception,setException]=useState({});
    const validateLogin=()=>{
        if(Object.keys(exception).length===0){
            let loginIfo={
                userName,password
            }
            axios.post("localhost:8080/login",loginIfo)
                .then((response)=>{
                    if(response.data!=="error"){
                        navigation.replace("Index");
                    }
                    else{
                        setException((ex)=>{
                            return {
                                ...ex,
                                authException: "The account doesn't exist!!"
                            };
                        });
                    }
                });
        }
    }
    return(
        <View style={styles.container}>
            <StatusBar style='auto'/>
            <View style={styles.inputView}>
                <TextInput
                style={styles.TextInput}
                placeholder='User Name'
                onChangeText={(userName)=>setUserName(userName)}
                />
            </View>
            <View style={styles.inputView}>
                <TextInput
                style={styles.TextInput}
                placeholder='Password'
                secureTextEntry={true}
                onChangeText={(password)=>setPassword(password)}
                />
            </View>
            <TouchableOpacity style={styles.loginBtn}>
            <Text style={styles.loginText}>LOGIN</Text>
            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#728FCE",
      alignItems: "center",
      justifyContent: "center",
    },
    inputView: {
      backgroundColor: "#98ADC7",
      borderRadius: 30,
      width: "70%",
      height: 45,
      marginBottom: 20,
      alignItems: "center",
    },
    TextInput: {
      height: 50,
      flex: 1,
      padding: 10,
      marginLeft: 20,
    },
    loginBtn: {
      width: "80%",
      borderRadius: 25,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 40,
      backgroundColor: "#98ADC7",
    },
    loginText: {
        color:"black"
    }
});