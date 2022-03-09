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
import MusicScreen from "../components/OtherUI/Music";

const { Navigator, Screen } = createBottomTabNavigator();
const HomeIcon = (props) => <Icon {...props} name="home-outline" />;
const GameIcon = (props) => <Icon {...props} name="play-circle-outline" />;
const MusicIcon = (props) => <Icon {...props} name="music-outline" />;

const BottomTabBar = ({ navigation, state }) => (
    <SafeAreaView>
        <BottomNavigation
            selectedIndex={state.index}
            onSelect={(index) => navigation.navigate(state.routeNames[index])}
        >
            <BottomNavigationTab title="Home" icon={HomeIcon} />
            <BottomNavigationTab title="Games" icon={GameIcon} />
            <BottomNavigationTab title="Music Therapy" icon={MusicIcon} />
        </BottomNavigation>
    </SafeAreaView>
);

const TabNavigator = () => (
    <Navigator tabBar={(props) => <BottomTabBar {...props} />}>
        <Screen name="Dialogs" component={DialogsScreen} />
        <Screen name="Slider" component={GamesStack} />
        <Screen name="MusicTherapy" component={MusicScreen} />
    </Navigator>
);

function MyTabs() {
    return <TabNavigator />;
}

export default MyTabs;
