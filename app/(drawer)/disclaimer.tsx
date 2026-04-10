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
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { termsCondition } from "@/constants/static/termsCondition";
import { disclaimer } from "@/constants/static/disclaimer";

export default function Disclaimer() {
  const router = useRouter();

  return (
    <>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="transparent"
      />

      <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.background }}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 30 }}
        >
          <View style={styles.backBtnSection}>
            <TouchableOpacity
              onPress={() => {
                router.back();
              }}
            >
              <MaterialCommunityIcons
                name="arrow-left"
                size={24}
                color="black"
              />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>Disclaimer</Text>
          </View>
          <View style={styles.container}>
            {disclaimer.map((data) => (
              <View
                style={{
                  marginVertical: 15,
                }}
                key={data.id}
              >
                <Data id={data.id} label={data.label} des={data.des} />
              </View>
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

interface DataProp {
  id: number;
  label: string;
  des: string;
}

const Data = ({ id, label, des }: DataProp) => {
  return (
    <>
      <View style={styles.data}>
        <Text style={styles.lable}>{id}.</Text>
        <Text style={styles.lable}>{label}</Text>
      </View>
      <Text style={styles.des}>{des} </Text>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
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
  data: { flexDirection: "row", alignItems: "center", gap: 5, marginBottom: 3 },
  lable: {
    fontSize: 20,
    fontWeight: "500",
    color: "black",
  },
  des: { fontSize: 14, fontWeight: "light" },
});
