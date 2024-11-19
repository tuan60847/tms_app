import { ListItem as RNEListItem, ListItemProps as RNEListItemProps } from "@rneui/themed";
import React, { ReactElement } from "react";
import { View } from "react-native";

import tw from "@/utils/tailwind";

export type ListItemProps = RNEListItemProps & {
  title?: ReactElement;
};

const ListItemExpand = ({ title, ...otherProps }: ListItemProps): ReactElement => {
  const [expanded, setExpanded] = React.useState(false);
  return (
    <View style={tw`bg-white`}>
      <RNEListItem.Accordion
        containerStyle={tw``}
        content={title}
        isExpanded={expanded}
        onPress={() => {
          setExpanded(!expanded);
        }}
        {...otherProps}
      >
        {otherProps.children}
      </RNEListItem.Accordion>
    </View>
  );
};

export default ListItemExpand;
