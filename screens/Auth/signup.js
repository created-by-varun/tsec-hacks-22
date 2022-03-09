import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Firebase from '../../Firebase';
import {
    Text,
    Avatar,
    Icon,
    Input,
    Button
} from "@ui-kitten/components";
const auth = Firebase.auth();

const signUpScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onHandleSignup = async () => {
        try {
            if (email !== '' && password !== '') {
                await auth.createUserWithEmailAndPassword(email, password);
            }
        } catch (error) {
            setSignupError(error.message);
        }
    };


    const renderIcon = (props) => (
        <Icon {...props} name={'person'} />
    );

    const passwordIcon = (props) => (
        <Icon {...props} name={'unlock-outline'} />
    );


    return (
        <View style={styles.container}>
            <StatusBar style='dark-content' />
            <Text style={styles.title}>Login</Text>
            <Input
                style={styles.input}
                value={email}
                size='large'
                placeholder='Enter Email'
                accessoryLeft={renderIcon}
                onChangeText={nextValue => setEmail(nextValue)}
            />
            <Input
                style={styles.input}
                value={password}
                placeholder='Enter Password'
                size='large'
                accessoryLeft={passwordIcon}
                onChangeText={nextValue => setPassword(nextValue)}
            />
            <Button style={{ marginTop: 20 }} onPress={() => onHandleSignup()}>
                Submit
            </Button>
            <Button style={{ marginTop: 20 }} onPress={() => navigation.navigate('Login')} appearance="ghost">
                Already have a account?  Login
            </Button>
        </View>
    );
}
export default signUpScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 50,
        paddingHorizontal: 20
    },
    title: {
        fontSize: 24,
        fontWeight: '600',
        color: 'black',
        alignSelf: 'center',
        paddingBottom: 24
    },
    input: {
        paddingVertical: 12,
        borderRadius: 8,
    }
});
