import { useNavigation } from "@react-navigation/native";
import { Header, Image } from "@rneui/themed";
import React, { useCallback, useState } from "react";
import { TouchableOpacity, View } from "react-native";
import { Text } from "react-native";
import { ScrollView } from "react-native";
import colors from "tailwindcss/colors";

import { Icon } from "@/components/atoms";
import { ItemsView } from "@/components/molecules";
import { IMAGE_COCACOLA, IMAGE_TH_TRUE_MILK } from "@/configs/resources";
import tw from "@/utils/tailwind";

const Order = () => {
  const buttons = ["Đang xử lý", "Đơn hàng mới", "Đã hoàn thành"];
  const [currentDate, setCurrentDate] = useState(new Date());
  const [TodayDate, setCurrent] = useState(new Date());

  const handleNextDay = () => {
    const nextDay = new Date(currentDate);
    if (isLessThanOrEqualCurrentDate(TodayDate, currentDate)) {
      nextDay.setDate(nextDay.getDate() + 1);
      setCurrentDate(nextDay);
    }
  };
  const handlePrevDay = () => {
    const nextDay = new Date(currentDate);

    nextDay.setDate(nextDay.getDate() - 1);
    setCurrentDate(nextDay);
  };

  const formatDateString = (date: Date) => {
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };

  function isLessThanOrEqualCurrentDate(date1: Date, date2: Date) {
    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0);
    date2.setHours(0, 0, 0, 0);

    return date2 <= currentDate;
  }

  const [selectedIndex, setSelectedIndex] = useState(0);
  const onChooseOnly = (index: number) => {
    // console.log(index);
    setSelectedIndex(index);
  };
  const navigation = useNavigation();
  const handleGoOrderDetail = () => {
    return navigation.navigate("OrderDetailScreen" as never);
  };

  const handleGoOrderReport = () => {
    return navigation.navigate("OrderReportScreen" as never);
  };
  const [visibleText, setVisibleText] = useState(false);
  const onHandleVisibleText = useCallback(() => {
    setVisibleText((prevValue) => !prevValue);
  }, []);
  // const [visibleSuccessDDH, setVisibleSuccessDDH] = useState(false);
  // const onHandleVisibleSuccessDDH = useCallback(() => {
  //   setVisibleSuccessDDH((prevValue) => !prevValue);
  // }, []);
  // const [visibleDeliveryDDH, setVisibleDeliveryDDH] = useState(false);
  // const onHandleVisibleDeliveryDDH = useCallback(() => {
  //   setVisibleDeliveryDDH((prevValue) => !prevValue);
  // }, []);
  // const [visibleWaitDDH, setVisibleWaitDDH] = useState(false);
  // const onHandleVisibleWaitDDH = useCallback(() => {
  //   setVisibleWaitDDH((prevValue) => !prevValue);
  // }, []);
  // const OnhandleText = () => {
  //   console.log("Hello");
  // };

  return (
    <View>
      <View style={tw`my-3 flex bg-white`}>
        <Header containerStyle={tw`bg-white`} centerComponent={{ text: "Đơn hàng", style: { color: "#1B2733" } }} />
        {/* <ButtonGroup
          buttonStyle={tw`w-1/1 mx-2 rounded-full`}
          textStyle={tw`text-xs `}
          selectedButtonStyle={tw`bg-green-400`}
          activeOpacity={0}
          buttons={buttons}
          onPress={onChooseOnly}
          selectedIndex={selectedIndex}
        /> */}
        <View style={tw`flex-row items-center justify-between  px-2`}>
          <TouchableOpacity style={tw`h-10 w-10 justify-center`} onPress={handlePrevDay}>
            <Icon name="chevron-left" size="large" color={colors.black} />
          </TouchableOpacity>
          <Text style={tw`text-black`}>{formatDateString(currentDate)}</Text>
          <TouchableOpacity style={tw`h-10 w-10 justify-center`} onPress={handleNextDay}>
            <Icon name="chevron-right" size="large" color={colors.black} />
          </TouchableOpacity>
        </View>
      </View>
      {/* <View style={tw`h-full flex-auto `}> */}
      <ScrollView style={tw``}>
        <View style={tw`flex-col pb-36`}>
          {/* <View style={tw`mb-2`}>
            <View style={tw`border border-neutral-200 bg-white `}>
              <TouchableOpacity style={tw`flex-row bg-yellow-50`} onPress={onHandleVisibleWaitDDH}>
                <Text style={tw`my-3 ml-4 flex-1 text-base text-[#1B2733]`}>Đơn Hàng Đang Vận Chuyển</Text>
                <TouchableOpacity
                  onPress={onHandleVisibleWaitDDH}
                  style={tw`my-1.5 mr-4 flex h-8 w-8 items-center justify-center rounded-full bg-amber-500`}
                >
                  <Icon name="timer-sand" style={tw`text-white`} />
                </TouchableOpacity>
              </TouchableOpacity>
            </View>
          </View> */}
          {formatDateString(currentDate) === formatDateString(TodayDate) && (
            <View>
              <ItemsView
                onHandleEvent={handleGoOrderDetail}
                imageCrop={<Image source={IMAGE_COCACOLA} style={tw`h-20 w-20`} resizeMode="stretch" />}
                header={<Text style={tw`text-sm text-black`}>Công Ty COCACOLA</Text>}
                message={
                  <Text style={tw`text-base font-bold text-black`}>
                    Hồ Chí Minh <Icon name="arrow-right" size="small" color={colors.neutral[400]} /> Đà Nẵng
                  </Text>
                }
                status={
                  <View style={tw`flex-row`}>
                    <Text style={tw`w-6/8 text-yellow-600`}> Đang Giao Hàng</Text>
                    <TouchableOpacity
                      style={tw`rounded-full border border-green-400 px-2`}
                      onPress={handleGoOrderReport}
                    >
                      <Text style={tw` text-green-400`}>Báo Cáo</Text>
                    </TouchableOpacity>
                  </View>
                }
                showMoreInfo={<Text>15 Tấn Vỏ Lon</Text>}
              />
              <ItemsView
                onHandleEvent={handleGoOrderDetail}
                imageCrop={<Image source={IMAGE_COCACOLA} style={tw`h-20 w-20`} resizeMode="stretch" />}
                header={<Text style={tw`text-sm text-black`}>Công Ty COCACOLA</Text>}
                message={
                  <Text style={tw`text-base font-bold text-black`}>
                    Cảng Biển <Icon name="arrow-right" size="small" color={colors.neutral[400]} /> Kho BaoSteal
                  </Text>
                }
                status={
                  <View style={tw`flex-row`}>
                    <Text style={tw`w-6/8 text-red-800`}> Đang Chờ Nhận Hàng</Text>
                    <TouchableOpacity
                      style={tw`rounded-full border border-green-400 px-2`}
                      onPress={handleGoOrderReport}
                    >
                      <Text style={tw` text-green-400`}>Báo Cáo</Text>
                    </TouchableOpacity>
                  </View>
                }
                showMoreInfo={<Text>4 tấn nắp</Text>}
              />
              <ItemsView
                onHandleEvent={handleGoOrderDetail}
                imageCrop={<Image source={IMAGE_COCACOLA} style={tw`h-20 w-20`} resizeMode="stretch" />}
                header={<Text style={tw`text-sm text-black`}>Công Ty COCACOLA</Text>}
                message={
                  <Text style={tw`text-base font-bold text-black`}>
                    Hồ Chí Minh <Icon name="arrow-right" size="small" color={colors.neutral[400]} /> Đà Nẵng
                  </Text>
                }
                status={
                  <View style={tw`flex-row`}>
                    <Text style={tw`w-6/8 text-red-800`}> Đang Chờ Nhận Hàng</Text>
                    <TouchableOpacity
                      style={tw`rounded-full border border-green-400 px-2`}
                      onPress={handleGoOrderReport}
                    >
                      <Text style={tw` text-green-400`}>Báo Cáo</Text>
                    </TouchableOpacity>
                  </View>
                }
                showMoreInfo={<Text>10 tấn chai nhựa</Text>}
              />
            </View>
          )}
          {/* <View style={tw`mb-2`}>
            <View style={tw`border border-neutral-200 bg-white `}>
              <TouchableOpacity style={tw`flex-row bg-red-200`} onPress={onHandleVisibleDeliveryDDH}>
                <Text style={tw`my-3 ml-4 flex-1 text-base text-[#1B2733]`}>Đơn Hàng Chờ Vận Chuyển</Text>
                <TouchableOpacity
                  onPress={onHandleVisibleDeliveryDDH}
                  style={tw`my-1.5 mr-4 flex h-8 w-8 items-center justify-center rounded-full bg-orange-800`}
                >
                  <Icon name="new-box" style={tw`text-white`} />
                </TouchableOpacity>
              </TouchableOpacity>
            </View>
          </View> */}
          {currentDate > TodayDate && (
            <View>
              <ItemsView
                onHandleEvent={handleGoOrderDetail}
                imageCrop={<Image source={IMAGE_TH_TRUE_MILK} style={tw`h-20 w-20`} resizeMode="stretch" />}
                header={<Text style={tw`text-sm text-black`}>TH True Milk</Text>}
                message={
                  <Text style={tw`text-base font-bold text-black`}>
                    Cảng Biển
                    <Icon name="arrow-right" size="small" color={colors.neutral[400]} /> Long Thành
                  </Text>
                }
                status={
                  <View style={tw`flex-row`}>
                    <Text style={tw`w-6/8 text-red-800`}> Đang Chờ Nhận Hàng</Text>
                    <TouchableOpacity
                      style={tw`rounded-full border border-green-400 px-2`}
                      onPress={handleGoOrderReport}
                    >
                      <Text style={tw` text-green-400`}>Báo Cáo</Text>
                    </TouchableOpacity>
                  </View>
                }
                showMoreInfo={<Text>500 Thùng Sữa</Text>}
              />
            </View>
          )}
          {/* <View style={tw`mb-2`}>
            <View style={tw`border border-neutral-200 bg-white `}>
              <TouchableOpacity style={tw`flex-row bg-[#E1F5E6]`} onPress={onHandleVisibleSuccessDDH}>
                <Text style={tw`my-3 ml-4 flex-1 text-base text-[#1B2733]`}>Đơn Hàng Đã Vận Chuyển</Text>
                <TouchableOpacity onPress={onHandleVisibleSuccessDDH} style={tw``}>
                  <Image source={IMAGE_STATUS} style={tw`my-1.5 mr-4 flex h-8 w-8 rounded-full`} />
                </TouchableOpacity>
              </TouchableOpacity>
            </View>
          </View> */}
          {currentDate.getDate() < TodayDate.getDate() && (
            <View>
              <ItemsView
                onHandleEvent={handleGoOrderDetail}
                imageCrop={<Image source={IMAGE_TH_TRUE_MILK} style={tw`h-20 w-20`} resizeMode="stretch" />}
                header={<Text style={tw`text-sm text-black`}>Công Ty TH True Milk</Text>}
                message={
                  <Text style={tw`text-base font-bold text-black`}>
                    Hồ Chí Minh <Icon name="arrow-right" size="small" color={colors.neutral[400]} /> Đà Nẵng
                  </Text>
                }
                status={
                  <View style={tw`flex-row`}>
                    <Text style={tw`w-6/8 text-green-400`}> Giao Hàng Thành Công</Text>
                    <TouchableOpacity
                      style={tw`rounded-full border border-green-400 px-2`}
                      onPress={handleGoOrderReport}
                    >
                      <Text style={tw` text-green-400`}>Báo Cáo</Text>
                    </TouchableOpacity>
                  </View>
                }
                showMoreInfo={<Text>500 Thùng Sữa</Text>}
              />
              <ItemsView
                onHandleEvent={handleGoOrderDetail}
                imageCrop={<Image source={IMAGE_TH_TRUE_MILK} style={tw`h-20 w-20`} resizeMode="stretch" />}
                header={<Text style={tw`text-sm text-black`}> Công Ty TH True Milk</Text>}
                message={
                  <Text style={tw`text-base font-bold text-black`}>
                    Ga Tàu Lửa
                    <Icon name="arrow-right" size="small" color={colors.neutral[400]} />
                    Long Thành
                  </Text>
                }
                status={
                  <View style={tw`flex-row`}>
                    <Text style={tw`w-6/8 text-green-400`}> Giao Hàng Thành Công</Text>
                    <TouchableOpacity
                      style={tw`rounded-full border border-green-400 px-2`}
                      onPress={handleGoOrderReport}
                    >
                      <Text style={tw` text-green-400`}>Báo Cáo</Text>
                    </TouchableOpacity>
                  </View>
                }
                showMoreInfo={<Text>5 tấn giấy in</Text>}
              />
              <ItemsView
                onHandleEvent={handleGoOrderDetail}
                imageCrop={<Image source={IMAGE_TH_TRUE_MILK} style={tw`h-20 w-20`} resizeMode="stretch" />}
                header={<Text style={tw`text-sm text-black`}> Công Ty TH True Milk</Text>}
                message={
                  <Text style={tw`text-base font-bold text-black`}>
                    Long Thành <Icon name="arrow-right" size="small" color={colors.neutral[400]} />
                    Cát Lái
                  </Text>
                }
                status={
                  <View style={tw`flex-row`}>
                    <Text style={tw`w-6/8 text-green-400`}> Giao Hàng Thành Công</Text>
                    <TouchableOpacity
                      style={tw`rounded-full border border-green-400 px-2`}
                      onPress={handleGoOrderReport}
                    >
                      <Text style={tw` text-green-400`}>Báo Cáo</Text>
                    </TouchableOpacity>
                  </View>
                }
                showMoreInfo={<Text>5 tấn nhựa</Text>}
              />
            </View>
          )}
        </View>
      </ScrollView>
      {/* </View> */}
    </View>
  );
};
export default Order;
