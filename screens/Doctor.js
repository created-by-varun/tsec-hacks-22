import React from "react";
import { SafeAreaView, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
    BottomNavigation,
    BottomNavigationTab,
    Icon,
} from "@ui-kitten/components";
import DialogsScreen from "../components/OtherUI/Dialogs";
import SliderScreen from "../components/OtherUI/Slider";

const { Navigator, Screen } = createBottomTabNavigator();
const Email = (props) => <Icon {...props} name="email-outline" />;

const BottomTabBar = ({ navigation, state }) => (
    <SafeAreaView>
        <BottomNavigation
            selectedIndex={state.index}
            onSelect={(index) => navigation.navigate(state.routeNames[index])}
        >
            <BottomNavigationTab title="Home" icon={Email} />
            <BottomNavigationTab title="Games" icon={Email} />
        </BottomNavigation>
    </SafeAreaView>
);

const TabNavigator = () => (
    <Navigator tabBar={(props) => <BottomTabBar {...props} />}>
        <Screen name="Dialogs" component={DialogsScreen} />
        <Screen name="Slider" component={SliderScreen} />
    </Navigator>
);

function MyTabs() {
    return <TabNavigator />;
}

export default MyTabs;
