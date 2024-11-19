import { Header, ListItem } from "@rneui/themed";
import React, { useCallback, useState } from "react";
import { ScrollView, Text, View } from "react-native";

import {
  Button,
  ButtonGroup,
  CheckBox,
  Dialog,
  HeaderButton,
  Icon,
  ImageBackground,
  InputField,
  ListItemExpand,
} from "@/components/atoms";
import { PasswordField } from "@/components/molecules";
import { IMAGE_BACKGROUND } from "@/configs/resources";
import tw, { colors } from "@/utils/tailwind";

const Document = () => {
  const [checked, setChecked] = useState(false);
  const [open, setOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedIndexes, setSelectedIndexes] = useState([0, 1]);

  const handleOpenDialog = useCallback(() => {
    setOpen((prevValue) => !prevValue);
  }, []);

  const buttons = ["A", "B", "C"];

  const onChooseOnly = (index: number) => {
    setSelectedIndex(index);
  };

  const onChooseMany = (index: number[]) => {
    setSelectedIndexes(index);
  };

  const handleCheckedChange = useCallback(() => {
    setChecked((prevValue) => !prevValue);
  }, []);

  return (
    <>
      <Header leftComponent={<HeaderButton icon="arrow-left" title="Back" />} centerComponent={{ text: "Document" }} />
      <ImageBackground source={IMAGE_BACKGROUND}>
        <ScrollView style={tw`bg-white/80`}>
          <View style={tw`m-4 flex flex-col gap-4 rounded-lg border border-gray-200 p-4`}>
            <Text style={tw`text-center text-2xl font-bold`}>Styled by twrnc</Text>

            <View style={tw`flex flex-col gap-2`}>
              <Text style={tw`font-bold`}>CheckBox</Text>
              <CheckBox checked={checked} onPress={handleCheckedChange} />
              <CheckBox checked={checked} title="ABC" onPress={handleCheckedChange} />
              <CheckBox
                checked={checked}
                title={
                  <Text style={tw`ml-1`}>
                    ABC <Text style={tw`text-blue-500`}>ABC</Text>
                  </Text>
                }
                onPress={handleCheckedChange}
              />
            </View>

            <View style={tw`flex flex-col gap-2`}>
              <Text style={tw`font-bold`}>InputField</Text>
              <InputField />
              <InputField placeholder="Input with placeholder" />
              <InputField label="Label" placeholder="Input with placeholder" />
              <InputField
                label="With helper text"
                placeholder="Input with placeholder"
                helperText="This is a helper text"
              />
              <InputField
                label="Validation"
                placeholder="Input with placeholder"
                error
                helperText="Please input a value"
              />
              <InputField
                label="Left icon"
                placeholder="Input with placeholder"
                leftIcon={<Icon name="account-outline" color={colors.neutral[400]} />}
              />
              <InputField
                label="Right icon"
                placeholder="Input with placeholder"
                rightIcon={<Icon name="eye-off" color={colors.neutral[400]} />}
              />
            </View>

            <View style={tw`flex flex-col gap-2`}>
              <Text style={tw`font-bold`}>PasswordField</Text>
              <PasswordField label="Password" placeholder="Please input your password" />
            </View>

            <View style={tw`flex flex-col gap-2`}>
              <Text style={tw`font-bold`}>Button Group</Text>
              <Text>Select</Text>
              <ButtonGroup buttons={buttons} selectedIndex={selectedIndex} onPress={onChooseOnly} />

              <Text>Multiple selection</Text>
              <ButtonGroup buttons={buttons} selectMultiple selectedIndexes={selectedIndexes} onPress={onChooseMany} />
            </View>

            <View style={tw`flex flex-col gap-2`}>
              <ListItemExpand title={<Text style={tw`flex-1`}>Detail</Text>}>
                <ListItem>
                  <Icon name="inbox" color="grey" />
                  <ListItem.Content>
                    <ListItem.Title>Inbox</ListItem.Title>
                  </ListItem.Content>
                </ListItem>
                <ListItem>
                  <Icon name="trash-can-outline" color="grey" />
                  <ListItem.Content>
                    <ListItem.Title>Trash</ListItem.Title>
                  </ListItem.Content>
                  <ListItem.Chevron />
                </ListItem>
              </ListItemExpand>
            </View>

            <View style={tw`flex flex-col gap-2`}>
              <View style={tw`flex flex-row justify-center gap-3`}>
                <Icon name="face-man" size="large" color="#f87171" />
                <Icon name="check-circle" size="large" color="#fb923c" />
                <Icon name="card-account-mail" size="large" color="#fbbf24" />
                <Icon name="television" size="large" color="#fde047" />
                <Icon name="halloween" size="large" color="#84cc16" />
                <Icon name="youtube-studio" size="large" color="#2dd4bf" />
                <Icon name="alpha-w-circle" size="large" color="#e879f9" />
              </View>
              <Text style={tw`text-center`}>Icon by react-native-vector-icons MaterialCommunityIcons</Text>
            </View>

            <View style={tw`flex flex-col gap-2`}>
              <Button title="Primary Small" color="primary" size="sm" />
              <Button title="Primary Medium" color="primary" size="md" />
              <Button title="Primary Large" color="primary" size="lg" />
              <Button title="With icon" color="primary" icon={<Icon name="home" color={colors.white} />} />
              <Button title="Secondary" color="secondary" />
              <Button title="Error" color="error" />
              <Button title="Warning" color="warning" />
              <Button title="Success" color="success" />
              <Button title="OPEN DIALOG" color="primary" onPress={handleOpenDialog} />
              <Text style={tw`text-center`}>and UI toolkit by react-native-elements</Text>
            </View>

            <Dialog
              props={{
                isVisible: open,
                header: <Text style={tw`text-lg font-bold`}>Hello</Text>,
                message: "Xin Chào Quý Khách",
                onHandleButtonOK: handleOpenDialog,
              }}
            >
              <View>
                <Text>View from demo!</Text>
              </View>
            </Dialog>
          </View>
        </ScrollView>
      </ImageBackground>
    </>
  );
};

export default Document;
