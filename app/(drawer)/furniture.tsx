import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Accordion from "@/components/Accordion";
import {
  FashionItemsData,
  FurnitureItemsData,
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

import Ikea from "../../assets/svg/ikea.svg";
import Serta from "../../assets/svg/Serta.svg";
import Steelcase from "../../assets/svg/steelcase.svg";

export default function Furniture() {
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
          <Text style={styles.headerTitle}>Furniture</Text>
        </View>
        <View style={styles.container}>
          <View style={styles.topSection}>
            <Ikea width={"30%"} height={45} />
            <Serta width={"50%"} height={60} />
            <Svg Icon={Steelcase} />
          </View>
          <View style={styles.bottomSection}>
            <Accordion data={FurnitureItemsData} />
          </View>
        </View>
      </SafeAreaView>
    </>
  );
}

const Svg = ({ Icon }: { Icon: any }) => {
  return <Icon width={"35%"} height={55} />;
};

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
    rowGap: 45,
    marginBottom: 30,
    marginTop: 20,
  },
  bottomSection: {},
});
