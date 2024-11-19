import { CommonActions, useNavigation } from "@react-navigation/native";
import { Header, Image } from "@rneui/themed";
import React, { useCallback, useState } from "react";
import { TouchableOpacity, View } from "react-native";

import { HeaderButton, Icon, Text } from "@/components/atoms";
import { ChangePassWordWidget, EditInfoUser, TextWithIcon } from "@/components/molecules";
import GroupBox from "@/components/molecules/GroupBox/GroupBox";
import { OpenChoicePicker } from "@/configs/common";
import { IMAGE_BACKGROUND } from "@/configs/resources";
import tw, { colors } from "@/utils/tailwind";

const UserInfo = () => {
  const navigation = useNavigation();
  const handleLogout = () => {
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: "LoginScreen" }], // Thay 'Home' bằng tên route đầu tiên của bạn
      })
    );
  };
  const handleOpenAbout = () => {
    return navigation.navigate("AboutScreen" as never);
  };
  const handleOpenChangePassword = () => {
    return navigation.navigate("ChangePasswordScreen" as never);
  };
  const [visibleChangeInfor, setChangeInfor] = useState(false);
  const onHandleVisibleChangeInfor = useCallback(() => {
    setChangeInfor((prevValue) => !prevValue);
  }, []);
  const [visibleChangePassWord, setVisibleChangePassWord] = useState(false);
  const onHandleVisibleChangePassWord = useCallback(() => {
    setVisibleChangePassWord((prevValue) => !prevValue);
  }, []);
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
          containerStyle={tw`bg-white`}
          centerComponent={{ text: "Thông tin của tôi", style: { color: "#1B2733" } }}
          rightComponent={
            <HeaderButton icon="pencil" iconColor={colors.green[400]} onPress={onHandleVisibleChangeInfor} />
          }
        />
      </View>

      <View style={tw`flex-col gap-2 pb-10`}>
        <View style={tw`h-2 bg-gray-100`} />
        <View style={tw`flex-row`}>
          <View style={tw`relative h-[100px] w-[100px] p-2`}>
            <Image
              source={imageAvatar === "" ? IMAGE_BACKGROUND : { uri: imageAvatar }}
              style={tw` h-[84px] w-[84px] rounded-lg`}
            />
            <TouchableOpacity onPress={handleVisbleView}>
              <Icon
                name="pencil-outline"
                style={tw`absolute -bottom-1 -right-1 rounded-full border border-gray-200 bg-white`}
              />
            </TouchableOpacity>
          </View>
          <View style={tw`w-2/3 flex-col justify-center gap-1`}>
            <Text>Nguyễn Văn A</Text>
            <Text style={tw`text-xs text-neutral-400`}>Nhân Viên Vận Chuyển</Text>
            <Text style={tw`text-xs text-neutral-400`}>
              1646a Đ. Võ Văn Kiệt, Phường 16, Quận 8, Thành phố Hồ Chí Minh, Việt Nam
            </Text>
          </View>
        </View>
        <View style={tw` px-2`}>
          <GroupBox
            headerTitleFirst={
              <View style={tw`flex-col items-center`}>
                <Icon name="truck-outline" color={colors.green[400]} />
                <Text style={tw`pl-2  text-sm`}>Tổng Số Chuyến</Text>
              </View>
            }
            valueTitleFirst={
              <View style={tw`mt-6`}>
                <Text style={tw`text-lg`}>1500</Text>
              </View>
            }
            headerTitleSecond={
              <View style={tw`flex-col items-center`}>
                <Icon name="card-account-details-outline" color={colors.green[400]} />

                <Text style={tw`pl-2 text-sm `}>Kinh Nghiệm</Text>
              </View>
            }
            valueTitleSecond={
              <View style={tw`mt-6`}>
                <Text style={tw`text-lg`}>5</Text>
              </View>
            }
          />
        </View>

        <View>
          <View style={tw`gap-2  px-2`}>
            <Text style={tw`text-lg font-bold`}>Đơn Hàng Trong Ngày</Text>
            <View style={tw`flex-row justify-between gap-2`}>
              <View style={tw`w-8/17 h-20 flex-col justify-center rounded-xl bg-white px-4`}>
                <Text style={tw`text-sm text-neutral-400`}>Đơn Hàng Đã Giao </Text>
                <Text style={tw`text-base font-bold text-green-500`}>2 Đơn </Text>
              </View>
              <View style={tw`w-8/17 h-20 flex-col justify-center rounded-xl bg-white px-4`}>
                <Text style={tw`text-sm text-neutral-400`}>Đơn Hàng Chờ Giao </Text>
                <Text style={tw`text-base font-bold text-orange-400`}>12 Đơn </Text>
              </View>
            </View>

            <TextWithIcon
              label={<Text style={tw`text-sm`}>0965988698</Text>}
              hideLeft
              styleLeftIcon={tw`rounded-full border border-neutral-300 bg-white p-2`}
              leftIcon="phone-outline"
              leftColorIcon={colors.neutral[400]}
              size="small"
            />
            <TextWithIcon
              label={<Text style={tw`text-sm`}>cafevida@gmail.com</Text>}
              hideLeft
              styleLeftIcon={tw`rounded-full border border-neutral-300 bg-white p-2`}
              leftIcon="email-outline"
              leftColorIcon={colors.neutral[400]}
              size="small"
            />
          </View>
        </View>

        <View>
          <TouchableOpacity style={tw` m-2 rounded-xl bg-white px-2 py-2`} onPress={onHandleVisibleChangePassWord}>
            <TextWithIcon
              hideLeft={true}
              hideRight={true}
              label={<Text>Đổi mật khẩu</Text>}
              leftIcon="key-outline"
              rightIcon="chevron-right"
              leftColorIcon="#3B82F6"
            />
          </TouchableOpacity>
          <TouchableOpacity style={tw` m-2 rounded-xl bg-white px-2 py-2`} onPress={handleOpenAbout}>
            <TextWithIcon
              hideLeft={true}
              hideRight={true}
              label={<Text>Thông tin ứng dụng</Text>}
              leftIcon="dns-outline"
              rightIcon="chevron-right"
            />
          </TouchableOpacity>
          <TouchableOpacity style={tw` m-2 rounded-xl bg-white px-2 py-2`} onPress={handleLogout}>
            <TextWithIcon
              hideLeft={true}
              hideRight={true}
              label={<Text style={tw`text-red-500`}>Đăng xuất</Text>}
              leftIcon="logout"
              rightIcon="chevron-right"
              leftColorIcon="#EF4444"
            />
          </TouchableOpacity>
        </View>
      </View>
      <EditInfoUser visbleView={visibleChangeInfor} handleVisbleView={onHandleVisibleChangeInfor} />
      <ChangePassWordWidget visbleView={visibleChangePassWord} handleVisbleView={onHandleVisibleChangePassWord} />
      <OpenChoicePicker handleVisbleView={handleVisbleView} visbleView={visbleView} event={addImage} />
    </View>
  );
};

export default UserInfo;
