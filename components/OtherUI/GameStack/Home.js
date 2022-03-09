import React from "react";
import {
    StyleSheet,
    SafeAreaView,
    View,
    ScrollView,
    Image,
    TouchableOpacity,
} from "react-native";

import {
    Text,
} from "@ui-kitten/components"

const GamesHome = ({ navigation }) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView style={{ flex: 1, backgroundColor: "#fff" }}>
                <View style={{ padding: 20, paddingTop: 30 }}>
                    <Text style={{ marginBottom: 30 }} category={"h4"}>
                        Play some games
                    </Text>

                    {/* GAME CARDS */}
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate('GameScreen', {uri: 'https://playtictactoe.org/'})
                        }}
                        style={{
                            backgroundColor: "#3366FF",
                            borderRadius: 8,
                            flexDirection: "row",
                            marginBottom: 20,
                        }}
                    >
                        <Image
                            style={{ width: 200, height: 200, flex: 1 }}
                            source={require("../../../assets/tic.png")}
                        />
                        <View
                            style={{
                                flex: 1,
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            <Text category={"h4"} style={{ color: "white" }}>
                                Tic Tac Toe
                            </Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={{
                            backgroundColor: "#054D4D",
                            borderRadius: 8,
                            flexDirection: "row",
                            marginBottom: 20,
                        }}
                        onPress={() => {
                            navigation.navigate('GameScreen', {uri: 'https://www.improvememory.org/wp-content/games/slide/index.html'})
                        }}
                    >
                        <View
                            style={{
                                flex: 1,
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            <Text
                                category={"h4"}
                                style={{
                                    color: "white",
                                    width: "60%",
                                }}
                            >
                                Slide
                            </Text>
                        </View>
                        <Image
                            style={{ width: 200, height: 200, flex: 1 }}
                            source={require("../../../assets/slide.jpeg")}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate('GameScreen', {uri: 'https://www.improvememory.org/wp-content/games/trickycups_e_fullscreen.htm'})
                        }}
                        style={{
                            backgroundColor: "#F4e392",
                            borderRadius: 8,
                            flexDirection: "row",
                            marginBottom: 20,
                        }}
                    >
                        <Image
                            style={{ width: 200, height: 200, flex: 1 }}
                            source={require("../../../assets/cups.jpeg")}
                        />
                        <View
                            style={{
                                flex: 1,
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            <Text category={"h4"}>
                                Tricky cups
                            </Text>
                        </View>
                    </TouchableOpacity>

                    
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    verticalMargin: {
        marginVertical: 10,
    },
});

export default GamesHome;
