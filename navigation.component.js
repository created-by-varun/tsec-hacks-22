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
const BrowserIcon = (props) => <Icon {...props} name="browser-outline" />;
const ColorPaletteIcon = (props) => (
  <Icon {...props} name="color-palette-outline" />
);
const StarIcon = (props) => <Icon {...props} name="star" />;

// Side Navigation Drawer
const DrawerContent = ({ navigation, state }) => (
  <SafeAreaView style={{ flex: 1 }}>
    <Drawer
      selectedIndex={new IndexPath(state.index)}
      onSelect={(index) => navigation.navigate(state.routeNames[index.row])}
    >
      <DrawerItem title="Patient" accessoryLeft={StarIcon} />
      <DrawerItem title="Doctor" accessoryLeft={StarIcon} />
      <DrawerItem title="Caretaker" accessoryLeft={ColorPaletteIcon} />
      <DrawerItem title="Family" accessoryLeft={BrowserIcon} />
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
