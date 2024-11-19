import { Text as RNEText, TextProps as RNETextProps } from "@rneui/themed";
import React, { ReactElement } from "react";

export type TextProps = RNETextProps & {
  // No props
};

const Text = (props: TextProps): ReactElement => {
  return <RNEText {...props} />;
};

export default Text;
