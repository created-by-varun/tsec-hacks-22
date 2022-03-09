import React from "react";
import { View, ScrollView, StyleSheet, TouchableOpacity, Linking } from "react-native";
import { Text } from "@ui-kitten/components";
// import * as Linking from 'expo-linking';

const Family = () => {
    return (
        <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
        <View style={{padding: 20, paddingTop: 30}}>
            <Text category={'h4'} style={{marginBottom: 30}}>Call family members</Text>

            {/* member call cards */}
            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', backgroundColor: '#90e0ef', padding: 10, paddingHorizontal: 15, borderRadius: 8, marginBottom: 20}}>
                <View>
                    <Text style={styles.contactName}>John Smith</Text>
                    <Text style={styles.contactNum}>+91 3930293933</Text>
                </View>
                <TouchableOpacity style={styles.callBtn} onPress={()=>  Linking.openURL(`tel:3930293933`)}>
                    <Text style={styles.callTxt}>Call</Text>
                </TouchableOpacity>
            </View>

            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', backgroundColor: '#90e0ef', padding: 10, paddingHorizontal: 15, borderRadius: 8, marginBottom: 20}}>
                <View>
                    <Text style={styles.contactName}>Test User</Text>
                    <Text style={styles.contactNum}>+91 1234567890</Text>
                </View>
                <TouchableOpacity style={styles.callBtn} onPress={()=>  Linking.openURL(`tel:1234567890`)}>
                    <Text style={styles.callTxt}>Call</Text>
                </TouchableOpacity>
            </View>

            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', backgroundColor: '#90e0ef', padding: 10, paddingHorizontal: 15, borderRadius: 8, marginBottom: 20}}>
                <View>
                    <Text style={styles.contactName}>Test 2</Text>
                    <Text style={styles.contactNum}>+91 5432109876</Text>
                </View>
                <TouchableOpacity style={styles.callBtn} onPress={()=>  Linking.openURL(`tel:5432109876`)}>
                    <Text style={styles.callTxt}>Call</Text>
                </TouchableOpacity>
            </View>


        </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    contactName: {
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 10
    },
    contactNum: {
        fontSize: 18,
    },
    callBtn: {
        backgroundColor: 'white',
        padding: 10,
        paddingHorizontal: 20,
        borderRadius: 20,
    },
    callTxt: {
        fontWeight: '600',
        letterSpacing: 1,
    }
});

export default Family