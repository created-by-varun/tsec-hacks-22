import React from "react";
import { SafeAreaView, StyleSheet, View, ScrollView, Linking } from "react-native";
import {
    Divider,
    Icon,
    Layout,
    Text,
    TopNavigation,
    TopNavigationAction,
    Button,
    ButtonGroup,
    Spinner,
} from "@ui-kitten/components";

// icon imports
const Menu = props => <Icon {...props} name="menu-outline" />;

const StarIcon = props => <Icon {...props} name="star" />;

// Loading spinner
const LoadingIndicator = props => (
    <View style={[props.style, styles.indicator]}>
        <Spinner size="small" />
    </View>
);

export const ButtonsScreen = ({ navigation }) => {
    const [text, setText] = React.useState("Press any button");

    const OpenMenu = () => {
        navigation.openDrawer();
    };

    const MenuAction = () => (
        <TopNavigationAction icon={Menu} onPress={OpenMenu} />
    );

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <TopNavigation
                title="Buttons"
                alignment="center"
                accessoryLeft={MenuAction}
            />
            <Divider />
            <Layout
                style={{
                    flex: 1,
                    padding: 15
                }}
            >
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Text style={styles.text} category="h5">
                        Button Types
                    </Text>

                    <Button style={styles.button} appearance="filled">
                        PRIMARY BUTTON
                    </Button>

                    <Button style={styles.button} appearance="outline">
                        SECONDARY BUTTON
                    </Button>

                    <Button style={styles.button} appearance="ghost">
                        TERTIARY BUTTON
                    </Button>

                    <Button style={styles.button} disabled={true}>
                        DISABLED BUTTON
                    </Button>

                    <Divider />

                    <Text style={styles.verticalMargin} category="h5">
                        Buttons with accessories
                    </Text>

                    <Button
                        style={styles.button}
                        status="primary"
                        accessoryLeft={StarIcon}
                    >
                        PRIMARY
                    </Button>

                    <Button
                        style={styles.button}
                        status="success"
                        accessoryRight={StarIcon}
                    >
                        SUCCESS
                    </Button>

                    <Button
                        style={styles.button}
                        status="danger"
                        accessoryLeft={StarIcon}
                    />

                    <Button
                        style={styles.button}
                        appearance="ghost"
                        status="danger"
                        accessoryLeft={StarIcon}
                    />

                    <Button
                        style={styles.button}
                        appearance="outline"
                        accessoryLeft={LoadingIndicator}
                    >
                        LOADING
                    </Button>

                    <Divider />

                    <Text style={styles.verticalMargin} category="h5">
                        Button Groups
                    </Text>


                    <ButtonGroup>
                        <Button onPress={() => setText("Left button pressed")}>
                            L
                        </Button>
                        <Button onPress={() => setText("Middle button pressed")}>
                            M
                        </Button>
                        <Button onPress={() => setText("Right button pressed")}>
                            R
                        </Button>
                    </ButtonGroup>
                    <Text style={styles.text}>{text}</Text>

                    <Divider />

                    <Text style={styles.verticalMargin} category="h5">
                        External Link
                    </Text>
                    <Button onPress={ ()=>{ Linking.openURL('https://google.com')}} appearance="outline">This button opens an external link in your browser</Button>
                </ScrollView>
            </Layout>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    button: {
        margin: 5,
    },
    indicator: {
        justifyContent: "center",
        alignItems: "center",
    },
    verticalMargin: {
        marginVertical: 10,
    }
});
