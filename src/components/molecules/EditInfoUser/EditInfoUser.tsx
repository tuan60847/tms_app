import React, { ReactElement } from "react";
import { Modal, TouchableOpacity, View } from "react-native";
import colors from "tailwindcss/colors";

import { Icon, InputField, Text } from "@/components/atoms";
import tw from "@/utils/tailwind";

import TextWithIcon from "../TextWithIcon/TextWithIcon";

export type EditInfoUserProps = {
  event?: (newImage: { imageName: string }) => void;
  visbleView: boolean;
  handleVisbleView: () => void;
};

const EditInfoUser = ({ event, visbleView, handleVisbleView, ...otherProps }: EditInfoUserProps): ReactElement => {
  return (
    <Modal visible={visbleView} animationType="slide" transparent={true} {...otherProps}>
      <View style={tw`flex-1 items-end  justify-end bg-black bg-opacity-50 `}>
        <View style={tw`h-3/4 w-full flex-col justify-evenly  gap-3  rounded-xl bg-gray-100 p-2 py-8`}>
          <TextWithIcon
            size="large"
            hideRight
            leftColorIcon={colors.black}
            rightIcon="close-circle-outline"
            label={<Text style={tw`text-xl font-bold`}>Sửa Thông Tin Cá Nhân</Text>}
            onHandleRightIcon={handleVisbleView}
          />
          <View style={tw`gap-4`}>
            <InputField
              label="Họ Tên"
              inputContainerStyle={tw`rounded-xl `}
              leftIcon={<Icon name="account-outline" />}
              placeholder="Vui Lòng Điền Họ Tên"
            />
            <InputField
              inputContainerStyle={tw`rounded-xl `}
              label="Địa Chỉ"
              leftIcon={<Icon name="map-marker" />}
              multiline={true}
              maxLength={100}
              placeholder="Hãy Nhập Địa Chỉ"
            />
            <InputField
              inputContainerStyle={tw`rounded-xl `}
              label="Số Điện Thoại"
              leftIcon={<Icon name="phone-outline" />}
              multiline={true}
              keyboardType="phone-pad"
              placeholder="Hãy Nhập Số Điện Thoại"
            />
            <InputField
              inputContainerStyle={tw`rounded-xl `}
              label="Ngày Sinh"
              leftIcon={<Icon name="calendar-range" />}
              multiline={true}
              placeholder="Hãy Nhập Ngày Sinh"
            />
            <TouchableOpacity
              style={tw`items-center self-center rounded-xl bg-green-300 px-12 py-2 `}
              onPress={handleVisbleView}
            >
              <Text>Xác Nhận</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default EditInfoUser;
