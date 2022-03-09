import React from "react";
import {
    StyleSheet,
    SafeAreaView,
    View,
    ScrollView,
    TouchableWithoutFeedback,
} from "react-native";
import { Text, Avatar, Icon, Input } from "@ui-kitten/components";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Appwrite } from "appwrite";

const appwrite = new Appwrite();

appwrite
    .setEndpoint("http://localhost/v1") // Your Appwrite Endpoint
    .setProject("6228cca7c05ffbaf27d3"); // Your project ID

appwrite.account.createAnonymousSession().then(
    response => {
        console.log(response); // Success
    },
    error => {
        console.log(error); // Failure
    }
);

// let editUserRequest = appwrite.database.updateDocument(
//     "6228d54f76210a45d192",
//     "6228d69ee8b81276abfb",
//     {
//         name: "Varun",
//         age: 22,
//         caretaker: "Nurse Sara",
//         doctorname: "Dr. Stevenson",
//         $read: ["role:all"],
//         $write: ["role:all"],
//         $id: "6228d69ee8b81276abfb",
//         $collection: "6228d54f76210a45d192",
//     }
// );

// editUserRequest.then(
//     function (response) {
//         console.log(response); // Success
//     },
//     function (error) {
//         console.log(error); // Failure
//     }
// );

// let deleteDietRequest = appwrite.database.deleteDocument('6228e0039cf5ed1bc280', '6228e05a3e136617bb46');

// deleteDietRequest.then(function (response) {
//     console.log(response); // Success
// }, function (error) {
//     console.log(error); // Failure
// });

// let createDietRequest = appwrite.database.createDocument('6228e0039cf5ed1bc280', "unique()", {
//     "title": "food item 3",
//     "description": "description 3",
//     "$read": [
//         "role:all"
//     ],
//     "$write": [
//         "role:all"
//     ],
//     "$collection": "6228e0039cf5ed1bc280"
// });

// createDietRequest.then(function (response) {
//     console.log(response); // Success
// }, function (error) {
//     console.log(error); // Failure
// });

// let promise = appwrite.database.listDocuments("6228d54f76210a45d192");

// promise.then(
//     function (response) {
//         console.log(response); // Success
//     },
//     function (error) {
//         console.log(error); // Failure
//     }
// );

// let getDietRequest = appwrite.database.listDocuments("6228e0039cf5ed1bc280");

// getDietRequest.then(
//     function (response) {
//         console.log(response); // Success
//     },
//     function (error) {
//         console.log(error); // Failure
//     }
// );

// let editDietRequest = appwrite.database.updateDocument('6228e0039cf5ed1bc280', '62290b15622f0dd238ac', {
//     "title": "test food3",
//     "description": "food desc3",
//     "$read": [
//         "role:all"
//     ],
//     "$write": [
//         "role:all"
//     ],
//     "$collection": "6228e0039cf5ed1bc280"
// });

// editDietRequest.then(function (response) {
//     console.log(response); // Success
// }, function (error) {
//     console.log(error); // Failure
// });

// let promise3 = appwrite.database.listDocuments("6228e1626152b2089b96");

// promise3.then(
//     function (response) {
//         console.log(response); // Success
//     },
//     function (error) {
//         console.log(error); // Failure
//     }
// );

const DocHome = ({ navigation }) => {
    const [value, setValue] = React.useState("");
    const renderIcon = props => (
        <TouchableWithoutFeedback>
            <Icon {...props} name={"search"} />
        </TouchableWithoutFeedback>
    );

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView style={{ flex: 1, backgroundColor: "#fff" }}>
                <View style={{ padding: 20, paddingTop: 30 }}>
                    {/* Header */}
                    <View
                        style={{ flexDirection: "row", alignItems: "center" }}
                    >
                        <Input
                            style={styles.input}
                            value={value}
                            placeholder="Search Patient"
                            accessoryRight={renderIcon}
                            onChangeText={nextValue => setValue(nextValue)}
                        />
                        <Avatar
                            size="small"
                            source={require("../../assets/avatar.jpeg")}
                        />
                    </View>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("PatientDetails")}
                    >
                        <View style={styles.patientCard}>
                            <View style={{ flexDirection: "row" }}>
                                <View style={styles.patientInfo}>
                                    <Text category="h5">Patient Name</Text>
                                    <View
                                        style={{
                                            flexDirection: "row",
                                            marginTop: 10,
                                        }}
                                    >
                                        <Text style={styles.text}>
                                            Blood Type: O+
                                        </Text>
                                        <Text style={styles.text}>Age: 40</Text>
                                    </View>
                                    <Text style={styles.text}>
                                        Caretaker: Nurse Meghana
                                    </Text>
                                </View>
                                <Avatar
                                    style={styles.avatar}
                                    source={require("../../assets/avatar.jpeg")}
                                />
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
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

export default DocHome;
