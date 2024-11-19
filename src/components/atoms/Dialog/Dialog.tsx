import { DialogProps as RNEDialogProps } from "@rneui/base";
import { Dialog as RNEDialog } from "@rneui/themed";
import React, { ReactElement } from "react";
import { ColorValue, TouchableOpacity, View } from "react-native";

import tw, { colors } from "@/utils/tailwind";

import Icon, { MaterialCommunityIconsGlyphs } from "../Icon/Icon";
import Text from "../Text/Text";

/** Define Dialog Type */
export type DialogType = "Info" | "Warning" | "Error";

/** Define props object */
export type DialogProps = RNEDialogProps & {
  props: {
    isVisible: boolean;
    type?: DialogType;
    header?: string | ReactElement;
    message?: string;
    labelButtonOk?: string;
    colorButtonOk?: string | ColorValue;
    labelButtonCancel?: string;
    colorButtonCancel?: string | ColorValue;
    onHandleButtonOK: () => void;
    onHandleButtonCancel?: () => void | undefined;
  };
};

/** Default props on init */
const defaultProps = {
  type: "Info",
  labelButtonOk: "Ok",
  labelButtonCancel: "Cancel",
  colorButtonOk: colors.blue[500],
  colorButtonCancel: colors.red[500],
};

/**
 * Resolve Icon for dialog type
 * @param type DialogType
 * @return Material Icon
 */
const resolveIcon = (type: DialogType): MaterialCommunityIconsGlyphs => {
  switch (type) {
    case "Info":
      return "information";
    case "Warning":
      return "alert";
    case "Error":
      return "close-circle";
  }
};

/**
 * Resolve color for dialog type
 * @param type DialogType
 * @return ColorValue
 */
const resolveColor = (type: DialogType): ColorValue => {
  switch (type) {
    case "Info":
      return colors.blue[300];
    case "Warning":
      return colors.yellow[300];
    case "Error":
      return colors.red[300];
  }
};

const Dialog = ({ props: inputProps, ...otherProps }: DialogProps): ReactElement => {
  const props = Object.assign(defaultProps, inputProps);
  const icon = <Icon size="medium" name={resolveIcon(props.type)} color={resolveColor(props.type)} />;
  return (
    <RNEDialog isVisible={props.isVisible} {...otherProps}>
      {/* Header title */}
      <View style={tw`flex flex-row items-center`}>
        {icon}
        <Text style={tw`ml-2 text-lg font-bold`}>{props.header}</Text>
      </View>

      {/* Body */}
      <View style={tw`mb-1`}>
        <Text style={tw`py-2 font-medium`}>{props.message}</Text>
      </View>
      {otherProps.children}

      {/* Action button group */}
      <RNEDialog.Actions>
        <View style={tw`flex flex-row gap-4`}>
          <TouchableOpacity
            style={[tw`w-25 h-10 items-center justify-center rounded-sm border `, { borderColor: props.colorButtonOk }]}
            onPress={props.onHandleButtonOK}
          >
            <Text style={[tw` font-semibold`, { color: props.colorButtonOk }]}>{props.labelButtonOk}</Text>
          </TouchableOpacity>

          {!props.onHandleButtonCancel ? (
            <></>
          ) : (
            <TouchableOpacity
              style={[
                tw`w-25 h-10 items-center justify-center rounded-sm border`,
                { borderColor: props.colorButtonCancel },
              ]}
              onPress={props.onHandleButtonCancel}
            >
              <Text style={[tw` font-semibold`, { color: props.colorButtonCancel }]}>{props.labelButtonCancel}</Text>
            </TouchableOpacity>
          )}
        </View>
      </RNEDialog.Actions>
    </RNEDialog>
  );
};

export default Dialog;
