import React, { FC, ComponentProps } from "react";
import { View } from "react-native";
import { TextInput } from "react-native-paper";

type TextInputProps = ComponentProps<typeof TextInput>;

type IInputProps = {
  label: string;
  value: string;
} & TextInputProps;

const Input: FC<IInputProps> = ({ label, value, ...props }) => {
  return (
    <View>
      <TextInput
        {...props}
        theme={{
          colors: {
            text: "black",
            primary: "black",
            background: "transparent",
          },
        }}
        label={label}
        value={value}
        mode="flat"
      />
    </View>
  );
};

export default Input;
