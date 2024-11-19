import { Button as RNEButton, ButtonProps as RNEButtonProps } from "@rneui/themed";
import React, { ReactElement } from "react";

export type ButtonProps = RNEButtonProps & {
  // No props
};

const Button = ({ disabled, loading, ...otherProps }: ButtonProps): ReactElement => {
  return <RNEButton disabled={loading || disabled} loading={loading} {...otherProps} />;
};

export default Button;
