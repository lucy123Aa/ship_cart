import { COLORS } from "@/typography/colors";
import React from "react";
import { StatusBar, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Explore() {
  return (
    <>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="transparent"
      />

      <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.background }}>
        <View>
          <Text>Explore </Text>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({});
