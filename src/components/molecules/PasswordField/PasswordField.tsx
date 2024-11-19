import React, { ReactElement, useCallback, useState } from "react";
import { TouchableOpacity } from "react-native";

import { Icon, InputField } from "@/components/atoms";
import { TextInputProps } from "@/components/atoms/InputField/InputField";
import { colors } from "@/utils/tailwind";

export type PasswordFieldProps = TextInputProps & {
  //No prop
};

const PasswordField = (props: PasswordFieldProps): ReactElement => {
  const [hidden, setHidden] = useState(true);

  const handleIconPress = useCallback(() => {
    setHidden((prevValue) => !prevValue);
  }, []);

  return (
    <InputField
      secureTextEntry={hidden}
      rightIcon={
        <TouchableOpacity onPress={handleIconPress}>
          <Icon name={hidden ? "eye-off-outline" : "eye-outline"} color={colors.neutral[400]} />
        </TouchableOpacity>
      }
      {...props}
    />
  );
};

export default PasswordField;
