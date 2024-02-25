import {useState} from "react";
import {StatusBar, Text, TextInput, TouchableOpacity, View} from "react-native";
import SharedUIStyles from "../styles/SharedUIStyles";

export default function  Register({navigation}){
    const [userName,setUserName]=useState('');
    const [password,setPassword]=useState('');
    const [confirmPassword,setConfirmPassword]=useState('');
    const [exception,setException]=useState({});
    const validatePassword = () => {

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
            <TouchableOpacity style={SharedUIStyles.loginBtn} onPress={validatePassword}>
                <Text style={SharedUIStyles.loginText}>LOGIN</Text>
            </TouchableOpacity>
        </View>
    );
}