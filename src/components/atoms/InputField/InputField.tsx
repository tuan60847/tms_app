import { Input, InputProps } from "@rneui/themed";
import React, { ReactElement } from "react";

import { clsx } from "@/utils/tailwind";

export type TextInputProps = Omit<InputProps, "errorMessage"> & {
  helperText?: string;
  error?: boolean;
};

const InputField = ({ helperText, error, ...otherProps }: TextInputProps): ReactElement => {
  return (
    <Input
      errorMessage={helperText}
      errorStyle={clsx({
        hidden: !helperText,
        "text-neutral-400": !error,
      })}
      {...otherProps}
    />
  );
};

export default InputField;
