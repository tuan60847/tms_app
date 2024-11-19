import { useNavigation } from "@react-navigation/native";
import { Header } from "@rneui/themed";
import { useCallback, useState } from "react";
import React, { View } from "react-native";
import colors from "tailwindcss/colors";

import { Dialog, HeaderButton, Text } from "@/components/atoms";
import { PasswordField } from "@/components/molecules";
import tw from "@/utils/tailwind";

const ChangePassword = () => {
  const navigation = useNavigation();
  const handleGoBack = () => {
    return navigation.goBack();
  };
  const [oldPassword, setOldPassword] = useState("");
  const changeOldPassword = (value: string) => {
    setOldPassword(value);
  };
  const [newPassword, setNewPassword] = useState("");
  const changeNewPassword = (value: string) => {
    setNewPassword(value);
  };

  const [confirmPassword, setConfirmPassword] = useState("");
  const changeConfirmPassword = (value: string) => {
    setConfirmPassword(value);
  };

  const [visibleDialogBack, setVisibleDialogBack] = useState(false);
  const handleVisibleDialogBack = useCallback(() => {
    setVisibleDialogBack((prevValue) => !prevValue);
  }, []);

  const [visibleSaveFail, setVisibleSaveFail] = useState(false);
  const handleVisibleSaveFail = useCallback(() => {
    setVisibleSaveFail((prevValue) => !prevValue);
  }, []);

  const ChangePassword = () => {
    if (oldPassword === "" || newPassword === "" || confirmPassword === "") {
      console.log("Fail");
    } else {
      if (oldPassword === "Hello") {
        if (newPassword === confirmPassword) {
          console.log("Bạn Đã Thay Đổi Tài Khoảng Thành Công");
        } else {
          setVisibleSaveFail((prevValue) => !prevValue);
        }
      } else {
        setVisibleSaveFail((prevValue) => !prevValue);
      }
    }
  };

  return (
    <View style={tw`flex-1 flex-col bg-neutral-100`}>
      <Header
        backgroundColor="white"
        leftComponent={
          <HeaderButton icon="arrow-left" iconColor={colors.green[400]} onPress={handleVisibleDialogBack} />
        }
        centerComponent={<Text style={tw`text-xl font-bold`}>Đổi mật khẩu</Text>}
        rightComponent={
          <HeaderButton
            icon="content-save-outline"
            onPress={ChangePassword}
            iconColor={
              oldPassword === "" || newPassword === "" || confirmPassword === ""
                ? colors.neutral[400]
                : colors.blue[600]
            }
          />
        }
      />
      <View style={tw`mt-2 gap-2 px-2`}>
        <PasswordField
          containerStyle={tw``}
          style={tw``}
          label="Mật khẩu hiện tại"
          onChangeText={changeOldPassword}
          value={oldPassword}
          placeholder=""
        />
        <PasswordField label="Mật khẩu mới" onChangeText={changeNewPassword} value={newPassword} placeholder="" />
        <PasswordField
          containerStyle={tw``}
          style={tw``}
          label="Nhập lại mật khẩu mới"
          placeholder=""
          onChangeText={changeConfirmPassword}
          value={confirmPassword}
        />
      </View>

      <Dialog
        props={{
          isVisible: visibleDialogBack,
          header: "Xác nhận",
          message: "Bạn có muốn tiếp tục thay đổi mật khẩu không",
          onHandleButtonOK: handleVisibleDialogBack,
          onHandleButtonCancel: handleGoBack,
          labelButtonOk: "Có",
          labelButtonCancel: "Không",
          type: "Info",
          colorButtonOk: colors.blue[500],
          colorButtonCancel: colors.red[500],
        }}
      />
    </View>
  );
};
export default ChangePassword;
