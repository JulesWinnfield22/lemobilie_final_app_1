import React, { PropsWithChildren } from "react";
import { SafeAreaView, StatusBar, ScrollView, StyleSheet, ViewStyle } from "react-native";
import colors from "../assets/style/colors";
import { StatusBarStyle } from 'react-native'

type ScreenProps = PropsWithChildren<{
  barStyle: StatusBarStyle,
  safeArea: boolean,
  statusBarBg: string,
  style?: ViewStyle
}>

export default function Screen({ barStyle = 'dark-content', safeArea = true, statusBarBg = 'white', children, style = {} }: ScreenProps) {

  if(safeArea) {
    return (
      <>
        <SafeAreaView style={[styles.screen, style]}>
          <ScrollView contentInsetAdjustmentBehavior="automatic" contentContainerStyle={{ flexGrow: 1 }}>
            {children}
          </ScrollView>
        </SafeAreaView>
        <StatusBar barStyle={barStyle} backgroundColor={statusBarBg} />
      </>
    );
  }

  return (
    <>
      <ScrollView contentContainerStyle={[{backgroundColor: colors.baseClr, flexGrow: 1 }]}>
        {children}
      </ScrollView>
      <StatusBar barStyle={barStyle} backgroundColor={statusBarBg} />
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
