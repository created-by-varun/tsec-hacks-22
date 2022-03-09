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
                    <Text>Patients Games</Text>

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
