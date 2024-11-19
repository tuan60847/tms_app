import { useNavigation } from "@react-navigation/native";
import { useCallback, useState } from "react";
import React, { TouchableOpacity, View } from "react-native";

import { CheckBox, Icon, InputField, Text } from "@/components/atoms";
import { PasswordField } from "@/components/molecules";
import tw, { colors } from "@/utils/tailwind";

interface LoginProps {
  onLogin?: () => void;
}

const Login = (props: LoginProps) => {
  const [visbleSavePassword, setVisbleSavePassword] = useState(false);
  const handleVisbleSavePassword = useCallback(() => {
    setVisbleSavePassword((prevValue) => !prevValue);
  }, []);
  const [FaceID, setFaceID] = useState(true);
  const navigation = useNavigation();
  const handleOpenLogin = () => {
    navigation.navigate("MainScreen" as never);
  };
  return (
    <View style={tw`flex bg-white`}>
      {/* <Header backgroundColor="white" /> */}
      <View style={tw`h-full justify-center `}>
        <View style={tw`px-6 py-6`}>
          <Text style={tw`text-4xl font-bold`}>Đăng Nhập</Text>
          <Text style={tw`text-xl font-bold text-neutral-400`}>Hãy Điền Thông Tin Của Bạn</Text>
        </View>

        <View style={tw`gap-4 px-2`}>
          <InputField
            leftIcon={<Icon name="account-outline" color={colors.green[400]} />}
            placeholder="Nhập Số Điện Thoại"
            label="Số Điện Thoại"
            autoFocus={true}
            inputContainerStyle={tw`rounded-xl border border-neutral-400`}
          />
          <PasswordField
            placeholder="Nhập Mật Khẩu"
            label="Mật Khẩu"
            leftIcon={<Icon name="form-textbox-password" color={colors.green[400]} />}
            inputContainerStyle={tw`rounded-xl border border-neutral-400`}
          />
        </View>
        <View style={tw`px-4 py-4`}>
          <CheckBox
            checked={visbleSavePassword}
            checkedColor={colors.green[400]}
            onPress={handleVisbleSavePassword}
            title={
              <Text style={tw`ml-2`}>
                Đã đọc và đồng ý với <Text style={tw`text-blue-500`}>điều khoản sử dụng</Text>
              </Text>
            }
          />
        </View>
        <View style={tw`flex-row gap-3 px-4 py-4`}>
          <TouchableOpacity style={tw`w-4/5 items-center rounded-xl bg-green-400 py-5`} onPress={handleOpenLogin}>
            <Text style={tw`font-bold text-white`}>ĐĂNG NHẬP</Text>
          </TouchableOpacity>
          <TouchableOpacity style={tw`w-15 items-center rounded-xl bg-green-400 py-5`} onPress={handleOpenLogin}>
            <Icon name={FaceID ? "face-recognition" : "fingerprint"} color={colors.white} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
    // <ImageBackground imageStyle={[tw`absolute bottom-24 `, { transform: [{ scale: 1.7 }] }]} source={IMAGE_BACKGROUND}>
    //   <View style={tw`flex-1 justify-between`}>
    //     <View style={tw`mt-14 flex w-36  items-center self-center rounded-3xl border border-white  bg-white`}>
    //       <Logo width={98} height={36} />
    //     </View>

    //     <View style={tw`h-92 justify-center gap-2 rounded-t-3xl border border-white bg-white/80`}>
    //       <InputField
    //         // rightIcon={FaceID ? <Icon name="fingerprint" /> : <Icon name="face-recognition" />}
    //         rightIcon={
    //           <View style={tw`flex-row gap-1`}>
    //             <Icon name="fingerprint" />
    //             <Icon name="face-recognition" />
    //           </View>
    //         }
    //         label="Tài Khoản"
    //         placeholder="Tên đăng nhập hoặc địa chỉ email"
    //       />
    //       <PasswordField label="Mật Khẩu" placeholder="Mật Khẩu" />
    //       <CheckBox
    //         checked={visbleSavePassword}
    //         onPress={handleVisbleSavePassword}
    //         title={
    //           <Text style={tw`ml-2`}>
    //             Đã đọc và đồng ý với <Text style={tw`text-blue-500`}>điều khoản sử dụng</Text>
    //           </Text>
    //         }
    //       />
    //       <Button
    //         title="Đăng Nhập"
    //         color={colors.blue[500]}
    //         buttonStyle={tw`mx-2 rounded-md py-4`}
    //         onPress={handleOpenLogin}
    //       />

    //       {/* <View style={tw`flex-row items-center justify-center  gap-1 px-1`}>
    //         <View style={tw`h-14  w-14 items-center justify-center rounded-md bg-green-400`}>
    //           <Icon name="fingerprint" size="large" color={colors.white} />
    //         </View>
    //         <View style={tw`h-14 w-14 items-center justify-center rounded-md bg-green-400`}>
    //           <Icon name="face-recognition" size="large" color={colors.white} />
    //         </View>
    //       </View> */}
    //     </View>
    //   </View>
    // </ImageBackground>
  );
};
export default Login;
