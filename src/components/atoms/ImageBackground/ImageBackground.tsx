import React, { ReactElement } from "react";
import { ImageBackgroundProps as RNImageBackgroundProps } from "react-native";
import { ImageBackground as RNImageBackground } from "react-native";

import tw from "@/utils/tailwind";

export type ImageBackgroundProps = RNImageBackgroundProps & {
  //No prop
};

const ImageBackground = (props: ImageBackgroundProps): ReactElement => {
  return <RNImageBackground {...props} style={tw`flex-1`} />;
};

export default ImageBackground;
