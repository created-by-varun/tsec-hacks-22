import React from "react";
import { WebView } from 'react-native-webview';
import { Text } from "@ui-kitten/components";
import { View } from "react-native";

const GameWebView = ({route}) => {
  console.log(route);   
  const {uri} = route.params;
    return (
      <>
      {uri ? (
          <WebView 
          style={{flex: 1}}
          source={{ uri: uri }}
          />
      ): <View></View>}
      </>
    )
}

export default GameWebView