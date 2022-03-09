import React from "react";
import {
    StyleSheet,
    SafeAreaView,
    View,
    ScrollView,
    Image,
    TouchableOpacity,
} from "react-native";
import { DrawerActions } from "@react-navigation/native";
import {
    Layout,
    Text,
    Button,
    TopNavigationAction,
    TopNavigation,
    Icon,
} from "@ui-kitten/components";

// Redux
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { increment, reset, decrement } from "../../store/actions/count";

const SliderScreen = ({ navigation }) => {
    const [visible, setVisible] = React.useState(false);

    const dispatch = useDispatch();
    const Menu = props => <Icon {...props} name="menu-outline" />;
    const count = useSelector(state => state.counter.count);
    const OpenMenu = () => {
        navigation.dispatch(DrawerActions.toggleDrawer());
    };
    const CancelModal = () => {
        setVisible(false);
    };
    const MenuAction = () => (
        <TopNavigationAction icon={Menu} onPress={OpenMenu} />
    );
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView style={{ flex: 1, backgroundColor: "#fff" }}>
                <View style={{ padding: 20, paddingTop: 30 }}>
                    <Text style={{ marginBottom: 30 }} category={"h4"}>
                        Play some games
                    </Text>

                    {/* GAME CARDS */}
                    <TouchableOpacity
                        style={{
                            backgroundColor: "#3366FF",
                            borderRadius: 8,
                            flexDirection: "row",
                            marginBottom: 20,
                        }}
                    >
                        <Image
                            style={{ width: 200, height: 200, flex: 1 }}
                            source={require("../../assets/tic.png")}
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
                            backgroundColor: "#F0740E",
                            borderRadius: 8,
                            flexDirection: "row",
                            marginBottom: 20,
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
                                Memory Cards
                            </Text>
                        </View>
                        <Image
                            style={{ width: 200, height: 200, flex: 1 }}
                            source={require("../../assets/tic.png")}
                        />
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

export default SliderScreen;
