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
          source={{ uri: 'https://wynk.in/music/album/patient-heart/um_00602508252372' }}
          />
      </>
    )
}

export default MusicScreen