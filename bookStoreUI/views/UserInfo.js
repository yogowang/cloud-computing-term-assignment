import React from 'react';
import {View,  Text,  TouchableOpacity} from "react-native";
import SharedUIStyles from "../styles/SharedUIStyles";
const UserInfo=({navigation,route})=>{
    const {userName}=route.params
    const back=()=>{
        navigation.replace("Index",userName)
    }
    return(
       <View style={SharedUIStyles.container}>
           <Text style={SharedUIStyles.loginText}>your user is {userName}</Text>
       <TouchableOpacity style={SharedUIStyles.loginBtn} onPress={back}>
           <Text style={SharedUIStyles.loginText}>back</Text>
       </TouchableOpacity>
     </View>
    )
}
export default UserInfo;