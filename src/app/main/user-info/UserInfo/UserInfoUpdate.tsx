import { useNavigation } from "@react-navigation/native";
import { Header, Image } from "@rneui/themed";
import React, { useCallback, useState } from "react";
import { TextInput, TouchableOpacity, View } from "react-native";

import { HeaderButton, Icon, Text } from "@/components/atoms";
import { TextWithIcon } from "@/components/molecules";
import { OpenChoicePicker } from "@/configs/common";
import { IMAGE_BACKGROUND } from "@/configs/resources";
import tw, { colors } from "@/utils/tailwind";

const UserInfoUpdate = () => {
  const navigation = useNavigation();
  const handleGoBack = () => {
    return navigation.goBack();
  };
  const [imageAvatar, setImageAvatar] = useState("");

  const addImage = (newImage: { imageName: string }) => {
    // console.log(newImage.imageName);

    setImageAvatar(newImage.imageName);
  };
  const [visbleView, setVisbleView] = useState(false);
  const handleVisbleView = useCallback(() => {
    setVisbleView((prevValue) => !prevValue);
  }, []);

  return (
    <View style={tw`flex`}>
      <View style={tw``}>
        <Header
          backgroundColor="white"
          leftComponent={<HeaderButton icon="arrow-left" iconColor={colors.green[400]} onPress={handleGoBack} />}
          centerComponent={<Text style={tw`text-xl font-bold`}>Chỉnh sửa thông tin</Text>}
          rightComponent={
            <HeaderButton
              icon="content-save-outline"
              iconColor={colors.green[400]}
              //   onPress={ChangePassword}
              //   iconColor={
              //     oldPassword === "" || newPassword === "" || confirmPassword === ""
              //       ? colors.neutral[400]
              //       : colors.blue[600]
              //   }
            />
          }
        />
      </View>
      <View style={tw`h-2 bg-gray-100`} />
      <View style={tw`flex-row`}>
        <View style={tw`relative h-[100px] w-[100px] p-2`}>
          <Image
            source={imageAvatar === "" ? IMAGE_BACKGROUND : { uri: imageAvatar }}
            style={tw` h-[84px] w-[84px] rounded-full`}
          />
          <TouchableOpacity onPress={handleVisbleView}>
            <Icon
              name="pencil-outline"
              style={tw`absolute bottom-0 right-0 rounded-full border border-gray-200 bg-white`}
            />
          </TouchableOpacity>
        </View>
        <View style={tw`flex-col justify-center gap-2`}>
          <Text style={tw`text-2xl font-bold`}>Nguyễn Văn A</Text>
          <Text style={tw`text-lg font-bold`}>SDT: 123456789</Text>
        </View>
      </View>
      <View style={tw`h-2 bg-gray-100`} />
      <View>
        <View style={tw`flex-row items-center border-b border-gray-200 px-4 py-2`}>
          <View style={tw`-left-4 w-2/5 `}>
            <TextWithIcon label={<Text style={tw`text-sm`}>Số điện thoại</Text>} leftIcon="phone" hideLeft={true} />
          </View>
          <TextInput
            multiline={false}
            style={tw`w-3/5  border border-neutral-200`}
            textAlign="right"
            maxLength={11}
            keyboardType="number-pad"
          />
        </View>
        <View style={tw`flex-row items-start border-b border-gray-200 px-4 py-2`}>
          <View style={tw`-left-4 w-2/5 `}>
            <TextWithIcon label={<Text style={tw` text-sm`}>Địa chỉ</Text>} leftIcon="home" hideLeft={true} />
          </View>
          <TextInput
            multiline={true}
            style={tw`w-3/5  border border-neutral-200`}
            textAlign="right"
            maxLength={11}
            keyboardType="default"
          />
        </View>
        <View style={tw`flex-row items-center border-b border-gray-200 px-4 py-2`}>
          <View style={tw`-left-4 w-2/5 `}>
            <TextWithIcon
              label={<Text style={tw` text-sm`}>Tài Khoản</Text>}
              leftIcon="account-box-outline"
              hideLeft={true}
            />
          </View>
          <TextInput
            multiline={false}
            style={tw`w-3/5  border border-neutral-200`}
            textAlign="right"
            keyboardType="default"
          />
        </View>
        <View style={tw`flex-row items-center border-b border-gray-200 px-4 py-2`}>
          <View style={tw`-left-4 w-2/5 `}>
            <TextWithIcon
              label={<Text style={tw` text-sm`}>Tên</Text>}
              leftIcon="account-circle-outline"
              hideLeft={true}
            />
          </View>
          <TextInput
            multiline={false}
            style={tw`w-3/5  border border-neutral-200`}
            textAlign="right"
            keyboardType="default"
            placeholder="Nhập Thông Tin"
          />
        </View>
        <View style={tw`flex-row items-center border-b border-gray-200 px-4 py-2`}>
          <View style={tw`-left-4 w-2/5 `}>
            <TextWithIcon
              label={<Text style={tw` text-sm`}>Chưa có và quan trong</Text>}
              leftIcon="phone"
              hideLeft={true}
            />
          </View>
          <TextInput
            multiline={false}
            style={tw`w-3/5  border border-neutral-200`}
            textAlign="right"
            keyboardType="default"
            placeholder="Nhập Thông Tin"
          />
        </View>
        <View style={tw`flex-row items-center border-b border-gray-200 px-4 py-2`}>
          <View style={tw`-left-4 w-2/5 `}>
            <TextWithIcon
              label={<Text style={tw` text-sm`}>Chưa có và không quan trọng</Text>}
              leftIcon="account-circle-outline"
              hideLeft={true}
            />
          </View>
          <TextInput
            multiline={false}
            style={tw`w-3/5  border border-neutral-200`}
            textAlign="right"
            keyboardType="default"
            placeholder="Nhập Thông Tin"
          />
        </View>
      </View>
      <OpenChoicePicker handleVisbleView={handleVisbleView} visbleView={visbleView} event={addImage} />
    </View>
  );
};

export default UserInfoUpdate;
