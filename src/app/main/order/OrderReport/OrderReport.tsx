import { useNavigation } from "@react-navigation/native";
import { Header, Image } from "@rneui/themed";
import { useCallback, useState } from "react";
import React, { FlatList, TextInput, TouchableOpacity, View } from "react-native";

import { HeaderButton, Icon, Text } from "@/components/atoms";
import { SelectOption } from "@/components/molecules";
import { OpenChoicePicker } from "@/configs/common";
import { IMAGE_TMS_LOGO } from "@/configs/resources";
import tw, { colors } from "@/utils/tailwind";

const OrderReport = () => {
  const button = ["Lấy Hàng", "Đang Giao", "Đã Giao", "Giao Hàng Thành Công", "Đơn Hàng Bị Trục Trặc"];
  const [images, setImages] = useState([{ imageName: IMAGE_TMS_LOGO }]);
  const addImage = (newImage: { imageName: string }) => {
    const updatedImages = [newImage, ...images];
    setImages(updatedImages);
  };
  const navigation = useNavigation();
  const handleGoBack = () => {
    return navigation.goBack();
  };
  const [visbleView, setVisbleView] = useState(false);
  const handleVisbleView = useCallback(() => {
    setVisbleView((prevValue) => !prevValue);
  }, []);

  const [selectedValue, setSelectedValue] = useState("");
  const handleSelectOption = (value: string) => {
    setSelectedValue(value);
  };

  const zoomImage = (value: any) => {
    console.log(value);
  };

  return (
    <View>
      <Header
        backgroundColor="white"
        leftComponent={<HeaderButton icon="arrow-left" iconColor={colors.green[400]} onPress={handleGoBack} />}
        centerComponent={<Text style={tw`text-xl font-bold`}>Cập nhật trạng thái</Text>}
        rightComponent={<HeaderButton icon="check" iconColor={colors.green[400]} onPress={handleGoBack} />}
      />

      <View style={tw`flex flex-col `}>
        <View style={tw`mx-2 mb-5 flex-col gap-2`}>
          <Text style={tw`text-lg font-bold`}>Mã vận đơn: 256325698</Text>
          <View style={tw`flex-col items-start justify-between`}>
            <Text style={tw`text-lg font-bold `}>Kiểu Trạng Thái</Text>
            <SelectOption
              data={button}
              onSelect={handleSelectOption}
              label="Chọn Kiểu"
              selectedValue={selectedValue}
              buttonStyle={tw`w-full rounded-xl border border-neutral-400 bg-white`}
            />
          </View>
          <View style={tw`flex-col items-start justify-between `}>
            <Text style={tw`text-lg font-bold`}>Lời nhắn</Text>
            <TextInput
              editable
              multiline
              numberOfLines={3}
              style={[tw`w-full rounded-xl border border-neutral-400 bg-white p-2 text-base`]}
              placeholderTextColor={colors.neutral[400]}
              placeholder="Ghi chú"
              textAlignVertical="top"
            />
          </View>
        </View>

        <View style={tw`flex h-full bg-slate-100 `}>
          <Text style={tw`px-2 text-lg font-bold`}>Hình Ảnh</Text>
          <FlatList
            data={images}
            renderItem={({ item, index }) => {
              const handleImageTap = () => {
                zoomImage(item.imageName);
              };
              if (index === images.length - 1) {
                return (
                  <TouchableOpacity onPress={handleVisbleView}>
                    <View
                      style={tw`h-25 w-25 my-2 mr-2 items-center justify-center rounded-md border border-blue-500 bg-blue-500/20`}
                    >
                      <Icon name="plus" size="large" color={colors.neutral[400]} />
                      <Text style={tw`text-neutral-400`}>Thêm Hình</Text>
                    </View>
                  </TouchableOpacity>
                );
              } else {
                if (typeof item.imageName === "string") {
                  return (
                    <View style={tw`mr-8.5 my-2  rounded-sm border border-neutral-200`}>
                      <TouchableOpacity onPress={handleImageTap}>
                        <Image source={{ uri: item.imageName }} containerStyle={tw`h-25 w-25`} resizeMode="contain" />
                      </TouchableOpacity>
                      <TouchableOpacity style={tw`absolute right-1 top-1  bg-black/20`}>
                        <Icon name="window-close" color={colors.white} />
                      </TouchableOpacity>
                    </View>
                  );
                } else {
                  return (
                    <View style={tw`mr-8.5 my-2  rounded-sm border border-neutral-200`}>
                      <Image source={item.imageName} containerStyle={tw`h-25 w-25`} resizeMode="contain" />
                      <TouchableOpacity style={tw`absolute right-1 top-1  bg-black/20`}>
                        <Icon name="window-close" color={colors.white} />
                      </TouchableOpacity>
                    </View>
                  );
                }
              }
            }}
            numColumns={3}
            contentContainerStyle={tw`mx-2`}
          />
        </View>
      </View>
      <OpenChoicePicker handleVisbleView={handleVisbleView} visbleView={visbleView} event={addImage} />
    </View>
  );
};
export default OrderReport;
