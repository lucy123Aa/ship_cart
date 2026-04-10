import Accordion from "@/components/Accordion";
import {
  ElectronicsItemsData,
  MobileItemsData,
} from "@/constants/Dummy/AccordionData";
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
import Enk from "../../assets/svg/enk.svg";
import Tcl from "../../assets/svg/tcl.svg";
import Jbl from "../../assets/svg/jbl.svg";
import Samsung from "../../assets/svg/samsung.svg";
import Dyson from "../../assets/svg/dyson.svg";
import Bose from "../../assets/svg/bose.svg";
import Hisense from "../../assets/svg/hisense.svg";
import Sonos from "../../assets/svg/sonos.svg";
import Sony from "../../assets/svg/sony.svg";
import Canon from "../../assets/svg/canon.svg";
import Blaupunkt from "../../assets/svg/blaupunkt.svg";
import Ps5 from "../../assets/svg/ps5.svg";

export default function Electronics() {
  const router = useRouter();

  return (
    <>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="transparent"
      />

      <SafeAreaView style={{ flex: 1 , backgroundColor:COLORS.background}}>
        <View style={styles.backBtnSection}>
          <TouchableOpacity
            onPress={() => {
              router.back();
            }}
          >
            <MaterialCommunityIcons name="arrow-left" size={24} color="black" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Electronics</Text>
        </View>
        <View style={styles.container}>
          <View style={styles.topSection}>
            <Svg Icon={Bose} />
            <Svg Icon={Ps5} />
            <Svg Icon={Dyson} />
            <Svg Icon={Panasonic} />
            <Svg Icon={Enk} />
            <Svg Icon={Blaupunkt} />
            <Svg Icon={Lg_electronics} />
            <Svg Icon={Samsung} />
            <Svg Icon={Sony} />
            <Svg Icon={Hisense} />
            <Svg Icon={Sonos} />
            <Svg Icon={Tcl} />
            <Svg Icon={Canon} />
            <Svg Icon={Jbl} />
          </View>
          <View style={styles.bottomSection}>
            <Accordion data={ElectronicsItemsData} />
          </View>
        </View>
      </SafeAreaView>
    </>
  );
}

const Svg = ({ Icon }: { Icon: any }) => {
  return <Icon width={"35%"} height={35} />;
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
