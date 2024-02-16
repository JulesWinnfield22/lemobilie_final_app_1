import React from "react";
// import Constants from "expo-constants";
import { SafeAreaView, StatusBar, ScrollView, StyleSheet } from "react-native";
import colors from "../assets/style/colors";

export default function Screen({ safeArea = true, statusBarBg, children, style = {} }) {

  if(safeArea) {
    return (
      <>
        <SafeAreaView style={[styles.screen, style]}>
          <ScrollView contentInsetAdjustmentBehavior="automatic" contentContainerStyle={{ flexGrow: 1 }}>
            {children}
          </ScrollView>
        </SafeAreaView>
        <StatusBar barStyle={'dark-content'} backgroundColor={statusBarBg || '#0000'} style="auto" />
      </>
    );
  }

  return (
    <>
      <ScrollView contentContainerStyle={[{backgroundColor: colors.baseClr, flexGrow: 1 }]}>
        {children}
      </ScrollView>
      <StatusBar barStyle={'dark-content'} backgroundColor={statusBarBg || '#0000'} style="auto" />
    </>
  )
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.baseClr,
    // paddingTop: Constants.statusBarHeight,
    flex: 1,
  },
});
