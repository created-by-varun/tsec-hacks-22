import React from "react";
import { StyleSheet, Alert, View } from "react-native";
import { Button, Layout } from "@ui-kitten/components";

export const AlertSimpleModal = () => {
    const createTwoButtonAlert = () =>
        Alert.alert("Alert Title", "My Alert Msg", [
            {
                text: "Cancel",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel",
            },
            { text: "OK", onPress: () => console.log("OK Pressed") },
        ]);

    const createOneButtonAlert = () =>
        Alert.alert("Alert Title", "My Alert Msg", [
            { text: "OK", onPress: () => console.log("OK Pressed1") },
        ]);

    return (
        <Layout style={styles.container} level="1">
            <View>
                <Button style={{ marginTop: 10 }} onPress={createOneButtonAlert}>
                    1-Button Alert
                </Button>
                <Button style={{ marginTop: 10 }} onPress={createTwoButtonAlert}>
                    2-Button Alert
                </Button>
            </View>
        </Layout>
    );
};

const styles = StyleSheet.create({
    container: {
        minHeight: 192,
        minWidth: 200,
    },
});

export default AlertSimpleModal;
