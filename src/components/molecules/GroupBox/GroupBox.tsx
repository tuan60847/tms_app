import React, { ReactElement } from "react";
import { View } from "react-native";

import tw from "@/utils/tailwind";

export type GroupBoxProps = {
  // No Prop
  headerTitleFirst: ReactElement;
  headerTitleSecond?: ReactElement;
  headerTitleThird?: ReactElement;
  valueTitleFirst: ReactElement;
  valueTitleSecond?: ReactElement;
  valueTitleThird?: ReactElement;
};

const GroupBox = ({
  headerTitleFirst,
  headerTitleSecond,
  headerTitleThird,
  valueTitleFirst,
  valueTitleSecond,
  valueTitleThird,
  ...otherProps
}: GroupBoxProps): ReactElement => {
  return (
    <View
      style={tw`w-1/1 mb-4 h-24 flex-row items-center justify-around self-center rounded-xl  bg-white`}
      {...otherProps}
    >
      <View style={[tw`h-14  items-center justify-around `, { width: headerTitleThird != null ? "33%" : "50%" }]}>
        {headerTitleFirst && headerTitleFirst}
        {valueTitleFirst && valueTitleFirst}
      </View>
      {headerTitleSecond && (
        <View
          style={[
            tw`h-14 items-center justify-around border-l  border-neutral-200`,
            { borderRightWidth: headerTitleThird && 1, width: headerTitleThird != null ? "33%" : "50%" },
          ]}
        >
          {headerTitleSecond && headerTitleSecond}
          {valueTitleSecond && valueTitleSecond}
        </View>
      )}
      {headerTitleThird && (
        <View style={tw`h-14 w-1/3  items-center justify-around`}>
          {headerTitleThird && headerTitleThird}
          {valueTitleThird && valueTitleThird}
        </View>
      )}
    </View>
  );
};

export default GroupBox;
