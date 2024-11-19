import { ThemeProvider } from "@rneui/themed";
import React from "react";
import { SafeAreaProvider, SafeAreaProviderProps } from "react-native-safe-area-context";

import tw from "@/utils/tailwind";

import { lightTheme } from "./themes";

export type ProviderProps = SafeAreaProviderProps & {
  // No props
};

export default function Provider({ children }: ProviderProps) {
  return (
    <SafeAreaProvider style={tw`flex-1 bg-white`}>
      <ThemeProvider theme={lightTheme}>{children}</ThemeProvider>
    </SafeAreaProvider>
  );
}
