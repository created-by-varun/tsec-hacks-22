import { Text, Button, Icon, Avatar, List, ListItem } from "@ui-kitten/components";
import React from "react";
import { View, StyleSheet } from 'react-native'

const data = new Array(4).fill({
    title: 'Title for Item',
    description: 'Description for Item',
});

const Personal = () => {

    return (
        <View>
            <>
                <Text category={'h5'} >Patient Info</Text>
                <View style={styles.Card}>
                    <View style={styles.box}>
                        <Text style={styles.when}>
                            DOB
                        </Text>
                        <Text style={styles.when}>
                            12/12/2001
                        </Text>
                    </View>
                    <View style={styles.box}>
                        <Text style={styles.when}>
                            Gender
                        </Text>
                        <Text style={styles.when}>
                            Male
                        </Text>
                    </View>
                    <View style={styles.box}>
                        <Text style={styles.when}>
                            Mobile
                        </Text>
                        <Text style={styles.when}>
                            90909090909
                        </Text>
                    </View>
                    <View style={styles.box}>
                        <Text style={styles.when}>
                            Address
                        </Text>
                        <Text style={styles.when}>
                        1st Foor, Nr Gune Hospital, Panvel City - 400601
                        </Text>
                    </View>
                </View></>
            <>
                <Text category={'h5'} >Contact Info</Text>
                <View style={styles.Card}>
                    <Text style={styles.name}>Mobile</Text>
                    <View style={styles.box}>
                        <Text style={styles.when}>
                            Family Member
                        </Text>
                        <Text style={styles.when}>
                            80183948473
                        </Text>
                    </View>
                    <View style={styles.box}>
                        <Text style={styles.when}>
                            Caretaker
                        </Text>
                        <Text style={styles.when}>
                            80183948473
                        </Text>
                    </View>
                    <View style={styles.box}>
                        <Text style={styles.when}>
                            Emergency
                        </Text>
                        <Text style={styles.when}>
                            80183948473
                        </Text>
                    </View>
                </View>
            </>
        </View>
    )
}

const styles = StyleSheet.create({
    Card: {
        backgroundColor: 'white',
        padding: 20,
        marginVertical: 10,
        flexDirection: 'column',
        borderRadius: 8,
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
    },
    name: {
        fontSize: 20,
        fontWeight: '700',
        marginBottom: 10
    },
    when: {
        fontSize: 16,
        fontWeight: '600',
        lineHeight: 24,
        flex: 1
    },
    box: { flexDirection: 'row', paddingVertical: 5, alignItems: 'center' },

});


export default Personal