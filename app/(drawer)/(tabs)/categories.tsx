import React from "react";
import { COLORS } from "@/typography/colors";
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Image } from "expo-image";

export default function Categories() {
  const router = useRouter();

  const kitchen = require("../../../assets/images/kitchen.jpg");

  return (
    <>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="transparent"
      />

      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: COLORS.background,
          paddingHorizontal: 5,
          paddingVertical: 10,
        }}
      >
        <View style={styles.headerSection}>
          <TouchableOpacity
            onPress={() => {
              router.back();
            }}
          >
            <MaterialCommunityIcons name="arrow-left" size={24} color="black" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>All Categories </Text>
        </View>

        <View style={{ flexDirection: "row", flex: 1, gap: 10, marginTop: 10 }}>
          <View
            style={{
              gap: 20,
              borderRightWidth: 1,
              borderRightColor: COLORS.border,
            }}
          >
            <LeftSection image={kitchen} label="Mobile" />
            <LeftSection image={kitchen} label="Mobile" />
            <LeftSection image={kitchen} label="Mobile" />
            <LeftSection image={kitchen} label="Mobile" />
            <LeftSection image={kitchen} label="Mobile" />
          </View>

          <View style={{ width: "70%" }}>
            <Text style={{ fontSize: 16, fontWeight: "semibold" }}>
              Top Categories For You
            </Text>
            <View
              style={{
                flexDirection: "row",
                flexWrap: "wrap",
                gap: 20,
              }}
            >
              <RightSection image={kitchen} label="Mobile" />
              <RightSection image={kitchen} label="Mobile" />
              <RightSection image={kitchen} label="Mobile" />
              <RightSection image={kitchen} label="Mobile" />
              <RightSection image={kitchen} label="Mobile" />
              <RightSection image={kitchen} label="Mobile" />
              <RightSection image={kitchen} label="Mobile" />
              <RightSection image={kitchen} label="Mobile" />
              <RightSection image={kitchen} label="Mobile" />
              <RightSection image={kitchen} label="Mobile" />
            </View>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
}

interface LeftSectionProp {
  image: any;
  label: string;
}

const LeftSection = ({ image, label }: LeftSectionProp) => {
  return (
    <TouchableOpacity
      style={{
        borderBottomWidth: 1,
        borderBottomColor: COLORS.border,
        gap: 10,
        padding: 5,
        paddingHorizontal: 20,
        alignItems: "center",
        backgroundColor: "white",
      }}
    >
      <Image
        source={image}
        style={{ width: 60, height: 60, resizeMode: "cover" }}
      />
      <Text style={{ color: COLORS.lightGreen }}>{label} </Text>
    </TouchableOpacity>
  );
};

interface RightSectionProp {
  image: any;
  label: string;
}

const RightSection = ({ image, label }: RightSectionProp) => {
  return (
    <TouchableOpacity
      style={{
        gap: 10,
        padding: 5,
        alignItems: "center",
      }}
    >
      <Image
        source={image}
        style={{ width: 60, height: 60, resizeMode: "cover" }}
      />
      <Text style={{ color: "black" }}>{label} </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  headerSection: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    marginBottom: 5,
    // borderWidth: 1,
  },

  headerTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "black",
  },
});
