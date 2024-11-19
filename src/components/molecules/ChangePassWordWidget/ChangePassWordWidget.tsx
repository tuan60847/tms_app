import React, { ReactElement } from "react";
import { Modal, TouchableOpacity, View } from "react-native";
import colors from "tailwindcss/colors";

import { Text } from "@/components/atoms";
import tw from "@/utils/tailwind";

import PasswordField from "../PasswordField/PasswordField";
import TextWithIcon from "../TextWithIcon/TextWithIcon";

export type ChangePassWordWidgetProps = {
  event?: (newImage: { imageName: string }) => void;
  visbleView: boolean;
  handleVisbleView: () => void;
};

const ChangePassWordWidget = ({
  event,
  visbleView,
  handleVisbleView,
  ...otherProps
}: ChangePassWordWidgetProps): ReactElement => {
  return (
    <Modal visible={visbleView} animationType="slide" transparent={true} {...otherProps}>
      <View style={tw`flex-1 items-end  justify-end bg-black bg-opacity-50 `}>
        <View style={tw`h-1/2 w-full flex-col justify-between  gap-3  rounded-xl bg-gray-100 p-2 `}>
          <TextWithIcon
            size="large"
            hideRight
            leftColorIcon={colors.black}
            rightIcon="close-circle-outline"
            label={<Text style={tw`text-xl font-bold`}>Thay Đổi Mật Khẩu</Text>}
            onHandleRightIcon={handleVisbleView}
          />
          <View style={tw`gap-4`}>
            <PasswordField label="Mật Khẩu Hiện Tại" placeholder="Vui Lòng Nhập Mật Khẩu Hiện Tại" />
            <PasswordField label="Mật Khẩu Mới" placeholder="Vui Lòng Nhập Mật Khẩu Mới" />
            <PasswordField label="Xác Nhận Mật Khẩu" placeholder="Vui Lòng Nhập Mật Khẩu Mới Lại" />
          </View>
          <TouchableOpacity
            style={tw`items-center self-center rounded-xl bg-green-300 px-12 py-2 `}
            onPress={handleVisbleView}
          >
            <Text>Xác Nhận</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default ChangePassWordWidget;
