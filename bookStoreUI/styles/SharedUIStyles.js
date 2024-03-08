//source:https://code.tutsplus.com/common-react-native-app-layouts-login-page--cms-27639t
//Source:https://www.geeksforgeeks.org/create-an-e-commerce-app-using-react-native/
//Source:https://reactnative.dev/docs/checkbox
import { StyleSheet } from "react-native";
export default StyleSheet.create({
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
    },
    checkboxContainer: {
        flexDirection: 'row',
        marginBottom: 20,
    },
    checkbox: {
        alignSelf: 'center',
    },
    label: {
        margin: 8,
    },
    //2nd part
    heading: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
        textAlign: "center",
        color: "#333",
    },

    productItemContainer: {
        marginBottom: 10,
        borderRadius: 10,
        backgroundColor: "#fff",
        padding: 15,
        elevation: 3,
    },
    productItemName: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 5,
        color: "#333",
    },
    productItemPrice: {
        fontSize: 16,
        marginBottom: 10,
        color: "#666",
    },
    addButton: {
        backgroundColor: "#4caf50",
        padding: 10,
        borderRadius: 5,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    addButtonText: {
        color: "white",
        marginRight: 5,
    },
    cartContainer: {
        marginTop: 20,
    },
    cartHeading: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 10,
        textAlign: "center",
        color: "#333",
    },
    cartItemContainer: {
        borderRadius: 10,
        backgroundColor: "#fff",
        padding: 15,
        elevation: 3,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    cartItemName: {
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 5,
        color: "#333",
    },
    cartItemPrice: {
        fontSize: 14,
        color: "#666",
    },
    removeButton: {
        backgroundColor: "#e53935",
        padding: 10,
        borderRadius: 5,
        justifyContent: "center",
        alignItems: "center",
    },
    totalContainer: {
        marginTop: 10,
        alignItems: "flex-end",
    },
    totalText: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#333",
    },



    checkoutButton: {
        backgroundColor: "#2196F3",
        padding: 15,
        borderRadius: 5,
        alignItems: "center",
        marginTop: 10,
    },
    checkoutButtonText: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
    },
    modalContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    modalContent: {
        backgroundColor: "#fff",
        padding: 20,
        borderRadius: 10,
        elevation: 5,
        alignItems: "center",
    },
    modalText: {
        fontSize: 18,
        marginBottom: 20,
        textAlign: "center",
    },

    emptyCartMessage: {
        fontSize: 16,
        textAlign: "center",
        marginVertical: 10,
    },
})