import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useState } from "react";

import AboutScreen from "./about/About";
import ChangePasswordScreen from "./change-password/ChangePassword";
import UserScreen from "./UserInfo/UserInfo";
import UserScreenUpdate from "./UserInfo/UserInfoUpdate";
const Stack = createNativeStackNavigator();

const Route = () => {
  // const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState("UserScreen");
  return (
    <Stack.Navigator initialRouteName={isLoading} screenOptions={{ headerShown: false }}>
      <Stack.Screen name="UserScreen" component={UserScreen} />
      <Stack.Screen name="AboutScreen" component={AboutScreen} />
      <Stack.Screen name="ChangePasswordScreen" component={ChangePasswordScreen} />
      <Stack.Screen name="UserScreenUpdate" component={UserScreenUpdate} />
    </Stack.Navigator>
  );
};

export default Route;
