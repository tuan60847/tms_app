import React, { ReactElement } from "react";
import { ColorValue, StyleProp, TouchableOpacity, View, ViewStyle } from "react-native";

import tw, { clsx, colors } from "@/utils/tailwind";

import Icon, { MaterialCommunityIconsGlyphs } from "../../atoms/Icon/Icon";
import Text, { TextProps } from "../../atoms/Text/Text";

export type TextIconProps = TextProps & {
  label?: string | ReactElement;
  hideLeft?: boolean;
  hideRight?: boolean;
  colorLabel?: string;
  leftIcon?: MaterialCommunityIconsGlyphs;
  leftColorIcon?: string | ColorValue;
  styleLeftIcon?: StyleProp<ViewStyle>;
  styleRightIcon?: StyleProp<ViewStyle>;
  rightIcon?: MaterialCommunityIconsGlyphs;
  rightColorIcon?: string | ColorValue;
  onHandleLeftIcon?: () => void;
  onHandleRightIcon?: () => void;
  size?: "small" | "medium" | "large";
};

const TextWithIcon = ({
  hideLeft = false,
  hideRight = false,
  size = "medium",
  rightIcon = "cancel",
  rightColorIcon,
  styleLeftIcon,
  leftIcon = "account",
  leftColorIcon,
  styleRightIcon,
  label,
  onHandleLeftIcon,
  onHandleRightIcon,
  colorLabel,
  ...otherProps
}: TextIconProps) => {
  const defaultColorLabel = colors.black;
  const textSizeClass = size === "small" ? tw`text-sm` : size === "medium" ? tw`text-base` : tw`text-xl`;
  const defaultColorIcon = colors.neutral[400];
  return (
    <View style={[tw` mx-2 flex-row`]} {...otherProps}>
      <TouchableOpacity onPress={onHandleLeftIcon} style={styleLeftIcon}>
        <Icon
          name={leftIcon}
          size={size}
          color={leftColorIcon ? leftColorIcon : defaultColorIcon}
          style={[tw`self-center`, clsx({ hidden: !hideLeft })]}
        />
      </TouchableOpacity>

      <Text
        style={[
          textSizeClass,
          tw` ml-2 flex-1 self-center `,
          { color: colorLabel == null ? defaultColorLabel : colorLabel },
        ]}
      >
        {label}
      </Text>
      <TouchableOpacity onPress={onHandleRightIcon} style={styleRightIcon}>
        <Icon
          name={rightIcon}
          size={size}
          color={rightColorIcon ? rightColorIcon : defaultColorIcon}
          style={clsx({ hidden: !hideRight })}
        />
      </TouchableOpacity>
    </View>
  );
};

export default TextWithIcon;
