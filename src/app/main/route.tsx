import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";

import { RootStackParamList } from "@/app/route";
import { Icon } from "@/components/atoms";
import { colors } from "@/utils/tailwind";

import NotificationTabScreen from "./notification/Notification";
import OrderTabScreen from "./order/route";
import UserTabScreen from "./user-info/route";

const Tab = createBottomTabNavigator();

type NavigatorProps = NativeStackScreenProps<RootStackParamList>;
const Route = ({ route, navigation }: NavigatorProps) => {
  // Define components before render
  const tabBarIcon = {
    order: <Icon name="archive-outline" color={colors.black} size="large" />,
    notify: <Icon name="bell-outline" color={colors.black} size="large" />,
    user: <Icon name="account-circle-outline" color={colors.black} size="large" />,
  };
  const tabBarIconOrder = (focused: boolean) => {
    return <Icon name="archive-outline" color={focused ? colors.black : colors.blue[500]} size="large" />;
  };

  const tabBarActiveColor = "#51C469";
  const tabBarInActiveColor = "#bcbcbc";
  const tabBarBackGroundColor = colors.gray[100];
  return (
    <>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,

          tabBarItemStyle: {
            borderRadius: 12,
          },
          tabBarStyle: {
            backgroundColor: tabBarBackGroundColor,
            height: 50,
            paddingTop: 5,
            paddingBottom: 5,
          },

          tabBarLabelStyle: { fontSize: 12 },

          tabBarInactiveTintColor: tabBarInActiveColor,
          tabBarActiveTintColor: tabBarActiveColor,
        }}
      >
        <Tab.Screen
          name="OrderTabScreen"
          component={OrderTabScreen}
          options={{
            tabBarLabel: "Đơn hàng",
            // tabBarLabel: () => null,
            tabBarIcon: ({ focused }): React.JSX.Element => {
              return (
                <Icon name="archive-outline" color={focused ? tabBarActiveColor : tabBarInActiveColor} size="medium" />
              );
            },

            tabBarActiveBackgroundColor: tabBarBackGroundColor,
          }}
        />
        <Tab.Screen
          name="NotificationTabScreen"
          component={NotificationTabScreen}
          options={{
            tabBarLabel: "Thông báo",
            // tabBarLabel: () => null,
            tabBarIcon: ({ focused, color, size }) => {
              return (
                <Icon name="bell-outline" color={focused ? tabBarActiveColor : tabBarInActiveColor} size="medium" />
              );
            },
            tabBarActiveBackgroundColor: tabBarBackGroundColor,
          }}
        />
        <Tab.Screen
          name="UserTabScreen"
          component={UserTabScreen}
          options={{
            tabBarLabel: "Tài Khoản",
            // tabBarLabel: () => null,
            tabBarIcon: ({ focused, color, size }) => {
              return (
                <Icon
                  name="account-circle-outline"
                  color={focused ? tabBarActiveColor : tabBarInActiveColor}
                  size="medium"
                />
              );
            },
            tabBarActiveBackgroundColor: tabBarBackGroundColor,
          }}
        />
      </Tab.Navigator>
    </>
  );
};

export default Route;
