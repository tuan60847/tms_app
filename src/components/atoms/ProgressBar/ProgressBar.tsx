import { Image } from "@rneui/themed";
import React from "react";
import { Animated, ColorValue, ImageSourcePropType, View } from "react-native";

import { IMAGE_CAR } from "@/configs/resources";
import tw from "@/utils/tailwind";

/** Define props type */
export type ProgressBarProps = {
  props: {
    progress?: number;
    width?: number;
    image?: ImageSourcePropType | null;
    color?: ColorValue | string;
  };
};

const ProgressBar = ({ props: inputProps }: ProgressBarProps) => {
  // Init default props
  const props = Object.assign(
    {
      progress: 0,
      width: 100,
      image: IMAGE_CAR,
      color: "bg-blue-500",
    },
    inputProps
  );
  // Validate progress data
  props.progress = props.progress < 0 ? 0 : props.progress;
  props.progress = props.progress > 1 ? 1 : props.progress;
  return (
    <View style={[tw`flex flex-col gap-0 overflow-hidden p-2`, { width: `${props.width}%` }]}>
      {props.image ? (
        <Animated.View style={[tw` w-full flex-row-reverse`, { paddingLeft: `${100 - props.progress * 100}%` }]}>
          <Image source={props.image} resizeMode="stretch" style={tw`w-29 h-4`} />
        </Animated.View>
      ) : (
        <></>
      )}
      <View style={tw`h-4 w-full rounded-full border-2 border-gray-400 bg-white`}>
        <View style={[tw` h-full rounded-full ${props.color}`, { width: `${props.progress * 100}%` }]} />
      </View>
    </View>
  );
};

export default ProgressBar;
