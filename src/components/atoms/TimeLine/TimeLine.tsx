import { Image } from "@rneui/themed";
import React, { ReactElement } from "react";
import { View } from "react-native";
import { ColorValue } from "react-native";
import Timeline from "react-native-timeline-flatlist";

import tw, { colors } from "@/utils/tailwind";

import Text from "../Text/Text";
export type TimeLineScreenProps = {
  // No props
  dotColor?: ColorValue | string;

  timelineData: {
    title: string;
    description?: string;
    time?: string;
    image?: { index: number; src: string }[];
  }[];
};

const TimeLineScreen = ({ dotColor, timelineData, ...otherProps }: TimeLineScreenProps): ReactElement => {
  const defaultColor = colors.neutral[200];
  const renderDetail = (rowData: any, sectionID: any, rowID: any) => {
    const { title, description, time, image } = rowData;

    return (
      <View style={tw`-top-4 flex-row`}>
        <View style={tw``}>
          <Text style={tw`font-bold`}>{title}</Text>
          {description && <Text>{description}</Text>}
          {time && <Text>{time}</Text>}
          <View style={tw`flex-row gap-2`}>
            {image && image.map((item: any) => <Image key={item.index} source={item.src} style={tw`h-12 w-12`} />)}
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={[tw`mb-4 flex-1 py-4`]} {...otherProps}>
      <Timeline
        data={timelineData.reverse()}
        renderDetail={renderDetail}
        renderCircle={(rowData, sectionID, rowID) => {
          rowData.circleSize = 15;
          if (sectionID === 0) {
            return (
              <View
                style={[
                  tw`absolute left-3 h-4 w-4 items-center justify-center rounded-full`,
                  { backgroundColor: dotColor || defaultColor },
                ]}
              >
                <View style={tw` h-2 w-2 rounded-full bg-white`} />
              </View>
            );
          } else {
            return (
              <View
                style={[tw`absolute left-4  h-2 w-2  rounded-full `, { backgroundColor: dotColor || defaultColor }]}
              />
            );
          }
        }}
        lineColor={colors.gray[200]}
        titleStyle={tw`bottom-4`}
        descriptionStyle={tw`bottom-4  text-gray-500`}
        showTime={false}
      />
    </View>
  );
};

export default TimeLineScreen;
