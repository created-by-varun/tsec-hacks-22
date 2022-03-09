import React from "react";
import { View } from "react-native";
import * as DocumentPicker from "expo-document-picker";
import { Button } from "@ui-kitten/components";

export default function FilePicker() {
    const pickDocument = async () => {
        let result = await DocumentPicker.getDocumentAsync({});
        console.log(result);
    };

    return (
        <View style={{ marginTop: 10 }}>
            <Button onPress={() => pickDocument()}>Upload File</Button>
        </View>
    );
}