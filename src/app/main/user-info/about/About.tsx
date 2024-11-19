import { useNavigation } from "@react-navigation/native";
import { Header } from "@rneui/themed";
import React, { Linking, TouchableOpacity, View } from "react-native";

import { HeaderButton, Logo, Text } from "@/components/atoms";
import TextWithIcon from "@/components/molecules/TextWithIcon/TextWithIcon";
import tw from "@/utils/tailwind";

const About = () => {
  const navigation = useNavigation();
  const handleGoBack = () => {
    return navigation.goBack();
  };
  const handleLinkPress = () => {
    Linking.openURL("https://tms.gss-sol.com");
  };

  const handleEmailPress = () => {
    Linking.openURL("mailto:example@example.com");
  };
  return (
    <View style={tw`flex-1 flex-col bg-neutral-100`}>
      <Header
        containerStyle={tw`bg-white`}
        leftComponent={<HeaderButton icon="arrow-left" iconColor="#979797" onPress={handleGoBack} />}
        centerComponent={{ text: "Thông tin ứng dụng", style: { color: "#1B2733" } }}
      />
      <Logo width={98} height={36} style={tw`my-2 items-center  bg-white`} />
      <View style={tw` bg-white`}>
        <View style={tw`w-full flex-row border-b border-neutral-200 px-3 py-3`}>
          <View style={tw`-left-2 w-1/3 self-start`}>
            <TextWithIcon
              label={<Text style={tw`text-sm`}>Địa Chỉ</Text>}
              leftIcon="map-marker-radius-outline"
              size="medium"
              hideLeft={true}
            />
          </View>
          <View style={tw`  w-2/3`}>
            <Text style={tw`text-right text-sm text-neutral-400`}>
              BS9, Diamond Riverside, 1646A Vo Van Kiet, Ward 16, Dist 8, HCM City, VietNam
            </Text>
          </View>
        </View>
        <View style={tw`w-full flex-row border-b border-neutral-200 px-3 py-3`}>
          <View style={tw`-left-2 w-1/3 self-start`}>
            <TextWithIcon
              label={<Text style={tw`text-sm`}>Website</Text>}
              leftIcon="web-sync"
              size="medium"
              hideLeft={true}
            />
          </View>
          <View style={tw`  w-2/3`}>
            <TouchableOpacity>
              <Text style={tw`text-right text-sm text-neutral-400 underline `} onPress={handleLinkPress}>
                https://tms.gss-sol.com
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={tw`w-full flex-row border-b border-neutral-200 px-3 py-3`}>
          <View style={tw`-left-2 w-1/3 self-start`}>
            <TextWithIcon
              label={<Text style={tw`text-sm`}>Hỗ trợ</Text>}
              leftIcon="email-outline"
              size="medium"
              hideLeft={true}
            />
          </View>
          <View style={tw`  w-2/3`}>
            <TouchableOpacity onPress={handleEmailPress}>
              <Text style={tw`text-right text-sm text-neutral-400 underline`}>contact@gss-sol.com</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={tw`w-full flex-row border-b border-neutral-200 px-3 py-3`}>
          <View style={tw`-left-2 w-1/3 self-start`}>
            <TextWithIcon
              label={<Text style={tw`text-sm`}>Phiên bản</Text>}
              leftIcon="update"
              size="medium"
              hideLeft={true}
            />
          </View>
          <View style={tw`  w-2/3`}>
            <Text style={tw`text-right text-sm text-neutral-400`}>3.2.5</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default About;
