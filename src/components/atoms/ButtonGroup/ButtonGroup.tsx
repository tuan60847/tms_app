import { ButtonGroup as RNEButtonGroup, ButtonGroupProps as RNEButtonGroupProps } from "@rneui/themed";
import React, { ReactElement } from "react";

export type ButtonGroupProps = RNEButtonGroupProps & {
  //No prop
};

const ButtonGroup = (props: ButtonGroupProps): ReactElement => {
  return <RNEButtonGroup {...props} />;
};

export default ButtonGroup;
