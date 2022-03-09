import React from "react";
import CareHome from "../components/CareTaker/Home";
import PatientDetails from "../components/CareTaker/PatientDetails";
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();

function CareStack() {
    return <Stack.Navigator headerMode="none" initialRouteName={'CareHome'}>
        <Stack.Screen name="CareHome" component={CareHome} />
        <Stack.Screen name="PatientDetails" component={PatientDetails} />
    </Stack.Navigator>;
}

export default CareStack;
