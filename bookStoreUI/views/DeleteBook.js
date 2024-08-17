//Source:https://www.geeksforgeeks.org/create-an-e-commerce-app-using-react-native/
//Source:https://www.youtube.com/watch?v=s8oQOZsW9Hw
import React, {useEffect, useState} from "react";
import {
    View,
    Text,
    FlatList,
    TouchableOpacity,
    Button,
    Modal,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import SharedUIStyles from "../styles/SharedUIStyles";
import axios from "axios";
const DeleteBook = ({navigation}) => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://e5ynuit12m.execute-api.us-east-1.amazonaws.com/books/fetchAllBook')
            .then((response) => response.json())
            .then((data) => setProducts(data))
            .catch((error) => console.error(error));
    }, []);
    const back=()=>{
        navigation.goBack()
    }
    const RemoveBook = (bookId) => {
        axios.post(`http://localhost:8080/removeBook/${bookId}`)
            .then((response)=>{
                //500 means internal error
                if(response.data!=="error"){
                    alert("remove successful")
                }
                else{
                    alert("error occurred")
                }
            }).catch((ex)=> console.error(ex));
        //setCart([...cart, product]);
    };



    const renderProductItem = ({ item }) => (
        <View style={SharedUIStyles.productItemContainer}>
            <Text style={SharedUIStyles.productItemName}>{item.bookName}</Text>
            <Text style={SharedUIStyles.productItemPrice}>
                ${item.price.toFixed(2)}
            </Text>
            <TouchableOpacity
                style={SharedUIStyles.addButton}
                onPress={() => RemoveBook(item.bookId)}
            >
                <Text style={SharedUIStyles.addButtonText}>delete</Text>
                <Ionicons name="cart-outline" size={20} color="white" />
            </TouchableOpacity>
        </View>
    );


    return (
        <View style={SharedUIStyles.container}>
            <FlatList
                data={products}
                keyExtractor={(item) => item.bookId}
                renderItem={renderProductItem}
            />
            <TouchableOpacity style={SharedUIStyles.loginBtn} onPress={back}>
                <Text style={SharedUIStyles.loginText}>back</Text>
            </TouchableOpacity>
        </View>
    );
};

export default DeleteBook;