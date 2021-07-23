import React, { FC } from "react";
import { Button, Text, View } from "react-native";
import useAuthPresenter from "../screens/authPresenter";
import { useAuthStore } from "../stores/AuthStore/AuthStore";

const SignOutButton: FC = () => {
  const { signOut } = useAuthStore();
  return (
    <View style={{ width: 180, marginTop: 20 }}>
      <Button
        title="sign out"
        onPress={async () => {
          await signOut();
        }}
      ></Button>
    </View>
  );
};

export default SignOutButton;
