import React from "react";
import { SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Drawer, DrawerItem, IndexPath, Icon } from "@ui-kitten/components";
import DoctorUI from "./screens/Doctor";
import CareTakerUI from "./screens/Family";
import FamilyUI from "./screens/CareTaker";
import PatientUI from "./screens/Patient";

const { Navigator, Screen } = createDrawerNavigator();

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
      <DrawerItem title="Family" accessoryLeft={FamilyIcon} />
    </Drawer>
  </SafeAreaView>
);

const HomeNavigator = () => (
  <Navigator drawerContent={(props) => <DrawerContent {...props} />}>
    <Screen name="OtherUI" component={PatientUI} />
    <Screen name="Inputs" component={DoctorUI} />
    <Screen name="Typography" component={CareTakerUI} />
    <Screen name="Buttons" component={FamilyUI} />
  </Navigator>
);

export const AppNavigator = () => (
  <NavigationContainer>
    <HomeNavigator />
  </NavigationContainer>
);
