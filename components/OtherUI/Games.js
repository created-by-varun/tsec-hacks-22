import React from "react";
import GamesHome from "./GameStack/Home";
import Game from './GameStack/GameWebView'
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();

function GamesStack() {
    return <Stack.Navigator headerMode="none" initialRouteName={'GamesHome'}>
        <Stack.Screen name="GamesHome" component={GamesHome} />
        <Stack.Screen name="GameScreen" component={Game} />
    </Stack.Navigator>;
}


export default GamesStack;
