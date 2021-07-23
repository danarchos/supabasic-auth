import { StackScreenProps } from "@react-navigation/stack";
import { observer } from "mobx-react-lite";
import React, { FC, useCallback, useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";
import SignOutButton from "../../components/SignOutButton";
import {
  MainNavigatorParamList,
  mainRoutes,
} from "../../navigation/NavigationService";

export type DashboardRoutingProps = StackScreenProps<
  MainNavigatorParamList,
  mainRoutes.Dashboard
>;

interface IDashboardScreenProps extends DashboardRoutingProps {}

const Dashboard: FC<IDashboardScreenProps> = ({ navigation }) => {
  return (
    <View style={{ padding: 10 }}>
      <Text>A screen - Dashboard</Text>
      <SignOutButton />
    </View>
  );
};

export default observer(Dashboard);

const styles = StyleSheet.create({
  header: {
    backgroundColor: "pink",
    padding: 40,
  },
  pageContainer: {
    marginHorizontal: 45,
    marginVertical: 20,
  },
});
