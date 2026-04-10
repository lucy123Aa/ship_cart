import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Accordion from "@/components/Accordion";
import { MobileItemsData } from "@/constants/Dummy/AccordionData";
import { COLORS } from "@/typography/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import Android_logo from "../../assets/svg/android_logo.svg";
import Enk from "../../assets/svg/enk.svg";

export default function Mobiles() {
  const router = useRouter();

  return (
    <>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="transparent"
      />

      <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.background }}>
        <View style={styles.backBtnSection}>
          <TouchableOpacity
            onPress={() => {
              router.back();
            }}
          >
            <MaterialCommunityIcons name="arrow-left" size={24} color="black" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Mobiles</Text>
        </View>
        <View style={styles.container}>
          <View style={styles.topSection}>
            <View style={styles.topSection}>
              <Android_logo width={"45%"} height={25} />
              <Android_logo width={"45%"} height={25} />
              <Enk width={"45%"} height={30} />
            </View>
          </View>
          <View style={styles.bottomSection}>
            <Accordion data={MobileItemsData} />
          </View>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
  },
  backBtnSection: {
    flexDirection: "row",
    gap: 20,
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 1.5,
    borderBottomColor: COLORS.border,
    paddingHorizontal: 10,
  },
  headerTitle: { fontSize: 18, fontWeight: "600", color: "black" },
  topSection: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    rowGap: 35,
    marginBottom: 20,
    marginTop: 20,
  },
  bottomSection: {},
});
