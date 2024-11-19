import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useState } from "react";

import DocumentScreen from "./document/Document";
import Login from "./login/Login";
import MainScreen from "./main/route";
import SplashScreen from "./splash/Splash";

export type RootStackParamList = {
  SplashScreen: undefined;
  LoginScreen: undefined;
  DocumentScreen: undefined;
  MainScreen: undefined;
};
const RootStack = createNativeStackNavigator<RootStackParamList>();

const AppRoute = () => {
  // Init status
  const [status, setStatus] = useState("loading");

  setTimeout(() => {
    if (status === "loading") {
      setStatus("notLogged");
    }
  }, 2500);

  // Show splash screen on wait request check auth
  if (status === "loading") {
    return <SplashScreen />;
  }

  // If not logged in yet
  // if (status === "notLogged") {
  //   return <LoginScreen onLogin={() => setStatus("logged")} />;
  // }

  // If already login
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="LoginScreen" screenOptions={{ headerShown: false }}>
        <RootStack.Screen name="MainScreen" component={MainScreen} />
        <RootStack.Screen name="DocumentScreen" component={DocumentScreen} />
        <RootStack.Screen
          name="LoginScreen"
          component={Login}
          options={{
            headerShown: false,
          }}
        />
        <RootStack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{
            headerShown: false,
          }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default AppRoute;
