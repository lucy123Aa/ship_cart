import Accordion from "@/components/Accordion";
import { AccordionBestSellerData } from "@/constants/Dummy/AccordionData";
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

import Lg_electronics from "../../assets/svg/lg_electronics.svg";
import Panasonic from "../../assets/svg/panasonic.svg";
import Apple from "../../assets/svg/apple.svg";

function BestSellers() {
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
          <Text style={styles.headerTitle}>Best Sellers</Text>
        </View>
        <View style={styles.container}>
          <View style={styles.topSection}>
            <Lg_electronics width={"45%"} height={45} />
            <Panasonic width={"45%"} height={45} />
            <Apple width={"45%"} height={45} />
          </View>

          <View style={styles.bottomSection}>
            <Accordion data={AccordionBestSellerData} />
          </View>
        </View>
      </SafeAreaView>
    </>
  );
}

export default BestSellers;

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
    marginTop:20
  },
  bottomSection: {},
});
