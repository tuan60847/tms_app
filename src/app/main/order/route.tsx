import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

import { RootStackParamList } from "@/app/route";

import OrderScreen from "./Order/Order";
import OrderDetailScreen from "./OrderDetail/OrderDetail";
import OrderReportScreen from "./OrderReport/OrderReport";

export type OrderStackParamList = RootStackParamList & {
  OrderScreen: undefined;
  OrderDetailScreen: undefined;
  OrderReportScreen: undefined;
};

const Stack = createNativeStackNavigator<OrderStackParamList>();
const Route = () => {
  // const [isLoading, setIsLoading] = useState<boolean>(true);
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="OrderScreen" component={OrderScreen} />
      <Stack.Screen name="OrderDetailScreen" component={OrderDetailScreen} />
      <Stack.Screen name="OrderReportScreen" component={OrderReportScreen} />
    </Stack.Navigator>
  );
};

export default Route;
