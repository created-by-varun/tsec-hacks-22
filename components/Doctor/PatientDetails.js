import React from "react";
import { StyleSheet, SafeAreaView, View, ScrollView } from "react-native";
import {
    Text
} from "@ui-kitten/components";

const PatientDetails = ({ navigation }) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView style={{ flex: 1, backgroundColor: "#fff" }}>
                <View style={{ padding: 20 }}>
                    <Text>DOC home</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({

});

export default PatientDetails;
