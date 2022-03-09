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



const Medical = () => {
    const [diet, setDiet] = useState([]);
    const [visible, setVisible] = React.useState(false);
    const [addDiet, setaddDiet] = React.useState("");
    const [addDesc, setAddDesc] = React.useState("");
    const [dosages, setDosages] = React.useState([]);
    const [visible2, setVisible2] = React.useState(false);
    const [addDosageMed, setDosageMed] = React.useState("");
    const [addFrom, setaddFrom] = React.useState("");
    const [addTo, settAddTo] = React.useState(""); 
    const [dosageInsts, setDosageInsts] = React.useState("");
    const [remarks, setRemarks] = React.useState("");


    useEffect(() => {
        getDiets();
        getDosage();
    }, []);

    const getDiets = () => {
        let getDietRequest = appwrite.database.listDocuments(
            "6228e0039cf5ed1bc280"
        );

        getDietRequest.then(
            function (response) {
                setDiet(response.documents);
            },
            function (error) {
                console.log(error); // Failure
            }
        );
    };

    const getDosage = () => {
        let getDosage = appwrite.database.listDocuments("6228e1626152b2089b96");

        getDosage.then(
            function (response) {
                console.log(response); // Success
                setDosages(response.documents);
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

    const addDosageFc = () => {
        let createDosage = appwrite.database.createDocument(
            "6228e1626152b2089b96",
            "unique()",
            {
                medicationName: addDosageMed,
                fromDt: addFrom,
                toDt: addTo,
                dosageTimings: dosageInsts,
                dosageInstructions: remarks,
                $read: ["role:all"],
                $write: ["role:all"],
                $collection: "6228e1626152b2089b96",
                isActive: true
            }
        );

        setDosageMed("");
        setaddFrom("");
        settAddTo("");
        setDosageInsts("");
        setRemarks("");
        setVisible2(false);

        createDosage.then(
            function (response) {
                setTimeout(() => {
                    getDosage();
                }, 1000);
            },
            function (error) {
                console.log(error); // Failure
            }
        );
    }

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

    const endDosage = id => {
        let endDosageRqt = appwrite.database.updateDocument(
            "6228e1626152b2089b96",
            id,{
                isActive: false
            }
        );
        endDosageRqt.then(
            function (response) {
                setTimeout(() => {
                    getDosage();
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

    const DeleteIcon = props => <Icon {...props} name="trash-2-outline" />;

    const CardHeader = ({ data }) => (
        <>
            <Text style={styles.name}>{data.medicationName} </Text>
            <View style={{ flexDirection: "row" }}>
                <Text style={styles.date}>From: {data.fromDt} </Text>
                <Text style={styles.date}>End: {data.toDt} </Text>
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
                <Modal
                    visible={visible2}
                    backdropStyle={styles.backdrop}
                    onBackdropPress={() => setVisible2(false)}
                >
                    <Card disabled={true} style={{ width: 260 }}>
                        <Input
                            style={styles.input}
                            onChangeText={setDosageMed}
                            value={addDosageMed}
                            placeholder="Enter medication"
                        />
                        <Input
                            style={styles.input}
                            onChangeText={setaddFrom}
                            value={addFrom}
                            placeholder="Enter from date"
                        />
                         <Input
                            style={styles.input}
                            onChangeText={settAddTo}
                            value={addTo}
                            placeholder="Enter to date"
                        />
                         <Input
                            style={styles.input}
                            onChangeText={setDosageInsts}
                            value={dosageInsts}
                            placeholder="Enter dosage instructions"
                        />
                           <Input
                            style={styles.input}
                            onChangeText={setRemarks}
                            value={remarks}
                            placeholder="Enter remarks"
                        />
                        <Button onPress={() => addDosageFc()}>ADD</Button>
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
                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                    }}
                >
                    <Text category={"h5"}>Recommended Diet</Text>
                    <Button size={"small"} onPress={() => setVisible(true)}>
                        ADD
                    </Button>
                </View>
                <View style={styles.Card}>
                    {diet.length ? (
                        <List data={diet} renderItem={renderItem} />
                    ) : (
                        <Text>No diet Yet</Text>
                    )}
                </View>
            </View>
            <View>
                <View
                    style={{
                        flexDirection: "row",
                        marginTop: 10,
                        alignItems: "center",
                        justifyContent: "space-between",
                    }}
                >
                    <Text category={"h5"}>Current Dosage</Text>
                    <Button size={"small"} onPress={() => setVisible2(true)}>
                        ADD
                    </Button>
                </View>
                {dosages.map((item, index) =>
                    item.isActive ? (
                        <View style={styles.Card}>
                            <CardHeader data={item}></CardHeader>
                            <View style={styles.dosageTimings}>
                                <Text style={styles.when}>
                                    Dosage directions
                                </Text>
                                <Text>{item.dosageTimings}</Text>
                            </View>
                            <Text style={styles.desc}>
                                {item.dosageInstructions}
                            </Text>
                            <View
                                style={{
                                    flexDirection: "row",
                                    marginTop: 20,
                                }}
                            >
                                <Button
                                    accessoryLeft={DeleteIcon}
                                    style={[styles.button]}
                                    status="danger"
                                    appearance="outline"
                                    onPress={() => endDosage(item.$id)}
                                >
                                    END
                                </Button>
                            </View>
                        </View>
                    ) : null
                )}
            </View>
            <View style={{ marginTop: 10 }}>
                <Text category={"h5"}>Previous Dosage</Text>
                {dosages.map((item, index) =>
                    !item.isActive ? (
                        <View style={styles.Card}>
                            <CardHeader data={item}></CardHeader>
                        </View>
                    ) : null
                )}
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
