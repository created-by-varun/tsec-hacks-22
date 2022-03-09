import React from "react";
import { StyleSheet, SafeAreaView, View, ScrollView } from "react-native";
import {
    Text, Avatar, Tab, TabView, Icon, Layout
} from "@ui-kitten/components";

const PatientDetails = ({ navigation }) => {
    const [selectedIndex, setSelectedIndex] = React.useState(null);
    const PersonIcon = (props) => (
        <Icon {...props} name='person-outline' />
    );
    
    const EmailIcon = (props) => (
        <Icon {...props} name='email-outline' />
    );


    const shouldLoadComponent = (index) => index === selectedIndex;

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView style={{ flex: 1, backgroundColor: "#fff" }}>
                <View style={styles.headerCard}>
                    <Avatar style={styles.avatar} source={require('../../assets/avatar.jpeg')} />
                    <View style={styles.headerTxtCon}>
                        <Text category='h5' style={{ marginBottom: 10 }}>Patient Name</Text>
                        <Text style={styles.text}>Blood Type: O+</Text>
                        <Text style={styles.text}>Age: 40</Text>
                        <Text style={styles.text}>Caretaker: Nurse Meghana</Text>
                    </View>
                </View>
                <TabView
                    style={styles.tabView}
                    selectedIndex={selectedIndex}
                    shouldLoadComponent={shouldLoadComponent}
                    onSelect={index => setSelectedIndex(index)}>
                    <Tab title='Medical' icon={PersonIcon}>
                        <Layout style={styles.tabContainer}>
                            <Text category='h5'>ORDERS</Text>
                        </Layout>
                    </Tab>
                    <Tab title='Personal' icon={EmailIcon}>
                        <Layout style={styles.tabContainer}>
                            <Text category='h5'>USERS</Text>
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
        height: 110
    },
    headerTxtCon: {
        marginLeft: 20
    },
    text: {
        fontSize: 14,
        lineHeight: 24,
    },
    headerCard: {
        backgroundColor: 'white',
        padding: 20,
        flexDirection: 'row', alignItems: 'center',
        borderRadius: 8,
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
    },
    tabView: {
        backgroundColor: 'white'
    },
    tabContainer: {
        padding: 20,
        backgroundColor: 'white'
    }
});

export default PatientDetails;
