import React from "react";
import { StatusBar } from "react-native";

import AppRoute from "@/app/route";
import Provider from "@/configs/provider";

const App = () => {
  return (
    <Provider>
      <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />
      <AppRoute />
    </Provider>
  );
};

export default App;
