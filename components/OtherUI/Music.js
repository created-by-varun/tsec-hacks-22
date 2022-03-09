import React from "react";
import { Text } from '@ui-kitten/components'
import { View, ScrollView } from "react-native";
import { Audio } from 'expo-av';

const MusicScreen = ({ navigation }) => {
    return (
        <ScrollView style={{flex:1, backgroundColor: 'white'}}>
            <View style={{padding: 20, paddingTop: 30}}>
            <Text category={'h4'} style={{width: '80%'}}>Today's selection of soothing music:</Text>
            </View>
        </ScrollView>
    )
}

export default MusicScreen