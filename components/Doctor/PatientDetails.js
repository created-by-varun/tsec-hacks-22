import React from "react";
import { StyleSheet, SafeAreaView, View, ScrollView } from "react-native";
import {
    Text,
    Avatar,
    Tab,
    TabView,
    Icon,
    Layout,
} from "@ui-kitten/components";

import MedicalDetails from "./UI/Medical";
import Personal from "./UI/Personal";

const PatientDetails = ({ navigation, hideActions, route, appUser }) => {
    const [User, setUser] = React.useState(null);
    const [selectedIndex, setSelectedIndex] = React.useState(0);
    const PersonIcon = props => <Icon {...props} name="person-outline" />;

    React.useEffect(() => {
        if (route?.params.user) {
            setUser(route?.params.user);
        } else {
            if(appUser) setUser(appUser)
        }
    }, []);

    const EmailIcon = props => <Icon {...props} name="email-outline" />;

    const shouldLoadComponent = index => index === selectedIndex;

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView style={{ flex: 1, backgroundColor: "#fff" }}>
                <View style={styles.headerCard}>
                    <Avatar
                        style={styles.avatar}
                        source={require("../../assets/avatar.jpeg")}
                    />
                    <View style={styles.headerTxtCon}>
                        <Text category="h5" style={{ marginBottom: 10 }}>
                            {User?.name}
                        </Text>
                        <Text style={styles.text}>
                            Blood Type: {User?.bloodType}
                        </Text>
                        <Text style={styles.text}>Age: {User?.age }</Text>
                        <Text style={styles.text}>
                            {hideActions ? "Doctor" : "Caretaker"}:{" "}
                            {hideActions ? User?.doctorname : User?.caretaker}
                        </Text>
                    </View>
                </View>
                <TabView
                    selectedIndex={selectedIndex}
                    shouldLoadComponent={shouldLoadComponent}
                    onSelect={index => {
                        setSelectedIndex(index);
                    }}
                >
                    <Tab title="Medical" icon={PersonIcon}>
                        <View style={styles.tabContainer}>
                            <ScrollView showsVerticalScrollIndicator="false">
                                <MedicalDetails hideActions={hideActions} />
                            </ScrollView>
                        </View>
                    </Tab>
                    <Tab title="Personal" icon={EmailIcon}>
                        <Layout style={styles.tabContainer}>
                            <ScrollView>
                                <Personal />
                            </ScrollView>
                        </Layout>
                    </Tab>
                </TabView>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    avatar: {
        width: 110,
        height: 110,
    },
    headerTxtCon: {
        marginLeft: 20,
    },
    text: {
        fontSize: 14,
        lineHeight: 24,
    },
    headerCard: {
        backgroundColor: "white",
        padding: 20,
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 8,
        elevation: 2,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
    },
    tabContainer: {
        padding: 20,
        height: 600,
        overflow: "scroll",
    },
});

export default PatientDetails;
