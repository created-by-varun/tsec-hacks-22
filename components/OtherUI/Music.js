import React from "react";
import { WebView } from 'react-native-webview';
import { Text } from "@ui-kitten/components";
import { View } from "react-native";

const MusicScreen = () => {
    return (
      <>
        <View style={{padding: 20, backgroundColor: 'white'}}>
            <Text category={'h4'} style={{width: '80%'}}>Top calming music picks for today</Text>
        </View>
          <WebView 
          style={{flex: 1}}
          source={{ uri: 'https://open.spotify.com/playlist/1sbvt56bSpg6WBqVzIRpID' }}
          />
      </>
    )
}

export default MusicScreen