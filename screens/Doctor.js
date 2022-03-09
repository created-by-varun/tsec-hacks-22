import React from "react";
import DocHome from "../components/Doctor/Home";
import PatientDetails from "../components/Doctor/PatientDetails";
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();

function DocStack() {
    return <Stack.Navigator headerMode="none" initialRouteName={'DoctorHome'}>
        <Stack.Screen name="DoctorHome" component={DocHome} />
        <Stack.Screen name="PatientDetails" component={PatientDetails} />
    </Stack.Navigator>;
}

export default DocStack;
