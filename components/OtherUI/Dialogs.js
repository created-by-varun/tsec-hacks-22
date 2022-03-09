import React from "react";
import { StyleSheet, SafeAreaView, View, ScrollView } from "react-native";
import { DrawerActions } from "@react-navigation/native";
import {
    Layout,
    Text,
    Button,
    TopNavigationAction,
    TopNavigation,
    Icon,
    Avatar,
} from "@ui-kitten/components";

// Redux
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { increment, reset, decrement } from "../../store/actions/count";

const DialogsScreen = ({ navigation }) => {
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

    const patientData = {
        name: "John Doe",
        age: "30",
    };

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
                            marginBottom: 40
                        }}
                    >
                        <View style={[styles.bannerCard]}>
                            <Text category={'h6'} style={{color: 'white'}}>Call your family</Text>
                        </View>
                        <View style={styles.bannerCard2}>
                            <Text category={'h6'} style={{color: 'white'}}>Play some games</Text>
                        </View>
                    </View>

                    {/* Memories - Media */}
                    <Text category={'h5'}>Memories</Text>

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
    },
    bannerCard2: {
        flex: 1,
        borderRadius: 8,
        padding: 10,
        backgroundColor: "#F0740E",
        marginLeft: 5,
    }
});

export default DialogsScreen;
