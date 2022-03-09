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
    Avatar
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
                    <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                        <Text category={"h4"}>{patientData.name}</Text>
                        <Avatar size='small' source={require('../../assets/avatar.jpeg')}/>
                    </View>

                    {/* Banner cards */}
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

export default DialogsScreen;
