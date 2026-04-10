import React from "react";
import { COLORS } from "@/typography/colors";
import { StatusBar, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Categories() {
  return (
    <>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="transparent"
      />

      <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.background }}>
        <View>
          <Text>Categories </Text>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({});
