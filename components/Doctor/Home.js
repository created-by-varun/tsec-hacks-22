import React, { useEffect } from "react";
import { StyleSheet, SafeAreaView, View, ScrollView, TouchableWithoutFeedback } from "react-native";
import {
    Text,
    Avatar,
    Icon,
    Input
} from "@ui-kitten/components";
import { TouchableOpacity } from "react-native-gesture-handler";
import Firebase from "../../Firebase";
const auth = Firebase.auth();

const DocHome = ({ navigation }) => {

    const [value, setValue] = React.useState('');
    const renderIcon = (props) => (
        <TouchableWithoutFeedback >
            <Icon {...props} name={'search'} />
        </TouchableWithoutFeedback>
    );

    const login = async () => {
        await auth.signInWithEmailAndPassword('test@test.com', "SMart@123");
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView style={{ flex: 1, backgroundColor: "#fff" }}>
                <View style={{ padding: 20, paddingTop: 30 }}>
                    {/* Header */}
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Input
                            style={styles.input}
                            value={value}
                            placeholder='Search Patient'
                            accessoryRight={renderIcon}
                            onChangeText={nextValue => setValue(nextValue)}
                        />
                        <Avatar size='small' source={require('../../assets/avatar.jpeg')} />
                    </View>
                    <TouchableOpacity onPress={() => login()}>
                        <View style={styles.patientCard}>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={styles.patientInfo}>
                                    <Text category='h5'>Patient Name</Text>
                                    <View style={{ flexDirection: 'row', marginTop: 10 }}>
                                        <Text style={styles.text}>Blood Type: O+</Text>
                                        <Text style={styles.text}>Age: 40</Text>
                                    </View>
                                    <Text style={styles.text}>Caretaker: Nurse Meghana</Text>
                                </View>
                                <Avatar style={styles.avatar} source={require('../../assets/avatar.jpeg')} />
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    input: {
        flex: 1,
        marginRight: 20,
        marginBottom: 10
    },
    patientCard: {
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 8,
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        marginTop: 10
    },
    patientInfo: {
        paddingTop: 5,
        flex: 1,
    },
    text: {
        fontSize: 14,
        lineHeight: 24,
        flex: 1,
        fontWeight: '500'
    },
    avatar: {
        height: 86,
        width: 86,
    }
});

export default DocHome;
