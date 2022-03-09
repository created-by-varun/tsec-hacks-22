import React from "react";
import { SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Drawer, DrawerItem, IndexPath, Icon } from "@ui-kitten/components";
import DoctorUI from "./screens/Doctor";
import CareTakerUI from "./screens/CareTaker";
import PatientUI from "./screens/Patient";
import Family from "./components/OtherUI/Famiy";
import { createStackNavigator } from "@react-navigation/stack";

const { Navigator, Screen } = createDrawerNavigator();

const Stack = createStackNavigator();

// Importing icons required
const PersonIcon = (props) => <Icon {...props} name="person-outline" />;
const DoctorIcon = (props) => <Icon {...props} name="person-add-outline" />;
const CareTakerIcon = (props) => <Icon {...props} name="thermometer-outline" />;
const FamilyIcon = (props) => <Icon {...props} name="people-outline" />;

// Side Navigation Drawer
const DrawerContent = ({ navigation, state }) => (
  <SafeAreaView style={{ flex: 1 }}>
    <Drawer
      selectedIndex={new IndexPath(state.index)}
      onSelect={(index) => navigation.navigate(state.routeNames[index.row])}
    >
      <DrawerItem title="Patient" accessoryLeft={PersonIcon} />
      <DrawerItem title="Doctor" accessoryLeft={DoctorIcon} />
      <DrawerItem title="Caretaker" accessoryLeft={CareTakerIcon} />
    </Drawer>
  </SafeAreaView>
);

const HomeNavigator = () => (
  <Navigator drawerContent={(props) => <DrawerContent {...props} />}>
    <Screen name="OtherUI" component={PatientUI} />
    <Screen name="Inputs" component={DoctorUI} />
    <Screen name="Typography" component={CareTakerUI} />
  </Navigator>
);

const RootNavigator = () => {
  return (
    <Stack.Navigator headerMode='none'>
      <Stack.Screen name="Root" component={HomeNavigator} >
      </Stack.Screen>
      <Stack.Screen name="FamilyScreen" component={Family}></Stack.Screen>
    </Stack.Navigator>
  )
}

export const AppNavigator = () => (
  <NavigationContainer>
    <RootNavigator />
  </NavigationContainer>
);
