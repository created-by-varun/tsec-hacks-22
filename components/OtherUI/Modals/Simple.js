import React from "react";
import { StyleSheet } from "react-native";
import { Button, Card, Layout, Modal, Text } from "@ui-kitten/components";

export const ModalSimpleUsageShowcase = (props) => {
    return (
        <Modal
            backdropStyle={styles.backdrop}
            style={styles.Modal}
            visible={props.visible}
            animationType="slide"
        >
            <Card disabled={true}>
                <Text style={styles.title}>{props.title}</Text>
                <Text style={styles.description}>{props.Description}</Text>
                <Button onPress={props.DismissModal}>DISMISS</Button>
            </Card>
        </Modal>
    );
};

const styles = StyleSheet.create({
    Modal: {
        minWidth: "80%",
        borderRadius: 10,
    },
    title: {
        fontSize: 30,
        textAlign: "center",
        paddingVertical: 10,
    },
    description: {
        textAlign: "center",
        marginBottom: 10,
        fontSize: 15,
    },
    backdrop: {
        backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
});

export default ModalSimpleUsageShowcase;
