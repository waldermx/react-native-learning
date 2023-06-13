import Constants from "expo-constants";
import { Text, View } from "react-native";
import React from "react";
import RepositoryList from "./RepositoryList";

const Main = () => {
  return (
    <View style={{ marginTop: Constants.statusBarHeight, flexGrow: 1 }}>
      <RepositoryList/>
    </View>
  );
};

export default Main;
