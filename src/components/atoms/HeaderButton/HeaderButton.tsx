import React, { ReactElement } from "react";
import { ColorValue, TouchableOpacity, TouchableOpacityProps } from "react-native";

import tw, { colors } from "@/utils/tailwind";

import Icon, { MaterialCommunityIconsGlyphs } from "../Icon/Icon";
import Text from "../Text/Text";

export type HeaderButtonProps = TouchableOpacityProps & {
  icon: MaterialCommunityIconsGlyphs;
  title?: string;
  iconColor?: ColorValue | string;
};

const HeaderButton = ({ iconColor, icon, title, ...otherProps }: HeaderButtonProps): ReactElement => {
  iconColor = iconColor ?? colors.white;
  return (
    <TouchableOpacity style={tw`min-w-10 flex h-10 flex-row items-center justify-center gap-1`} {...otherProps}>
      <Icon name={icon} size="large" color={iconColor} />
      {title && <Text style={tw`text-white`}>{title}</Text>}
    </TouchableOpacity>
  );
};

export default HeaderButton;
