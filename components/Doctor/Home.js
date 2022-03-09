import React from "react";
import { StyleSheet, SafeAreaView, View, ScrollView, TouchableWithoutFeedback } from "react-native";
import {
    Text,
    Avatar,
    Icon,
    Input
} from "@ui-kitten/components";

const DocHome = ({ navigation }) => {

    const [value, setValue] = React.useState('');
    const renderIcon = (props) => (
        <TouchableWithoutFeedback >
            <Icon {...props} name={'search'} />
        </TouchableWithoutFeedback>
    );

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView style={{ flex: 1, backgroundColor: "#fff" }}>
                <View style={{ padding: 20, paddingTop: 30 }}>
                    {/* Header */}
                    <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                        <Input
                            style={styles.input}
                            value={value}
                            placeholder='Search Patient'
                            accessoryRight={renderIcon}
                            onChangeText={nextValue => setValue(nextValue)}
                        />
                        <Avatar size='small' source={require('../../assets/avatar.jpeg')} />
                    </View>
                    
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    input: {
        flex: 1,
        marginRight: 20,
    }
});

export default DocHome;
