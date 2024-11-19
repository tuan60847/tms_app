import { useNavigation } from "@react-navigation/native";
import { Header } from "@rneui/themed";
import React, { useCallback, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

import { Dialog, HeaderButton, Icon } from "@/components/atoms";
import tw, { colors } from "@/utils/tailwind";

const Notification = () => {
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);
  const handleShowFullText = useCallback(() => {
    setShow((prevValue) => !prevValue);
  }, []);

  const handleOpenDialog = useCallback(() => {
    setOpen((prevValue) => !prevValue);
  }, []);

  const [show1, setShow1] = useState(false);
  const handleOpenShow1 = useCallback(() => {
    setShow1((prevValue) => !prevValue);
  }, []);

  const [show2, setShow2] = useState(false);
  const handleOpenShow2 = useCallback(() => {
    setShow2((prevValue) => !prevValue);
  }, []);
  const navigation = useNavigation();
  const handleGoBack = () => {
    navigation.goBack();
  };
  return (
    <View>
      <View>
        <Header
          containerStyle={tw`bg-white`}
          centerComponent={{ text: "Thông báo", style: { color: "#1B2733" } }}
          rightComponent={<HeaderButton icon="check" iconColor={colors.green[400]} onPress={handleGoBack} />}
        />
      </View>
      <View style={tw`h-2 bg-gray-100`} />
      <TouchableOpacity onPress={handleShowFullText} onLongPress={handleOpenDialog} style={tw` px-2 py-1`}>
        <View style={tw`rounded-lg border-b border-gray-200 bg-white py-2`}>
          <Text style={tw`ml-14 font-medium text-black`}>Cảnh báo nguy cơ</Text>
          <View style={tw`flex flex-row`}>
            <Icon name="map-marker-alert-outline" style={tw`mx-4 flex self-center `} color="#F97316" />
            <Text numberOfLines={show ? 100 : 2} style={tw`flex-1 `}>
              Tại ngã từ đường Võ Văn Kiệt, giao với An Dương Vương hiện đang kẹt xe dữ dội, tài xế nên cân nhắc kỹ
              lưỡng khi qua đoạn đường này, tài xế có thể rẽ vào đường Hồ Ngọc Lãm rồi rẽ trái vào đường Phú Định, đi
              hết đường Phú Định để trở lại Võ Văn Kiệt
            </Text>
            <Icon name={show ? "chevron-down" : "chevron-up"} style={tw`mx-2 flex self-center `} />
          </View>
          <Text style={tw`ml-14`}>12/06/2023 17:30</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleOpenShow1} onLongPress={handleOpenDialog} style={tw` px-2 py-1`}>
        <View style={tw`rounded-lg border-b border-gray-200 bg-white py-2`}>
          <Text style={tw`ml-14 font-medium text-black`}>Cảnh báo nguy cơ</Text>
          <View style={tw`flex flex-row`}>
            <Icon name="map-marker-alert-outline" style={tw`mx-4 flex self-center `} color="#F97316" />
            <Text numberOfLines={show1 ? 100 : 2} style={tw`flex-1 `}>
              Tại ngã từ đường Võ Văn Kiệt, giao với An Dương Vương hiện đang kẹt xe dữ dội, tài xế nên cân nhắc kỹ
              lưỡng khi qua đoạn đường này, tài xế có thể rẽ vào đường Hồ Ngọc Lãm rồi rẽ trái vào đường Phú Định, đi
              hết đường Phú Định để trở lại Võ Văn Kiệt
            </Text>
            <Icon name={show1 ? "chevron-down" : "chevron-up"} style={tw`mx-2 flex self-center `} />
          </View>
          <Text style={tw`ml-14`}>12/06/2023 17:30</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleOpenShow2} onLongPress={handleOpenDialog} style={tw` px-2 py-1`}>
        <View style={tw`rounded-lg border-b border-gray-200 bg-white py-2`}>
          <Text style={tw`ml-14 font-medium text-black`}>Cảnh báo nguy cơ</Text>
          <View style={tw`flex flex-row`}>
            <Icon name="map-marker-alert-outline" style={tw`mx-4 flex self-center `} color="#F97316" />
            <Text numberOfLines={show2 ? 100 : 2} style={tw`flex-1 `}>
              Tại ngã từ đường Võ Văn Kiệt, giao với An Dương Vương hiện đang kẹt xe dữ dội, tài xế nên cân nhắc kỹ
              lưỡng khi qua đoạn đường này, tài xế có thể rẽ vào đường Hồ Ngọc Lãm rồi rẽ trái vào đường Phú Định, đi
              hết đường Phú Định để trở lại Võ Văn Kiệt
            </Text>
            <Icon name={show2 ? "chevron-down" : "chevron-up"} style={tw`mx-2 flex self-center `} />
          </View>
          <Text style={tw`ml-14`}>12/06/2023 17:30</Text>
        </View>
      </TouchableOpacity>
      <Dialog
        props={{
          isVisible: open,
          header: "Xác nhận",
          message: "Bạn có chắc là muốn xóa thông báo",
          onHandleButtonOK: handleOpenDialog,
          onHandleButtonCancel: handleOpenDialog,
          labelButtonOk: "Xóa",
          labelButtonCancel: "Hủy",
          type: "Info",
          colorButtonOk: colors.red[500],
          colorButtonCancel: colors.blue[500],
        }}
      />
    </View>
  );
};

export default Notification;
