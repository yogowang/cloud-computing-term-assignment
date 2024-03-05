import {useState} from "react";
import {StatusBar, Text, TextInput, TouchableOpacity, View} from "react-native";
import SharedUIStyles from "../styles/SharedUIStyles";
import axios from "axios";

export default function  Register({navigation}){
    const [userName,setUserName]=useState('');
    const [password,setPassword]=useState('');
    const [confirmPassword,setConfirmPassword]=useState('');
    const [exception,setException]=useState({});
    const validateRegister = () => {
        if(userName===''){
            alert("user name required")
        }
        else if (password===''||confirmPassword===''){
            alert("password required")
        }
        else if(password!==confirmPassword){
            alert("Passwords don't match")
        }
        else {
            alert("Register successful")
            let registerInfo={
                userName,password
            }
            //Change the ip to the current ip
            axios.post("http://localhost:8080/register",registerInfo)
                .then((response)=>{
                    if(response.data!=="error"){
                        navigation.replace("userLogin");
                    }
                    else{
                        setException((ex)=>{
                            return {
                                ex,
                                authException: "The duplicate username!!"
                            };
                        });
                    }
                }).catch((ex)=>{
                    setException("error when register");
                    console.error(ex);
                }
            );
        }
    }
    return (
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
            <View style={SharedUIStyles.inputView}>
                <TextInput
                    style={SharedUIStyles.TextInput}
                    placeholder='Confirm Password'
                    secureTextEntry={true}
                    onChangeText={(confirmPassword)=>setConfirmPassword(confirmPassword)}
                />
            </View>
            <TouchableOpacity style={SharedUIStyles.loginBtn} onPress={validateRegister}>
                <Text style={SharedUIStyles.loginText}>LOGIN</Text>
            </TouchableOpacity>
        </View>
    );
}