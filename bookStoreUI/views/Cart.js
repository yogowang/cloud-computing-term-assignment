import {FlatList, Text, TouchableOpacity, View} from "react-native";
import SharedUIStyles from "../styles/SharedUIStyles";
import {useEffect, useState} from "react";
//Source:https://blog.expo.dev/react-native-flatlist-made-easy-20fca51e0327
const Cart=({navigation,route})=>{
    const {userName}=route.params
    const [products, setProducts] = useState([]);
    const link='http://localhost:8080/getCart/'+userName
    useEffect(() => {
        fetch(link)
            .then((response) => response.json())
            .then((data) => setProducts(data))
            .catch((error) => console.error(error));
    }, []);
    const back=()=>{
        navigation.goBack()
    }
    const renderProductItem = ({ item }) => (
        <View style={SharedUIStyles.productItemContainer}>
            <Text style={SharedUIStyles.productItemName}>{item.bookName}</Text>
            <Text style={SharedUIStyles.productItemName}>Number: {item.number}</Text>
        </View>
    );
    return(
        <View style={SharedUIStyles.container}>
            <Text style={SharedUIStyles.loginText}>Here is what you have bought</Text>
            <FlatList
                data={products}
                keyExtractor={(item) => item.bookId}
                renderItem={renderProductItem}
            />
            <TouchableOpacity style={SharedUIStyles.loginBtn} onPress={back}>
                <Text style={SharedUIStyles.loginText}>back</Text>
            </TouchableOpacity>
        </View>
    )
}
export default Cart;