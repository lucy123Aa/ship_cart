import { COLORS } from "@/typography/colors";
import React from "react";
import { StatusBar, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

function Search() {
  return (
    <>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="transparent"
      />

      <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.background }}>
        <View>
          <Text>Search </Text>
        </View>
      </SafeAreaView>
    </>
  );
}

export default Search;
