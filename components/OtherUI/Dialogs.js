import React, { useState } from "react";
import {
    StyleSheet,
    SafeAreaView,
    View,
    ScrollView,
    Image,
    TouchableOpacity,
    Alert
} from "react-native";
import { Video, AVPlaybackStatus } from "expo-av";
import { Text, Avatar } from "@ui-kitten/components";
import ImageView from "react-native-image-viewing";
import * as Notifications from 'expo-notifications';

Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: true,
      shouldSetBadge: true,
    }),
  });
  
  Notifications.requestPermissionsAsync()
    .then(permission => {
      Notifications.scheduleNotificationAsync({
        content: {
            title: 'Reminder',
            subtitle: 'Call your family members and check in on them now!',
        },
        trigger: {
            seconds: 5,
        }
      });
    })
  
const DialogsScreen = ({ navigation }) => {
    const patientData = {
        name: "John Doe",
        age: "30",
    };
    const video = React.useRef(null);
    const [status, setStatus] = React.useState({});

    const images = [
        {
            uri: "https://images.unsplash.com/photo-1511895426328-dc8714191300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        },
        {
            uri: "https://images.unsplash.com/photo-1581579186913-45ac3e6efe93?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
        },
        {
            uri: "https://images.unsplash.com/photo-1622610607501-32ac9c927216?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
        },
        {
            uri: "https://images.unsplash.com/photo-1561524891-8e08ab8569f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
        },
        {
            uri: "https://images.unsplash.com/photo-1638202948587-ac48463ddb1f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        },
    ];

    const [visible, setIsVisible] = useState(false);

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView style={{ flex: 1, backgroundColor: "#fff" }}>
                <View style={{ padding: 20, paddingTop: 30 }}>
                    {/* Header */}
                    <View
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "space-between",
                        }}
                    >
                        <Text category={"h4"}>{patientData.name}</Text>
                        <Avatar
                            size="small"
                            source={require("../../assets/avatar.jpeg")}
                        />
                    </View>

                    {/* Banner cards */}
                    <View
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                            paddingTop: 40,
                            marginBottom: 40,
                        }}
                    >
                        <TouchableOpacity onPress={() => navigation.navigate('FamilyScreen')} style={[styles.bannerCard]}>
                            <Image
                                source={require("../../assets/call.png")}
                                style={{ width: 150, height: 100 }}
                            />
                            <Text
                                category={"h6"}
                                style={{
                                    color: "white",
                                    marginTop: 10,
                                    fontWeight: "600",
                                }}
                            >
                                Call your family
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.bannerCard2} onPress={() => navigation.navigate('Slider')}>
                            <Image
                                source={require("../../assets/game.png")}
                                style={{ width: 150, height: 100 }}
                            />
                            <Text
                                category={"h6"}
                                style={{
                                    color: "white",
                                    marginTop: 10,
                                    fontWeight: "600",
                                }}
                            >
                                Play some games
                            </Text>
                        </TouchableOpacity>
                    </View>

                    {/* Memories - Media */}
                    <Text category={"h5"}>Memories</Text>
                    <View style={{ flexDirection: "row", marginTop: 20 }}>
                        <TouchableOpacity
                            style={{ flex: 1, marginRight: 5 }}
                            onPress={() => setIsVisible(true)}
                        >
                            <Image
                                source={{
                                    uri: "https://images.unsplash.com/photo-1511895426328-dc8714191300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
                                }}
                                style={{
                                    flex: 1,
                                    width: "100%",
                                    height: 200,
                                }}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{ flex: 1, marginLeft: 5 }}
                            onPress={() => setIsVisible(true)}
                        >
                            <Image
                                source={{
                                    uri: "https://images.unsplash.com/photo-1581579186913-45ac3e6efe93?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
                                }}
                                style={{
                                    flex: 1,
                                    width: "100%",
                                    height: 200,
                                }}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: "row", marginTop: 10 }}>
                        <TouchableOpacity
                            style={{ flex: 1 }}
                            onPress={() => setIsVisible(true)}
                        >
                            <Image
                                source={{
                                    uri: "https://images.unsplash.com/photo-1622610607501-32ac9c927216?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
                                }}
                                style={{ flex: 1, width: "100%", height: 100 }}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{ flex: 1, marginHorizontal: 10 }}
                            onPress={() => setIsVisible(true)}
                        >
                            <Image
                                source={{
                                    uri: "https://images.unsplash.com/photo-1561524891-8e08ab8569f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
                                }}
                                style={{
                                    flex: 1,
                                    width: "100%",
                                    height: 100,
                                }}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{ flex: 1 }}
                            onPress={() => setIsVisible(true)}
                        >
                            <Image
                                source={{
                                    uri: "https://images.unsplash.com/photo-1638202948587-ac48463ddb1f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
                                }}
                                style={{ flex: 1, width: "100%", height: 100 }}
                            />
                        </TouchableOpacity>
                    </View>
                    <Video
                        style={styles.video}
                        source={{
                            uri: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
                        }}
                        useNativeControls
                        resizeMode="contain"
                    />
                    <ImageView
                        style={{ width: 400, height: 200 }}
                        images={images}
                        imageIndex={0}
                        visible={visible}
                        onRequestClose={() => setIsVisible(false)}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    verticalMargin: {
        marginVertical: 10,
    },
    bannerCard: {
        flex: 1,
        borderRadius: 8,
        padding: 10,
        backgroundColor: "#3366FF",
        marginRight: 5,
        alignItems: "center",
    },
    bannerCard2: {
        flex: 1,
        borderRadius: 8,
        padding: 10,
        backgroundColor: "#F0740E",
        marginLeft: 5,
        alignItems: "center",
    },
    video: {
        height: 210,
        width: '100%',
        marginTop: 10
    }
});

export default DialogsScreen;
