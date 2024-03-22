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
const ECommerceApp = ({navigation,route}) => {
    const {userName}=route.params
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://e5ynuit12m.execute-api.us-east-1.amazonaws.com/booklist/fetchAllBook')
            .then((response) => response.json())
            .then((data) => setProducts(data))
            .catch((error) => console.error(error));
    }, []);
    const [cart, setCart] = useState([]);
    const [isModalVisible, setModalVisible] = useState(false);
    const back=()=>{
        navigation.goBack()
    }
    const addToCart = (book) => {
        const number=1
        const bookId=book.bookId
        const bookName=book.bookName
        let pairing ={
            bookId,userName,number,bookName
        }
        axios.post("http://localhost:8080/addCart",pairing)
            .then((response)=>{
                //500 means internal error
                if(response.data!=="error"){
                    alert("add successful")
                }
                else{
                    alert("error occurred")
                }
            }).catch((ex)=> console.error(ex));
        //setCart([...cart, product]);
    };

    const removeFromCart = (productId) => {
        const updatedCart = cart.filter((item) => item.bookId !== productId);
        setCart(updatedCart);
    };

    const calculateTotal = () => {
        return cart.reduce((total, item) => total + item.price, 0).toFixed(2);
    };

    const renderProductItem = ({ item }) => (
        <View style={SharedUIStyles.productItemContainer}>
            <Text style={SharedUIStyles.productItemName}>{item.bookName}</Text>
            <Text style={SharedUIStyles.productItemPrice}>
                ${item.price.toFixed(2)}
            </Text>
            <TouchableOpacity
                style={SharedUIStyles.addButton}
                onPress={() => addToCart(item)}
            >
                <Text style={SharedUIStyles.addButtonText}>Add to Cart</Text>
                <Ionicons name="cart-outline" size={20} color="white" />
            </TouchableOpacity>
        </View>
    );

    const renderCartItem = ({ item }) => (
        <View style={SharedUIStyles.cartItemContainer}>
            <View>
                <Text style={SharedUIStyles.cartItemName}>{item.bookName}</Text>
                <Text style={SharedUIStyles.cartItemPrice}>
                    ${item.price.toFixed(2)}
                </Text>
            </View>
            <TouchableOpacity
                style={SharedUIStyles.removeButton}
                onPress={() => removeFromCart(item.bookId)}
            >
                <Ionicons name="trash-outline" size={20} color="white" />
            </TouchableOpacity>
        </View>
    );

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    const handleCheckout = () => {
        if (cart.length === 0) {
            toggleModal();
        } else {
            toggleModal();
        }
    };

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

export default ECommerceApp;