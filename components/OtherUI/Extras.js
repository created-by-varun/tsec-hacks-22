import React, { useRef, useState, useEffect } from "react";
import {
    AppState,
    StyleSheet,
    SafeAreaView,
    View,
    ScrollView,
    Animated,
} from "react-native";
import { DrawerActions } from "@react-navigation/native";
import {
    Divider,
    Layout,
    Text,
    TopNavigationAction,
    TopNavigation,
    Icon,
    Spinner,
    Button,
} from "@ui-kitten/components";

// NOFITICATIONS,  PERMISSION REQUEST ON IOS FOR NOTIFICATION ACCESS
import * as Notifications from 'expo-notifications';
import * as Permissions from 'expo-permissions'

Notifications.setNotificationHandler({
    handleNotification: async () => {
        return {
            shouldShowAlert: true, // also show notification when app is running
        }
    }
});

export const ExtrasScreen = ({ navigation }) => {
    // TOP BAR MENU BUTTON
    const Menu = props => <Icon {...props} name="menu-outline" />;
    const OpenMenu = () => {
        navigation.dispatch(DrawerActions.toggleDrawer());
    };
    const MenuAction = () => (
        <TopNavigationAction icon={Menu} onPress={OpenMenu} />
    );

    // FADE ANIMATION
    const fadeAnim = useRef(new Animated.Value(0)).current;
    const fadeIn = () => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true,
        }).start();
    };

    const fadeOut = () => {
        Animated.timing(fadeAnim, {
            toValue: 0,
            duration: 1000,
            useNativeDriver: true,
        }).start();
    };

    // Notification Body
    const triggerNotificationHandler = () => {
      Notifications.scheduleNotificationAsync({
        content: {
          title: 'Demo notification',
          body: 'This is a test notification. Lorem upsum dolor sit amet...'
        },
        trigger: null // setting trigger to null -> invokes notification imediately
      });
    };

    // APP STATE / LIFECYCLLE EVENTS
    const appState = useRef(AppState.currentState);
    const [appStateVisible, setAppStateVisible] = useState(appState.current);

    useEffect(() => {
        Permissions.getAsync(Permissions.NOTIFICATIONS).then(statusObj => {
          if(statusObj.status !== 'granted'){
            return Permissions.askAsync(Permissions.NOTIFICATIONS);
          }
          return statusObj;
        }).then(statusObj => {
          if(statusObj.status !== 'granted'){
            console.log("Can't send notifications :(")
            return;
          }
        });
        AppState.addEventListener("change", _handleAppStateChange);

        return () => {
            AppState.removeEventListener("change", _handleAppStateChange);
        };
    }, []);

    const _handleAppStateChange = nextAppState => {
        if (
            appState.current.match(/inactive|background/) &&
            nextAppState === "active"
        ) {
            console.log("App has come to the foreground!");
        }

        appState.current = nextAppState;
        setAppStateVisible(appState.current);
        console.log("AppState", appState.current);
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <TopNavigation
                title="Extras"
                alignment="center"
                accessoryLeft={MenuAction}
            />
            <Layout style={{ flex: 1, padding: 15 }}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Text category="h5">App State</Text>
                    <View>
                        <Text style={styles.verticalMargin}>
                            Current application state is: {appStateVisible}
                        </Text>
                    </View>

                    {/* SPINNER / LOADING INDICATOR */}
                    <Text style={styles.verticalMargin} category="h5">
                        Spinner / Loading Indicator
                    </Text>
                    <Spinner />


                    {/* ANIMATIONS USING ANIMATED API */}
                    <Text style={styles.verticalMargin} category="h5">
                        Animations
                    </Text>
                    <View style={styles.container}>
                        <Animated.View
                            style={[
                                styles.fadingContainer,
                                {
                                    opacity: fadeAnim, // Bind opacity to animated value
                                },
                            ]}
                        >
                            <Text style={styles.fadingText}>Fading View!</Text>
                        </Animated.View>
                        <View style={styles.buttonRow}>
                            <Button onPress={fadeIn} appearance="ghost">
                                {" "}
                                Fade In
                            </Button>
                            <Button onPress={fadeOut} appearance="ghost">
                                {" "}
                                Fade Out{" "}
                            </Button>
                        </View>
                    </View>

                    {/* BUTTON TO TRIGGER NOTIFICATIONS */}
                    <Button onPress={triggerNotificationHandler}>
                        Send Notification
                    </Button>
                </ScrollView>
            </Layout>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    verticalMargin: {
        marginVertical: 10,
    },
    container: {
        marginVertical: 10,
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    fadingContainer: {
        paddingVertical: 8,
        paddingHorizontal: 16,
        backgroundColor: "orange",
    },
    fadingText: {
        fontSize: 28,
        textAlign: "center",
        margin: 10,
    },
    buttonRow: {
        flexDirection: "row",
        marginVertical: 16,
    },
});

export default ExtrasScreen;
