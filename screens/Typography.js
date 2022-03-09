import React from "react";
import { SafeAreaView, StyleSheet, View, ScrollView } from "react-native";
import {
    Text,
    TopNavigation,
    TopNavigationAction,
    Divider,
    Layout,
    Icon,
    List,
    ListItem,
} from "@ui-kitten/components";

import GridView from "../components/GridView";

// icon imports
const Menu = props => <Icon {...props} name="menu-outline" />;

// sample data for list
const data = new Array(5).fill({
    title: "Item",
});

export const TypographyScreen = ({ navigation }) => {
    // rendering list items
    const renderItem = ({ item, index }) => (
        <ListItem title={`${item.title} ${index + 1}`} />
    );

    // Back button functionality
    const MenuAction = () => (
        <TopNavigationAction icon={Menu} onPress={OpenMenu} />

    );

    const OpenMenu = () => {
        navigation.openDrawer();
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <TopNavigation
                title="Typography & Lists"
                alignment="center"
                accessoryLeft={MenuAction}
            />
            <Divider />
            <Layout
                style={{
                    flex: 1,
                    padding: 15,
                }}
            >
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Text style={styles.text} category="h1">
                        Heading 1
                    </Text>
                    <Text style={styles.text} category="h2">
                        Heading 2
                    </Text>
                    <Text style={styles.text} category="h3">
                        Heading 3
                    </Text>
                    <Text style={styles.text} category="h4">
                        Heading 4
                    </Text>
                    <Text style={styles.text} category="h5">
                        Heading 5
                    </Text>
                    <Text style={styles.text} category="h6">
                        Heading 6
                    </Text>

                    <Divider />

                    <Text style={{ marginVertical: 20 }} category="h5">
                        List View
                    </Text>

                    <List
                        data={data}
                        renderItem={renderItem}
                        ItemSeparatorComponent={Divider}
                    />

                    <Divider />

                    <GridView />

                </ScrollView>
            </Layout>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    text: {
        margin: 2,
    },
});
