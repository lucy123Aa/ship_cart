import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Accordion from "@/components/Accordion";
import {
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

import Nike from "../../assets/svg/nike.svg";
import Lego from "../../assets/svg/lego.svg";
import Crayola from "../../assets/svg/crayola.svg";
import Jhonson from "../../assets/svg/jhonson.svg";

export default function Kids() {
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
          <Text style={styles.headerTitle}>Kids</Text>
        </View>
        <View style={styles.container}>
          <View style={styles.topSection}>
            <Svg Icon={Nike} />
            <Svg Icon={Lego} />
            <Svg Icon={Crayola} />
            <Svg Icon={Jhonson} />
          </View>
          <View style={styles.bottomSection}>
            <Accordion data={KidsItemsData} />
          </View>
        </View>
      </SafeAreaView>
    </>
  );
}

const Svg = ({ Icon }: { Icon: any }) => {
  return <Icon width={"40%"} height={45} />;
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
