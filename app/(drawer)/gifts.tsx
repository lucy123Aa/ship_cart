import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Accordion from "@/components/Accordion";
import {
  FashionItemsData,
  GiftsItemsData,
  KidsItemsData,
  MobileItemsData,
} from "@/constants/Dummy/AccordionData";
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

import Hallmark_logo from "../../assets/svg/Hallmark_logo.svg";
import Xbox from "../../assets/svg/xbox.svg";
import { Image } from "expo-image";

export default function Gifts() {
  const router = useRouter();
  const saleImage = require("../../assets/images/sale_50_Frame.png");
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
          <Text style={styles.headerTitle}>Gifts</Text>
        </View>
        <View style={styles.container}>
          <View style={styles.topSection}>
            <Hallmark_logo width={"30%"} height={45} />
            <Xbox width={"30%"} height={45} />
          </View>

          <Image source={saleImage} style={styles.saleImage} />
          <View style={styles.bottomSection}>
            <Accordion data={GiftsItemsData} />
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
    justifyContent: "space-around",
    rowGap: 45,
    marginBottom: 30,
    marginTop: 20,
  },
  saleImage: { width: "auto", height: 130, resizeMode: "contain" },
  bottomSection: {},
});
