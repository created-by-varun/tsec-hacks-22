import React, { createContext, useState, useContext, useEffect } from "react";
import { SafeAreaView, View, ActivityIndicator } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from '@react-navigation/stack';
import { Drawer, DrawerItem, IndexPath, Icon } from "@ui-kitten/components";
import DoctorUI from "./screens/Doctor";
import CareTakerUI from "./screens/CareTaker";
import PatientUI from "./screens/Patient";
import LoginScreen from "./screens/Auth/login";
import SignUpScreen from "./screens/Auth/signup";
import Firebase from "./Firebase";

const AuthenticatedUserContext = createContext({});

const { Navigator, Screen } = createDrawerNavigator();
const Stack = createStackNavigator();

// Importing icons required
const PersonIcon = (props) => <Icon {...props} name="person-outline" />;
const DoctorIcon = (props) => <Icon {...props} name="person-add-outline" />;
const CareTakerIcon = (props) => <Icon {...props} name="thermometer-outline" />;


const auth = Firebase.auth();

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

const AuthenticatedUserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    <AuthenticatedUserContext.Provider value={{ user, setUser }}>
      {children}
    </AuthenticatedUserContext.Provider>
  );
};

const AuthStack = () => (
  <Stack.Navigator headerMode='none'>
    <Stack.Screen name='Login' component={LoginScreen} />
    <Stack.Screen name='Signup' component={SignUpScreen} />
  </Stack.Navigator>
)

const HomeNavigator = () => (
  <Navigator drawerContent={(props) => <DrawerContent {...props} />}>
    <Screen name="OtherUI" component={PatientUI} />
    <Screen name="Inputs" component={DoctorUI} />
    <Screen name="Typography" component={CareTakerUI} />
  </Navigator>
);

const RootNavigator = () => {
  const { user, setUser } = useContext(AuthenticatedUserContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // onAuthStateChanged returns an unsubscriber
    const unsubscribeAuth = auth.onAuthStateChanged(async authenticatedUser => {
      try {
        await (authenticatedUser ? setUser(authenticatedUser) : setUser(null));
        console.log(authenticatedUser);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    });

    // unsubscribe auth listener on unmount
    return unsubscribeAuth;
  }, []);


  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size='large' />
      </View>
    );
  }

  return (
    <NavigationContainer>
      {user ? <HomeNavigator /> : <AuthStack />}
    </NavigationContainer>
  )
}

export const AppNavigator = () => (
  <AuthenticatedUserProvider>
    <RootNavigator />
  </AuthenticatedUserProvider>
);
