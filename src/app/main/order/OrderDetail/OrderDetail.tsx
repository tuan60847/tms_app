import { useNavigation } from "@react-navigation/native";
import { Header } from "@rneui/themed";
import React, { useCallback, useState } from "react";
import { PermissionsAndroid, ScrollView, Text, TouchableOpacity, View } from "react-native";
import Communications from "react-native-communications";
import colors from "tailwindcss/colors";

import { HeaderButton, Icon } from "@/components/atoms";
import TimeLineScreen from "@/components/atoms/TimeLine/TimeLine";
import { TextWithIcon } from "@/components/molecules";
import ChangStatusInTruck from "@/components/molecules/ChangStatusInTruck/ChangStatusInTruck";
import GroupBox from "@/components/molecules/GroupBox/GroupBox";
import { IMAGE_BACKGROUND } from "@/configs/resources";
import tw from "@/utils/tailwind";

const OrderDetail = () => {
  const navigation = useNavigation();
  const handleGoOrderReport = () => {
    return navigation.navigate("OrderReportScreen" as never);
  };

  const [visbleView, setVisbleView] = useState(false);
  const handleVisbleView = useCallback(() => {
    setVisbleView((prevValue) => !prevValue);
  }, []);

  const handlePhoneCall = async (phoneNumber: string) => {
    try {
      const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.CALL_PHONE, {
        title: "Quyền gọi điện",
        message: "Ứng dụng cần quyền gọi điện để thực hiện cuộc gọi.",
        buttonNeutral: "Hỏi lại sau",
        buttonNegative: "Hủy",
        buttonPositive: "Đồng ý",
      });

      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        Communications.phonecall(phoneNumber, true);
      } else {
        // Quyền bị từ chối, xử lý tại đây
      }
    } catch (error) {
      console.log(error);
      // Xử lý lỗi tại đây
    }
  };

  const handleGoBack = () => {
    return navigation.goBack();
  };

  const timelineData = [
    {
      title: "Đã được thêm vào danh sách xử lý đơn hàng",
      description: "Cập nhật: 30/04/2019 - 16:30 ",
    },
    {
      title: "Đã tiếp nhận đơn hàng",
      description: "Cập nhật: 30/04/2019 - 16:30 ",
    },
    {
      title: "Đã xử lý đơn hàng",
      description: "Cập nhật: 30/04/2019 - 16:30",
    },
    {
      title: "Đang giao hàng",
      description: "Cập nhật: 30/04/2019 - 16:30 ",
      image: [
        { index: 1, src: IMAGE_BACKGROUND },
        { index: 2, src: IMAGE_BACKGROUND },
      ],
    },
  ];
  return (
    <View>
      <Header
        containerStyle={tw`bg-neutral-100`}
        centerComponent={{ text: "Chi tiết đơn hàng", style: { color: "#1B2733" } }}
        rightComponent={<HeaderButton icon="camera" iconColor={colors.green[400]} onPress={handleVisbleView} />}
        leftComponent={<HeaderButton icon="arrow-left" iconColor={colors.green[400]} onPress={handleGoBack} />}
      />
      <ScrollView style={tw` bg-neutral-100 px-4 `}>
        <View style={tw`gap-2 border-b-2 border-neutral-200 pb-4`}>
          {/* <View style={tw`items-center`}>
            <Text style={tw`text-base font-bold text-black`}>Thông tin đơn hàng G873952</Text>
          </View> */}
          {/* <GroupBox
            headerTitleFirst={
              <View style={tw`flex-row items-center`}>
                <Icon name="archive-outline" color={colors.green[400]} />
                <Text style={tw`pl-1`}>Vật Liệu</Text>
              </View>
            }
            valueTitleFirst={<Text style={tw`text-black`}>Cà Phê</Text>}
            headerTitleSecond={
              <View style={tw`flex-row items-center`}>
                <Icon name="truck-fast-outline" color={colors.green[400]} />
                <Text style={tw`pl-1`}>Khoảng Cách</Text>
              </View>
            }
            valueTitleSecond={<Text style={tw`text-black`}>10KM</Text>}
            headerTitleThird={
              <View style={tw`flex-row items-center`}>
                <Icon name="cash" color={colors.green[400]} />
                <Text style={tw`pl-1`}>Tổng Tiền</Text>
              </View>
            }
            valueTitleThird={<Text style={tw`text-black`}>5,800,000</Text>}
          /> */}

          <View style={tw`items-center`}>
            <Text style={tw`text-lg font-bold text-black`}>Công ty cổ phần TH true milk</Text>
          </View>
          <GroupBox
            headerTitleFirst={
              <View style={tw`flex-row items-center`}>
                <Icon name="calendar-month-outline" color={colors.green[400]} />
                <Text style={tw`pl-1`}>Ngày</Text>
              </View>
            }
            valueTitleFirst={<Text style={tw`text-black`}>30/04/2019</Text>}
            headerTitleSecond={
              <View style={tw`flex-row items-center`}>
                <Icon name="clock-outline" color={colors.green[400]} />
                <Text style={tw`pl-1`}>Thời Gian</Text>
              </View>
            }
            valueTitleSecond={<Text style={tw`text-black`}>16:30</Text>}
          />
          <Text style={tw`text-lg font-bold text-black`}>Ghi Chú</Text>
          <Text>Hàng dễ vỡ, tới kho trước 15 phút</Text>
          <Text style={tw`text-base font-bold text-black`}>Thông Tin Nhận Hàng</Text>
          <View style={tw` flex-row justify-between  `}>
            <View style={tw`w-3/4 `}>
              <Text style={tw`font-bold `}>
                Cafe Vĩ Dạ, 37 Đường Nguyễn Ảnh Thủ, Tân Chánh Hiệp, Quận 12, Hồ Chí Minh
              </Text>
            </View>

            <TouchableOpacity style={tw`h-10 w-10 items-center justify-center rounded-lg bg-orange-400`}>
              <Icon name="map-outline" color={colors.white} />
            </TouchableOpacity>
          </View>

          <View style={tw`gap-2 border-b-2 border-neutral-200 pb-2`}>
            {/* <GroupBox
              headerTitleFirst={
                <View style={tw`flex-row items-center`}>
                  <Icon name="calendar-month-outline" color={colors.green[400]} />
                  <Text style={tw`pl-1`}>Ngày</Text>
                </View>
              }
              valueTitleFirst={<Text style={tw`text-black`}>3/4/2021</Text>}
              headerTitleSecond={
                <View style={tw`flex-row items-center`}>
                  <Icon name="car-outline" color={colors.green[400]} />
                  <Text style={tw`pl-1`}>Xe</Text>
                </View>
              }
              valueTitleSecond={<Text style={tw`text-black`}>Truck A4G1</Text>}
              headerTitleThird={
                <View style={tw`flex-row items-center`}>
                  <Icon name="package-variant-closed" color={colors.green[400]} />
                  <Text style={tw`pl-1`}>Trọng Tải</Text>
                </View>
              }
              valueTitleThird={<Text style={tw`text-black`}>15 tấn</Text>}
            /> */}

            <TextWithIcon
              label={<Text style={tw`text-lg`}>Chị Bình</Text>}
              hideLeft
              styleLeftIcon={tw`rounded-full border border-neutral-300 bg-white p-2`}
              leftIcon="phone-outline"
              onHandleLeftIcon={() => {
                handlePhoneCall("0965988698");
              }}
              leftColorIcon={colors.neutral[400]}
              size="small"
            />
            {/* <TextWithIcon
              label={<Text style={tw`text-base font-bold`}>0965988698</Text>}
              hideLeft
              styleLeftIcon={tw`rounded-full border border-neutral-300 bg-white p-2`}
              leftIcon="phone-outline"
              onHandleLeftIcon={() => {
                handlePhoneCall("0907344681");
              }}
              leftColorIcon={colors.neutral[400]}
              size="small"
            /> */}
          </View>
          {/* Thông Tin người Nhận Hàng */}
          <Text style={tw`text-base font-bold text-black`}>Thông Tin Gửi Hàng</Text>
          <View style={tw` flex-row justify-between  `}>
            <View style={tw`w-3/4 `}>
              <Text style={tw`font-bold `}>Chung cư Trung Sơn, Đường số 9A, Bình Hưng, Bình Chánh, Hồ Chí Minh</Text>
            </View>

            <TouchableOpacity style={tw`h-10 w-10 items-center justify-center rounded-lg bg-orange-400`}>
              <Icon name="map-outline" color={colors.white} />
            </TouchableOpacity>
          </View>

          <TextWithIcon
            label={<Text style={tw`text-base`}>Anh Nam</Text>}
            hideLeft
            styleLeftIcon={tw`rounded-full border border-neutral-300 bg-white p-2`}
            leftIcon="phone-outline"
            onHandleLeftIcon={() => {
              handlePhoneCall("0965988698");
            }}
            leftColorIcon={colors.neutral[400]}
            size="small"
          />
          {/* <TextWithIcon
            label={<Text style={tw`text-base font-bold`}>0965988698</Text>}
            hideLeft
            styleLeftIcon={tw`rounded-full border border-neutral-300 bg-white p-2`}
            leftIcon="phone-outline"
            leftColorIcon={colors.neutral[400]}
            size="small"
          /> */}

          {/* <Text style={tw` text-black`}>
            <Text style={tw`font-bold `}>Mã đơn hàng:</Text> G873952
          </Text> */}
        </View>
        <View style={tw`pt-4`}>
          <View style={tw`items-center`}>
            <Text style={tw`text-base font-bold text-black`}>Cập nhật trạng thái xe</Text>
          </View>
          <View style={tw`h-6 w-24 items-center justify-center rounded-md bg-black`}>
            <Text style={tw` text-white `}>51G - 134.54</Text>
          </View>
        </View>
        <View style={tw`mb-14`}>
          <TimeLineScreen timelineData={timelineData} dotColor={colors.green[400]} />
        </View>
      </ScrollView>
      <ChangStatusInTruck visbleView={visbleView} handleVisbleView={handleVisbleView} />
    </View>
  );
};

export default OrderDetail;
