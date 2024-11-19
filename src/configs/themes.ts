import { createTheme } from "@rneui/themed";

import tw, { colors } from "@/utils/tailwind";

export const lightTheme = createTheme({
  mode: "light",
  lightColors: {
    white: colors.white,
    black: colors.black,
    background: colors.white,
    primary: colors.blue[700],
    secondary: colors.gray[700],
    error: colors.red[500],
    warning: colors.orange[500],
    success: colors.green[500],
    disabled: colors.neutral[400],
    divider: colors.gray[200],
  },
  components: {
    Input: {
      inputContainerStyle: tw`rounded-sm border border-gray-200 bg-white`,
      inputStyle: tw`px-4`,
      labelStyle: tw`pb-2 text-gray-700`,
      leftIconContainerStyle: tw`pl-4`,
      placeholderTextColor: colors.neutral[400],
      rightIconContainerStyle: tw`pr-4`,
      style: tw`text-base font-normal`,
    },
    Button: {
      buttonStyle: tw`gap-2`,
    },
    Dialog: {
      overlayStyle: tw`w-90 bg-white`,
    },
    DialogTitle: {
      titleStyle: tw`text-gray-700`,
    },
    Header: {
      centerComponent: {
        style: tw`text-lg font-medium text-white`,
      },
      centerContainerStyle: tw`justify-center`,
      statusBarProps: tw`bg-black/20`,
    },
    Text: {
      style: tw`text-base text-gray-700`,
    },
    ButtonGroup: {
      buttonContainerStyle: tw`border-0 px-2`,
      buttonStyle: tw`rounded-sm border border-gray-200 bg-white`,
      containerStyle: tw`h-10 border-0 bg-transparent`,
      disabledTextStyle: tw`text-gray-700`,
      innerBorderStyle: tw`w-0`,
      selectedButtonStyle: tw`bg-blue-500`,
      textStyle: tw`text-base font-bold `,
    },
    CheckBox: {
      containerStyle: tw`bg-transparent p-0`,
      textStyle: tw`ml-1 text-base font-normal text-gray-700`,
    },
  },
});
