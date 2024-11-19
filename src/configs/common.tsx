import { Modal } from "react-native";
import { View } from "react-native";
import { TouchableOpacity } from "react-native";
import React, { PermissionsAndroid } from "react-native";
import ImageCropPicker from "react-native-image-crop-picker";
import colors from "tailwindcss/colors";

import { Text } from "@/components/atoms";
import TextWithIcon from "@/components/molecules/TextWithIcon/TextWithIcon";
import tw from "@/utils/tailwind";
export type OpenChoicePickerProps = {
  event?: (newImage: { imageName: string }) => void;
  visbleView: boolean;
  handleVisbleView: () => void;
};

export const OpenChoicePicker = ({ event, visbleView, handleVisbleView, ...otherProps }: OpenChoicePickerProps) => {
  const OpenCameraPicker = async () => {
    try {
      const cameraPermission = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.CAMERA);
      const photoPermission = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE, {
        title: "Cool Photo App Camera Permission",
        message: "Cool Photo App needs access to your camera " + "so you can take awesome pictures.",
        buttonNeutral: "Ask Me Later",
        buttonNegative: "Cancel",
        buttonPositive: "OK",
      });

      if (
        cameraPermission === PermissionsAndroid.RESULTS.GRANTED &&
        photoPermission === PermissionsAndroid.RESULTS.GRANTED
      ) {
        console.log("Quyền truy cập được cấp");
        ImageCropPicker.openCamera({
          mediaType: "photo",
          cropping: true,
        })
          .then((image) => {
            console.log(image);
            const newImage = { imageName: image.path };
            if (event) {
              return event(newImage);
            }
            return newImage;
          })
          .catch((error) => {
            console.log("Lỗi khi chọn hình ảnh:", error);
          });
        // Tiếp tục xử lý sau khi có quyền truy cập
      } else {
        if (cameraPermission === PermissionsAndroid.RESULTS.GRANTED) {
          ImageCropPicker.openCamera({
            mediaType: "photo",
            cropping: true,
          })
            .then((image) => {
              console.log(image);
              const newImage = { imageName: image.path };
              if (event) {
                return event(newImage);
              }
              return newImage;
            })
            .catch((error) => {
              console.log("Lỗi khi chọn hình ảnh:", error);
            });
        } else {
          console.log("Lỗi quyền yêu cầu chụp màn ảnh");
        }
      }
    } catch (error) {
      console.log("Lỗi khi yêu cầu quyền truy cập:", error);
    }
  };

  const openImagePicker = async () => {
    try {
      const cameraPermission = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.CAMERA);
      const photoPermission = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE, {
        title: "Cool Photo App Camera Permission",
        message: "Cool Photo App needs access to your camera " + "so you can take awesome pictures.",
        buttonNeutral: "Ask Me Later",
        buttonNegative: "Cancel",
        buttonPositive: "OK",
      });
      console.log(photoPermission);

      if (
        cameraPermission === PermissionsAndroid.RESULTS.GRANTED &&
        photoPermission === PermissionsAndroid.RESULTS.GRANTED
      ) {
        console.log("Quyền truy cập được cấp");
        ImageCropPicker.openPicker({
          mediaType: "photo",
          cropping: true,
        })
          .then((image) => {
            console.log(image);
            const newImage = { imageName: image.path };
            if (event) {
              return event(newImage);
            }
            return newImage;
          })
          .catch((error) => {
            console.log("Lỗi khi chọn hình ảnh:", error);
          });
        // Tiếp tục xử lý sau khi có quyền truy cập
      } else {
        if (photoPermission === PermissionsAndroid.RESULTS.GRANTED) {
          ImageCropPicker.openPicker({
            mediaType: "photo",
            cropping: true,
          })
            .then((image) => {
              console.log(image);
              const newImage = { imageName: image.path };
              if (event) {
                return event(newImage);
              }
              return newImage;
            })
            .catch((error) => {
              console.log("Lỗi khi chọn hình ảnh:", error);
            });
        } else {
          console.log("Lỗi yêu cầu quyền truy cập hình ảnh");
        }
      }
    } catch (error) {
      console.log("Lỗi khi yêu cầu quyền truy cập:", error);
    }
  };
  return (
    <Modal visible={visbleView} animationType="slide" transparent={true} {...otherProps}>
      <TouchableOpacity onPress={handleVisbleView} style={tw`flex-1 items-end  justify-end bg-black bg-opacity-50 `}>
        <View style={tw`h-44 w-full flex-col   gap-2  bg-white px-2 py-8`}>
          <TouchableOpacity onPress={OpenCameraPicker} style={tw` h-1/2  `}>
            <TextWithIcon
              size="large"
              hideLeft={true}
              leftColorIcon={colors.black}
              leftIcon="camera-outline"
              label={<Text style={tw`text-base font-bold`}>Chụp từ máy ảnh</Text>}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={openImagePicker} style={tw`h-1/2 `}>
            <TextWithIcon
              size="large"
              hideLeft={true}
              leftColorIcon={colors.black}
              leftIcon="image-multiple-outline"
              label={<Text style={tw`text-base font-bold`}>Chọn ảnh từ thư viện</Text>}
            />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};
