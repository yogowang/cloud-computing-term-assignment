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
const ECommerceApp = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://100.64.57.27:8080/fetchAllBook')
            .then((response) => response.json())
            .then((data) => setProducts(data))
            .catch((error) => console.error(error));
    }, []);
    const [cart, setCart] = useState([]);
    const [isModalVisible, setModalVisible] = useState(false);

    const addToCart = (product) => {
        setCart([...cart, product]);
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
            <Text style={SharedUIStyles.heading}>E-Commerce App</Text>

            <FlatList
                data={products}
                keyExtractor={(item) => item.bookId}
                renderItem={renderProductItem}
            />

            <View style={SharedUIStyles.cartContainer}>
                <Text style={SharedUIStyles.cartHeading}>Shopping Cart</Text>
                {cart.length === 0 ? (
                    <Text style={SharedUIStyles.emptyCartMessage}>
                        Add at least one product to the cart.
                    </Text>
                ) : (
                    <FlatList
                        data={cart}
                        keyExtractor={(item) => item.bookId}
                        renderItem={renderCartItem}
                    />
                )}
                <View style={SharedUIStyles.totalContainer}>
                    <Text style={SharedUIStyles.totalText}>
                        Total: ${calculateTotal()}
                    </Text>
                    <TouchableOpacity
                        style={SharedUIStyles.checkoutButton}
                        onPress={handleCheckout}
                    >
                        <Text style={SharedUIStyles.checkoutButtonText}>
                            Proceed to Checkout
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>

            <Modal
                animationType="slide"
                transparent={true}
                visible={isModalVisible}
                onRequestClose={toggleModal}
            >
                <View style={SharedUIStyles.modalContainer}>
                    <View style={SharedUIStyles.modalContent}>
                        <Text style={SharedUIStyles.modalText}>
                            {cart.length === 0
                                ? "Add at least one product to the cart before proceeding."
                                : "Congratulations! Your order is placed successfully."}
                        </Text>
                        <Button title="Close" onPress={toggleModal} />
                    </View>
                </View>
            </Modal>
        </View>
    );
};

export default ECommerceApp;