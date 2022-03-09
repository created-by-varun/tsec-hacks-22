import { Text } from "@ui-kitten/components";
import React from "react";
import { View, StyleSheet } from 'react-native'

const Medical = () => {
    return (
        <View>
            <View>
                <Text category={'h5'}>
                    Dosage
                </Text>
                <View style={styles.Card}>
                    <Text style={styles.name}>Medication Name</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.date}>From: 12/12/2021</Text>
                        <Text style={styles.date}>End: 12/12/2022</Text>
                    </View>
                    <View style={styles.dosageTimings}>
                        <Text style={styles.when}>Dosage directions</Text>
                        <Text>Morning, Afternoon, Evening</Text>
                    </View>
                    {/* <Input
                        style={styles.input}
                        value={value}
                        placeholder='Search Patient'
                        accessoryRight={renderIcon}
                        onChangeText={nextValue => setValue(nextValue)}
                    /> */}
                </View>
            </View>
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
        fontWeight: '700'
    },
    date: {
        flex: 1,
        marginVertical: 5
    },
    dosageTimings: {
        marginVertical: 10
    },
    when: {
        fontSize: 16,
        fontWeight: '600',
        lineHeight: 24
    }
});


export default Medical