import { Text, Button, Icon, Avatar, List, ListItem } from "@ui-kitten/components";
import React from "react";
import { View, StyleSheet } from 'react-native'

const data = new Array(4).fill({
    title: 'Title for Item',
    description: 'Description for Item',
});

const Medical = () => {

    const renderItemAccessory = (props) => (
        <Button status='danger' appearance='outline' size='tiny'>REMOVE</Button>
    );

    const ItemImage = (props) => (
        <Avatar
            {...props}
            style={[props.style, { tintColor: null }]}
            source={require('../../../assets/icon.png')}
        />
    );

    const renderItem = ({ item, index }) => (
        <ListItem
            key={index}
            title={`${item.title} ${index + 1}`}
            description={`${item.description} ${index + 1}`}
            accessoryRight={renderItemAccessory}
            accessoryLeft={ItemImage}
        />
    );

    const EditIcon = (props) => (
        <Icon {...props} name='edit' />
    );

    const DeleteIcon = (props) => (
        <Icon {...props} name='trash-2-outline' />
    );

    const CardHeader = (data) => (<>
        <Text style={styles.name}>Medication Name</Text>
        <View style={{ flexDirection: 'row' }}>
            <Text style={styles.date}>From: 12/12/2021</Text>
            <Text style={styles.date}>End: 12/12/2022</Text>
        </View>
    </>)

    return (
        <View>
            <View style={{ marginBottom: 20 }}>
                <View style={styles.box}>
                    <Text style={styles.when}>
                        BP
                    </Text>
                    <Text style={styles.when}>
                        Normal
                    </Text>
                </View>
                <View style={styles.box}>
                    <Text style={styles.when}>
                        Sugar
                    </Text>
                    <Text style={styles.when}>
                        Normal
                    </Text>
                </View>
                <View style={styles.box}>
                    <Text style={styles.when}>
                        Following Diet
                    </Text>
                    <Text style={styles.when}>
                        Yes
                    </Text>
                </View>
                <View style={styles.box}>
                    <Text style={styles.when}>
                        Overall Health
                    </Text>
                    <Text style={styles.when}>
                        Better
                    </Text>
                </View>
                <View style={styles.box}>
                    <Text style={styles.when}>
                        Overall Interaction
                    </Text>
                    <Text style={styles.when}>
                        Better
                    </Text>
                </View>
            </View>
            <View style={{ marginTop: 10 }}>
                <View style={styles.Card}>
                    <View style={{ flexDirection: 'row', marginRight: 8, justifyContent: 'space-between' }}>
                        <Text style={styles.name} > Recommended Diet</Text>
                        <Button size='tiny'>ADD</Button>
                    </View>
                    <List
                        data={data}
                        renderItem={renderItem}
                    />
                </View>
            </View>
            <View>
                <Text category={'h5'}>
                    Current Dosage
                </Text>
                <View style={styles.Card}>
                    <CardHeader></CardHeader>
                    <View style={styles.dosageTimings}>
                        <Text style={styles.when}>Dosage directions</Text>
                        <Text>Morning, Afternoon, Evening</Text>
                    </View>
                    <Text style={styles.desc}>Directions for the caretaker and other remarks</Text>
                    <View style={{
                        flexDirection: 'row',
                        marginTop: 20
                    }}>
                        <Button accessoryLeft={EditIcon} style={[styles.button, { marginRight: 10 }]} appearance='filled'>
                            EDIT
                        </Button>

                        <Button accessoryLeft={DeleteIcon} style={[styles.button, { marginLeft: 10 }]} status='danger' appearance='outline'>
                            END
                        </Button>
                    </View>
                </View>
            </View>
            <View style={{ marginTop: 10 }}>
                <Text category={'h5'}>
                    Previous  Dosage
                </Text>
                <View style={styles.Card}>
                    <CardHeader>
                    </CardHeader>
                </View>
                <View style={styles.Card}>
                    <CardHeader>
                    </CardHeader>
                </View>
                <View style={styles.Card}>
                    <CardHeader>
                    </CardHeader>
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
        lineHeight: 24,
        flex: 1
    },
    box: { flexDirection: 'row', paddingVertical: 10, borderBottomColor: '#828282', borderBottomWidth: 1 },
    desc: {
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#828282',
        padding: 10,
        marginTop: 6
    },
    button: {
        flex: 1,
    }
});


export default Medical