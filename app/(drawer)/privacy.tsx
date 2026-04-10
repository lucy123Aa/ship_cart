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
import { privacy } from "@/constants/static/privacy";

export default function Privacy() {
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
            <Text style={styles.headerTitle}>Privacy Policy</Text>
          </View>
          <View style={styles.container}>
            {privacy.map((data) => (
              <View
                style={{
                  marginVertical: 15,
                }}
                key={data.id}
              >
                <Data
                  id={data.id}
                  label={data.label}
                  des={data.des}
                  points={data.points}
                />
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
  des?: string;
  points?: string[];
}

const Data = ({ id, label, des, points }: DataProp) => {
  return (
    <>
      <View style={styles.data}>
        <Text style={styles.label}>{id}.</Text>
        <Text style={styles.label}>{label}</Text>
      </View>

      {des && <Text style={styles.des}>{des}</Text>}

      {points &&
        points.map((point, index) => (
          <View key={index} style={styles.pointRow}>
            <Text style={styles.dot}>•</Text>
            <Text style={styles.pointText}>{point}</Text>
          </View>
        ))}
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
  label: {
    fontSize: 20,
    fontWeight: "500",
    color: "black",
  },
  des: { fontSize: 14, fontWeight: "light" },
  pointRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginVertical: 2,
  },
  dot: {
    marginRight: 6,
    fontSize: 16,
  },
  pointText: {
    flex: 1,
  },
});
