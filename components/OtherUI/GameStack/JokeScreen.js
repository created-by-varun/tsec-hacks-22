import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import * as Speech from 'expo-speech';
import axios from 'axios';
import { Button, Text } from '@ui-kitten/components';

export default function JokeScreen() {

    const [joke, setJoke] = React.useState('');

    const getJoke = async () => {
        let joke = await axios.get('https://backend-omega-seven.vercel.app/api/getjoke');
        console.log(joke.data[0]);
        setJoke(joke.data[0]);
    }

    React.useEffect(() => {
        getJoke();
    }, []);
    React.useEffect(() => {
        speak();
    }, [joke]);

  const speak = () => {
    const thingToSay = joke.question;
    Speech.speak(thingToSay);
    setTimeout(() => {
        Speech.speak(joke.punchline);
    }, 3500);
  };

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
        <View style={{padding: 20, paddingTop: 30}}>
            <Text></Text>
            {joke.question && (
            <Text style={styles.question}>{joke.question}</Text>
            )}
            {joke.punchline && (
            <Text style={styles.punchline}>{joke.punchline}</Text>
            )}
      <Button onPress={getJoke}>Click here for a new joke</Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    question: {
        fontSize: 20,
        marginBottom: 20,
    },
    punchline: {
        fontSize: 20,
        marginBottom: 20,
    }
});