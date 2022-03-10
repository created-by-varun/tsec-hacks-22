import React, { useEffect, useState } from "react";
import { WebView } from "react-native-webview";
import { Text } from "@ui-kitten/components";
import { View } from "react-native";
import { Appwrite } from "appwrite";
import { useFocusEffect } from "@react-navigation/native";

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

let getUserRequest = appwrite.database.listDocuments("6228d54f76210a45d192");

const MusicScreen = ({navigation}) => {
    const [user, setUser] = React.useState({});
    // useEffect(() => {
    //     getUserRequest.then(
    //         function (response) {
    //             setUser(response.documents[0]);
    //         },
    //         function (error) {
    //             console.log(error); // Failure
    //         }
    //     );
    // }, []);

    useFocusEffect(
        React.useCallback(() => {
            getUserRequest.then(
                function (response) {
                    setUser(response.documents[0]);
                },
                function (error) {
                    console.log(error); // Failure
                }
            );
        }, [navigation])
    );

    return (
        <>
            <View style={{ padding: 20, backgroundColor: "white" }}>
                <Text category={"h4"} style={{ width: "80%" }}>
                    Top calming music picks for today
                </Text>
            </View>
            <WebView
                style={{ flex: 1 }}
                source={{
                    uri:
                        user?.musicPlaylist ||
                        "https://wynk.in/music/album/patient-heart/um_00602508252372",
                }}
            />
        </>
    );
};

export default MusicScreen;
