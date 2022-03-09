import React from "react";
import { StyleSheet, SafeAreaView, View } from "react-native";
import { DrawerActions } from "@react-navigation/native";
import {
    Layout,
    Text,
    Button,
    TopNavigationAction,
    TopNavigation,
    Icon,
} from "@ui-kitten/components";
import SimpleDialog from "./Modals/Simple";
import AlertDialog from "./Modals/Alert";

// Redux
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { increment, reset, decrement } from "../../store/actions/count";

const DialogsScreen = ({ navigation }) => {
    const [visible, setVisible] = React.useState(false);

    const dispatch = useDispatch();
    const Menu = (props) => <Icon {...props} name="menu-outline" />;
    const count = useSelector((state) => state.counter.count);
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
            <TopNavigation
                title=""
                alignment="center"
                accessoryLeft={MenuAction}
            />
            <Layout style={{ flex: 1, padding: 15 }}>
                <Text>Patients home</Text>
            </Layout>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    verticalMargin: {
        marginVertical: 10,
    },
});

export default DialogsScreen;
