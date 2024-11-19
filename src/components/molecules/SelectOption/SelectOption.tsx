import { Text } from "@rneui/base";
import React from "react";
import SelectDropDown, { SelectDropdownProps } from "react-native-select-dropdown";

import { Icon } from "@/components/atoms";
import tw, { clsx } from "@/utils/tailwind";

export type SelectOptionProps = SelectDropdownProps & {
  label?: string;
  selectedValue?: string;
  //No prop
};

const SelectOption = ({ selectedValue, label, data, ...otherProps }: SelectOptionProps) => {
  return (
    <SelectDropDown
      renderDropdownIcon={() => <Icon name="chevron-down" />}
      data={data}
      buttonStyle={tw`h-11 w-56 border border-neutral-300 bg-white`}
      buttonTextStyle={tw`text-neutral-500`}
      dropdownStyle={tw`-mt-7 border border-neutral-500 `}
      rowStyle={tw``}
      renderCustomizedButtonChild={() => (
        <Text style={clsx({ "text-neutral-500": !selectedValue })}>{selectedValue ? selectedValue : label}</Text>
      )}
      {...otherProps}
    />
  );
};
export default SelectOption;
