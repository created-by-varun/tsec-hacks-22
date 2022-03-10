import React from "react";
import { StyleSheet, SafeAreaView, View, ScrollView } from "react-native";
import {
    Text, Avatar, Tab, TabView, Icon, Layout
} from "@ui-kitten/components";

import PatientDetailsDoc from '../Doctor/PatientDetails'

const PatientDetails = ({ navigation, route }) => {

    return (
        <>
        <PatientDetailsDoc appUser={route.params.user} hideActions></PatientDetailsDoc>
        </>
    );
};

const styles = StyleSheet.create({
    avatar: {
        width: 110,
        height: 110
    },
    headerTxtCon: {
        marginLeft: 20
    },
    text: {
        fontSize: 14,
        lineHeight: 24,
    },
    headerCard: {
        backgroundColor: 'white',
        padding: 20,
        flexDirection: 'row', alignItems: 'center',
        borderRadius: 8,
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
    },
    tabContainer: {
        padding: 20,
        backgroundColor: 'white'
    }
});

export default PatientDetails;
