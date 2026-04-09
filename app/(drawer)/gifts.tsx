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

export default function Gifts() {
  const router = useRouter();

  return (
    <>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="transparent"
      />

      <SafeAreaView style={{ flex: 1 }}>
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
          <View style={styles.topSection}></View>
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
  topSection: {},
  bottomSection: {},
});
