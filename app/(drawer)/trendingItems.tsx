import Accordion from "@/components/Accordion";
import { AccordionTrendingItemsData } from "@/constants/Dummy/AccordionData";
import { COLORS } from "@/typography/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
const yellowFrame = require("../../assets/images/yellowFrame.png");

import Samsung from "../../assets/svg/samsung.svg";
import Dyson from "../../assets/svg/dyson.svg";
import Bose from "../../assets/svg/bose.svg";
import { Image } from "expo-image";

function TrendingItems() {
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
          <Text style={styles.headerTitle}>Trending Items</Text>
        </View>
        <View style={styles.container}>
          <View style={styles.topSection}>
            <Samsung width={"45%"} height={45} />
            <Dyson width={"45%"} height={45} />
            <Bose width={"45%"} height={45} />
            <Samsung width={"45%"} height={45} />
          </View>

          <View style={{ height: 150, width: 350 }}>
            <Image
              source={yellowFrame}
              style={{
                width: "100%",
                height: "100%",
                borderRadius: 5,
                resizeMode: "cover",
              }}
            />
          </View>
          <View style={styles.bottomSection}>
            <Accordion data={AccordionTrendingItemsData} />
          </View>
        </View>
      </SafeAreaView>
    </>
  );
}

export default TrendingItems;

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
    marginBottom: 30,
    marginTop: 20,
  },
  bottomSection: {},
});
