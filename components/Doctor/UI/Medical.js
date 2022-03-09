import {
    Text,
    Button,
    Icon,
    Input,
    Avatar,
    List,
    Modal,
    Card,
    ListItem,
} from "@ui-kitten/components";
import React, { useEffect, useState } from "react";
import { View, StyleSheet, TextInput } from "react-native";
import { Appwrite } from "appwrite";

const appwrite = new Appwrite();

appwrite
    .setEndpoint("http://localhost/v1") // Your Appwrite Endpoint
    .setProject("6228cca7c05ffbaf27d3"); // Your project ID

// let createDietRequest = appwrite.database.createDocument('6228e0039cf5ed1bc280', "unique()", {
//     "title": "food item 4",
//     "description": "description 4",
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

let editDietRequest = appwrite.database.updateDocument(
    "6228e0039cf5ed1bc280",
    "62290b15622f0dd238ac",
    {
        title: "test food3",
        description: "food desc3",
        $read: ["role:all"],
        $write: ["role:all"],
        $collection: "6228e0039cf5ed1bc280",
    }
);

editDietRequest.then(
    function (response) {
        console.log(response); // Success
    },
    function (error) {
        console.log(error); // Failure
    }
);

const Medical = () => {
    const [diet, setDiet] = useState([]);
    const [visible, setVisible] = React.useState(false);
    const [addDiet, setaddDiet] = React.useState("");
    const [addDesc, setAddDesc] = React.useState("");

    useEffect(() => {
        getDiets();
    }, []);

    const getDiets = () => {
        let getDietRequest = appwrite.database.listDocuments(
            "6228e0039cf5ed1bc280"
        );

        getDietRequest.then(
            function (response) {
                console.log(response);
                setDiet(response.documents);
            },
            function (error) {
                console.log(error); // Failure
            }
        );
    };

    const addDietFnc = () => {
        let createDietRequest = appwrite.database.createDocument(
            "6228e0039cf5ed1bc280",
            "unique()",
            {
                title: addDiet,
                description: addDesc,
                $read: ["role:all"],
                $write: ["role:all"],
                $collection: "6228e0039cf5ed1bc280",
            }
        );

        setaddDiet("");
        setAddDesc("");
        setVisible(false);

        createDietRequest.then(
            function (response) {
                setTimeout(() => {
                    getDiets();
                }, 1000);
            },
            function (error) {
                console.log(error); // Failure
            }
        );
    };

    const deleteDiet = id => {
        let deleteDietRequest = appwrite.database.deleteDocument(
            "6228e0039cf5ed1bc280",
            id
        );
        deleteDietRequest.then(
            function (response) {
                setTimeout(() => {
                    getDiets();
                }, 1000);
            },
            function (error) {
                console.log(error); // Failure
            }
        );
    };

    const renderItemAccessory = item => (
        <Button
            status="danger"
            onPress={() => deleteDiet(item.$id)}
            appearance="outline"
            size="tiny"
        >
            REMOVE
        </Button>
    );

    const ItemImage = props => (
        <Avatar
            {...props}
            style={[props.style, { tintColor: null }]}
            source={require("../../../assets/icon.png")}
        />
    );

    const renderItem = ({ item, index }) => (
        <ListItem
            key={index}
            title={`${item.title}`}
            description={`${item.description}`}
            accessoryRight={() => renderItemAccessory(item)}
            accessoryLeft={ItemImage}
        />
    );

    const EditIcon = props => <Icon {...props} name="edit" />;

    const DeleteIcon = props => <Icon {...props} name="trash-2-outline" />;

    const CardHeader = data => (
        <>
            <Text style={styles.name}>Medication Name</Text>
            <View style={{ flexDirection: "row" }}>
                <Text style={styles.date}>From: 12/12/2021</Text>
                <Text style={styles.date}>End: 12/12/2022</Text>
            </View>
        </>
    );

    return (
        <View>
            <View style={{ marginBottom: 20 }}>
                <Modal
                    visible={visible}
                    backdropStyle={styles.backdrop}
                    onBackdropPress={() => setVisible(false)}
                >
                    <Card disabled={true} style={{ width: 260 }}>
                        <Input
                            style={styles.input}
                            onChangeText={setaddDiet}
                            value={addDiet}
                            placeholder="Enter new diet"
                        />
                        <Input
                            style={styles.input}
                            onChangeText={setAddDesc}
                            value={addDesc}
                            placeholder="Enter description"
                        />
                        <Button onPress={() => addDietFnc()}>ADD</Button>
                    </Card>
                </Modal>
                <View style={styles.box}>
                    <Text style={styles.when}>BP</Text>
                    <Text style={styles.when}>Normal</Text>
                </View>
                <View style={styles.box}>
                    <Text style={styles.when}>Sugar</Text>
                    <Text style={styles.when}>Normal</Text>
                </View>
                <View style={styles.box}>
                    <Text style={styles.when}>Following Diet</Text>
                    <Text style={styles.when}>Yes</Text>
                </View>
                <View style={styles.box}>
                    <Text style={styles.when}>Overall Health</Text>
                    <Text style={styles.when}>Better</Text>
                </View>
                <View style={styles.box}>
                    <Text style={styles.when}>Overall Interaction</Text>
                    <Text style={styles.when}>Better</Text>
                </View>
            </View>
            <View style={{ marginTop: 10 }}>
                <View style={styles.Card}>
                    <View
                        style={{
                            flexDirection: "row",
                            marginRight: 8,
                            justifyContent: "space-between",
                        }}
                    >
                        <Text style={styles.name}> Recommended Diet</Text>
                        <Button size="tiny" onPress={() => setVisible(true)}>
                            ADD
                        </Button>
                    </View>
                    <List data={diet} renderItem={renderItem} />
                </View>
            </View>
            <View>
                <Text category={"h5"}>Current Dosage</Text>
                <View style={styles.Card}>
                    <CardHeader></CardHeader>
                    <View style={styles.dosageTimings}>
                        <Text style={styles.when}>Dosage directions</Text>
                        <Text>Morning, Afternoon, Evening</Text>
                    </View>
                    <Text style={styles.desc}>
                        Directions for the caretaker and other remarks
                    </Text>
                    <View
                        style={{
                            flexDirection: "row",
                            marginTop: 20,
                        }}
                    >
                        <Button
                            accessoryLeft={EditIcon}
                            style={[styles.button, { marginRight: 10 }]}
                            appearance="filled"
                        >
                            EDIT
                        </Button>

                        <Button
                            accessoryLeft={DeleteIcon}
                            style={[styles.button, { marginLeft: 10 }]}
                            status="danger"
                            appearance="outline"
                        >
                            END
                        </Button>
                    </View>
                </View>
            </View>
            <View style={{ marginTop: 10 }}>
                <Text category={"h5"}>Previous Dosage</Text>
                <View style={styles.Card}>
                    <CardHeader></CardHeader>
                </View>
                <View style={styles.Card}>
                    <CardHeader></CardHeader>
                </View>
                <View style={styles.Card}>
                    <CardHeader></CardHeader>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    Card: {
        backgroundColor: "white",
        padding: 20,
        marginVertical: 10,
        flexDirection: "column",
        borderRadius: 8,
        elevation: 2,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
    },
    name: {
        fontSize: 20,
        fontWeight: "700",
    },
    date: {
        flex: 1,
        marginVertical: 5,
    },
    dosageTimings: {
        marginVertical: 10,
    },
    when: {
        fontSize: 16,
        fontWeight: "600",
        lineHeight: 24,
        flex: 1,
    },
    box: {
        flexDirection: "row",
        paddingVertical: 10,
        borderBottomColor: "#828282",
        borderBottomWidth: 1,
    },
    desc: {
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "#828282",
        padding: 10,
        marginTop: 6,
    },
    button: {
        flex: 1,
    },
    backdrop: {
        backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    input: {
        marginBottom: 16,
    },
});

export default Medical;
