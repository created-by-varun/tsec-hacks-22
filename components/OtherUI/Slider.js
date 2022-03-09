import React from "react";
import { StyleSheet, SafeAreaView, View, ScrollView } from "react-native";
import { DrawerActions } from "@react-navigation/native";
import {
    Layout,
    Text,
    TopNavigationAction,
    TopNavigation,
    Icon,
    Divider,
} from "@ui-kitten/components";

import CarouselCards from "./Carousel/CarouselCards";
import VideoPlayer from "../VideoPlayer";
import FilePicker from "../FilePicker";
import TabView from "../TabView";

export const SliderScreen = ({ navigation }) => {
    const Menu = (props) => <Icon {...props} name="menu-outline" />;
    const OpenMenu = () => {
        navigation.dispatch(DrawerActions.toggleDrawer());
    };

    const MenuAction = () => (
        <TopNavigationAction icon={Menu} onPress={OpenMenu} />
    );
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <TopNavigation
                title="Media"
                alignment="center"
                accessoryLeft={MenuAction}
            />
            <Layout style={{ flex: 1, padding: 15 }}>
                <ScrollView  showsVerticalScrollIndicator={false}>
                <Text category="h5">Slider / Carousel</Text>
                <CarouselCards />
                <Divider />
                    <Text style={styles.heading} category="h5">
                        Tabs / Tab View
                    </Text>
                    <TabView />
                    <Divider />
                    <Text style={styles.heading} category="h5">
                        Video Player
                    </Text>
                    <VideoPlayer />

                    <Divider />
                    <Text style={styles.heading} category="h5">
                        File Picker
                    </Text>

                    <FilePicker />

                </ScrollView>
            </Layout>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    heading: {
        marginVertical: 20,
    },
    Carouselcontainer: {
        alignItems: "center",
        justifyContent: "center",
        padding: 50,
    },
});

export default SliderScreen;
