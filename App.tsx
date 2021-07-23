import "./init";

import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

import RootNavigator from "./navigation/RootNavigator";
import { SupabaseWrapper } from "./config/SupabaseInit";

export default function App() {
  return (
    <SupabaseWrapper>
      <SafeAreaProvider>
        <RootNavigator />
        <StatusBar />
      </SafeAreaProvider>
    </SupabaseWrapper>
  );
}
