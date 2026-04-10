import Accordion from "@/components/Accordion";
import { TodayDiscountItemsData } from "@/constants/Dummy/AccordionData";
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
import Tcl from "../../assets/svg/tcl.svg";
import Jbl from "../../assets/svg/jbl.svg";

function TodayDiscount() {
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
          <Text style={styles.headerTitle}>Todays Discount</Text>
        </View>
        <View style={styles.container}>
          <View style={styles.topSection}>
            <Tcl width={"35%"} height={35} />
            <Jbl width={"35%"} height={35} />
          </View>
          <View style={styles.bottomSection}>
            <Accordion data={TodayDiscountItemsData} />
          </View>
        </View>
      </SafeAreaView>
    </>
  );
}

export default TodayDiscount;

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
