import { CheckBox as RNECheckBox, CheckBoxProps as RNECheckBoxProps } from "@rneui/themed";
import React, { ReactElement } from "react";

import { colors } from "@/utils/tailwind";

import Icon from "../Icon/Icon";

const DEFAULT_CHECKED_COLOR = colors.blue[700];
const DEFAULT_UNCHECKED_COLOR = colors.neutral[400];

export type CheckBoxProps = Omit<RNECheckBoxProps, "children" | "checked" | "title"> & {
  checked?: boolean;
  title?: string | ReactElement;
};

const CheckBox = ({
  checked = false,
  checkedColor = DEFAULT_CHECKED_COLOR,
  uncheckedColor = DEFAULT_UNCHECKED_COLOR,
  title,
  ...otherProps
}: CheckBoxProps) => {
  return (
    <RNECheckBox
      checkedIcon={<Icon name="checkbox-marked" color={checkedColor} />}
      uncheckedIcon={<Icon name="checkbox-blank-outline" color={uncheckedColor} />}
      checked={checked}
      title={title}
      {...otherProps}
    />
  );
};

export default CheckBox;
