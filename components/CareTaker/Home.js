import React from "react";
import {
    StyleSheet,
    SafeAreaView,
    View,
    ScrollView,
    TouchableWithoutFeedback,
} from "react-native";
import Home from "../Doctor/Home";

const CareHome = ({ navigation }) => {
    return (
        <>
            <Home navigation={navigation} caretaker={true}></Home>
        </>
    );
};

const styles = StyleSheet.create({
    input: {
        flex: 1,
        marginRight: 20,
        marginBottom: 10,
    },
    patientCard: {
        backgroundColor: "white",
        padding: 10,
        borderRadius: 8,
        elevation: 2,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        marginTop: 10,
    },
    patientInfo: {
        paddingTop: 5,
        flex: 1,
    },
    text: {
        fontSize: 14,
        lineHeight: 24,
        flex: 1,
        fontWeight: "500",
    },
    avatar: {
        height: 86,
        width: 86,
    },
});

export default CareHome;
