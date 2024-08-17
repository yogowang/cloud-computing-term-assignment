import {useState} from "react";
import {StatusBar, Text, TextInput, TouchableOpacity, View} from "react-native";
import SharedUIStyles from "../styles/SharedUIStyles";
import axios from "axios";
import {CheckBox} from "react-native-web";
//Source:https://reactnative.dev/docs/checkbox
const  AddBook=({navigation})=>{
    const [tempBookId,setTempBookId]=useState('');
    const [bookName,setBookName]=useState('');
    const [tempPrice, setTempPrice] = useState('');
    const validateBookInfo = () => {
        if(tempBookId===''){
            alert("book id required")
        }
        else if (bookName===''){
            alert("book name required")
        }
        else if(tempPrice===''){
            alert("price required")
        }
        else {
            const bookId=parseInt(tempBookId);
            const price =parseFloat(tempPrice)
            let bookInfo={
                bookId,bookName,price
            }
            //Change the ip to the current ip
            axios.post("http://localhost:8080/addBook",bookInfo)
                .then((response)=>{
                    if(response.data!=="error"){
                        alert("Add successful")
                        navigation.goBack();
                    }
                    else{
                        alert("Duplicate book")
                    }
                }).catch((ex)=>{
                    console.error(ex);
                }
            );
        }
    }
    const back=()=>{
        navigation.goBack()
    }
    return (
        <View style={SharedUIStyles.container}>
            <StatusBar style='auto'/>
            <View style={SharedUIStyles.inputView}>
                <TextInput
                    style={SharedUIStyles.TextInput}
                    placeholder='Book Id'
                    onChangeText={(tempBookId)=>setTempBookId(tempBookId)}
                />
            </View>
            <View style={SharedUIStyles.inputView}>
                <TextInput
                    style={SharedUIStyles.TextInput}
                    placeholder='Book Name'
                    onChangeText={(bookName)=>setBookName(bookName)}
                />
            </View>
            <View style={SharedUIStyles.inputView}>
                <TextInput
                    style={SharedUIStyles.TextInput}
                    placeholder='Price'
                    onChangeText={(tempPrice)=>setTempPrice(tempPrice)}
                />
            </View>
            <TouchableOpacity style={SharedUIStyles.loginBtn} onPress={validateBookInfo}>
                <Text style={SharedUIStyles.loginText}>ADD</Text>
            </TouchableOpacity>
            <TouchableOpacity style={SharedUIStyles.loginBtn} onPress={back}>
                <Text style={SharedUIStyles.loginText}>BACK</Text>
            </TouchableOpacity>
        </View>
    );
}
export default AddBook;