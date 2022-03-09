import React from "react";
import { SafeAreaView, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
    BottomNavigation,
    BottomNavigationTab,
    Icon,
} from "@ui-kitten/components";
import DialogsScreen from "../components/OtherUI/Dialogs";
import GamesStack from "../components/OtherUI/Games";

const { Navigator, Screen } = createBottomTabNavigator();
const HomeIcon = (props) => <Icon {...props} name="home-outline" />;
const GameIcon = (props) => <Icon {...props} name="play-circle-outline" />;

const BottomTabBar = ({ navigation, state }) => (
    <SafeAreaView>
        <BottomNavigation
            selectedIndex={state.index}
            onSelect={(index) => navigation.navigate(state.routeNames[index])}
        >
            <BottomNavigationTab title="Home" icon={HomeIcon} />
            <BottomNavigationTab title="Games" icon={GameIcon} />
        </BottomNavigation>
    </SafeAreaView>
);

const TabNavigator = () => (
    <Navigator tabBar={(props) => <BottomTabBar {...props} />}>
        <Screen name="Dialogs" component={DialogsScreen} />
        <Screen name="Slider" component={GamesStack} />
    </Navigator>
);

function MyTabs() {
    return <TabNavigator />;
}

export default MyTabs;
