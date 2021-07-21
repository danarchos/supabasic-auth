import {
  createStackNavigator,
  StackScreenProps,
} from "@react-navigation/stack";
import * as React from "react";
import { observer } from "mobx-react-lite";
import { NavigationContainer } from "@react-navigation/native";

import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import navigationService, {
  AuthNavigatorParamList,
  authRoutes,
  authLinking,
} from "./NavigationService";
import { RootStackParamList } from "../types";
import theme from "../styles/theme/navigationTheme";

import LoginScreen from "../screens/LoginScreen";
import SignUpScreen from "../screens/SignUpScreen";

const Stack = createStackNavigator<AuthNavigatorParamList>();

const AuthNavigator = () => {
  return (
    <NavigationContainer
      theme={theme}
      linking={authLinking}
      ref={navigationService.navigationRef}
    >
      <Stack.Navigator>
        <Stack.Screen name={authRoutes.Login} component={LoginScreen} />
        <Stack.Screen name={authRoutes.SignUp} component={SignUpScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkText: {
    fontSize: 14,
    color: "#2e78b7",
  },
});

export default AuthNavigator;
