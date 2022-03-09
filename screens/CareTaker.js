import React from "react";
import { SafeAreaView, View, ScrollView } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
    BottomNavigation,
    BottomNavigationTab,
    Icon,
    Text,
} from "@ui-kitten/components";
import DialogsScreen from "../components/OtherUI/Dialogs";
import SliderScreen from "../components/OtherUI/Slider";

const { Navigator, Screen } = createBottomTabNavigator();
const Email = props => <Icon {...props} name="email-outline" />;

const CareTakerUI = ({ navigation, state }) => (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
        <ScrollView style={{ flex: 1, backgroundColor: "white" }}>
            <View>
                <Text>Test</Text>
            </View>
        </ScrollView>
    </SafeAreaView>
);

export default CareTakerUI;
