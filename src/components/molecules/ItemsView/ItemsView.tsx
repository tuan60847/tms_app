import React, { ReactElement } from "react";
import { TouchableOpacity, View } from "react-native";

import tw from "@/utils/tailwind";

export type ItemsViewProps = {
  imageCrop?: ReactElement;
  header?: ReactElement;
  message?: ReactElement;
  status?: ReactElement;
  showMoreInfo?: ReactElement;
  onHandleEvent?: () => void;
};

const ItemsView = ({
  imageCrop,
  header,
  message,
  showMoreInfo,
  status,
  onHandleEvent,
  ...otherProps
}: ItemsViewProps): ReactElement => {
  return (
    <TouchableOpacity
      onPress={onHandleEvent}
      style={tw`w-6/7 -right-3 mb-4 h-36 flex-row items-center self-center rounded-xl bg-white`}
      {...otherProps}
    >
      {imageCrop && (
        <View style={tw`relative -left-6 h-24 w-24 items-center justify-center rounded-xl bg-neutral-200`}>
          {imageCrop}
        </View>
      )}
      <View style={tw`h-24 w-56 justify-around`}>
        {header && header}
        {message && message}
        {showMoreInfo && showMoreInfo}
        {status && status}
      </View>
    </TouchableOpacity>
  );
};

export default ItemsView;
