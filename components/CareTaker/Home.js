import React from "react";
import { StyleSheet, View } from "react-native";
import Home from "../Doctor/Home";
import { Button, Modal, Input, Card } from "@ui-kitten/components";
import { Appwrite } from "appwrite";

const appwrite = new Appwrite();

appwrite
    .setEndpoint("http://localhost/v1") // Your Appwrite Endpoint
    .setProject("6228cca7c05ffbaf27d3"); // Your project ID


const CareHome = ({ navigation }) => {
    const [visible, setVisible] = React.useState(false);
    const [link, setlink] = React.useState(false);

    const addLink = () => {
        let addLinkRequest = appwrite.database.updateDocument('6228d54f76210a45d192',
            "6228d69ee8b81276abfb",
            {
                musicPlaylist: link,
            }
        );
        addLinkRequest.then(
            function (response) {
               console.log("success");
               setVisible(false);
            },
            function (error) {
                console.log(error); // Failure
            }
        );
    };

    return (
        <>
            <Home navigation={navigation} caretaker={true}></Home>
            <View style={{ padding: 20, backgroundColor: "#fff" }}>
                <Button onPress={() => setVisible(true)}>Add Music Link</Button>
            </View>
            <Modal
                visible={visible}
                backdropStyle={styles.backdrop}
                onBackdropPress={() => setVisible(false)}
            >
                <Card disabled={true} style={{ width: 260 }}>
                    <Input
                        style={styles.input}
                        onChangeText={setlink}
                        value={link}
                        placeholder="Enter Music Link"
                    />
                    <Button onPress={() => addLink()}>ADD</Button>
                </Card>
            </Modal>
        </>
    );
};

const styles = StyleSheet.create({
    input: {
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
    backdrop: {
        backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
});

export default CareHome;
