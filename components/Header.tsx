import { COLORS } from "@/typography/colors";
import { Feather, Ionicons } from "@expo/vector-icons";
import React, { useRef, useState } from "react";
import {
  Animated,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { DrawerActions } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";

import ShipCartLogo from "../assets/svg/shipCart_logo.svg";
import Divider from "./Divider";
import { useRouter } from "expo-router";

function Header() {
  const router = useRouter();
  const navigation = useNavigation();
  const scrollY = useRef(new Animated.Value(0)).current;

  const [searchText, setSearchText] = useState("");

  const headerOpacity = scrollY.interpolate({
    inputRange: [0, 100],
    outputRange: [1, 0.95],
    extrapolate: "clamp",
  });

  return (
    <Animated.View style={[styles.headerSection, { opacity: headerOpacity }]}>
      <View style={styles.headerTop}>
        <TouchableOpacity
          style={styles.iconButton}
          onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
        >
          <View style={{ flexDirection: "row", gap: 10, alignItems: "center" }}>
            <Feather name="menu" size={24} color="#1a1a1a" />
            <ShipCartLogo width={140} height={50} />
          </View>
        </TouchableOpacity>
        <View style={styles.headerRight}>
          <TouchableOpacity
            style={styles.iconButton}
            onPress={() => router.push("/cart")}
          >
            <Feather name="shopping-cart" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity
        style={styles.searchSection}
        onPress={() => router.push("/(drawer)/(tabs)/search")}
      >
        <View style={[styles.searchBar]}>
          <Feather name="search" size={20} color="#6a6868" />
          {/* <TextInput
            placeholder="Search your item here"
            placeholderTextColor="#999"
            style={styles.searchInput}
            value={searchText}
            onChangeText={setSearchText}
          />
          {searchText.length > 0 && (
            <TouchableOpacity onPress={() => setSearchText("")}>
              <Ionicons name="close-circle" size={20} color="#999" />
            </TouchableOpacity>
          )} */}

          <Text style={{ color: "#999" }}>Search your item herez</Text>
        </View>
      </TouchableOpacity>

      <Divider />
      <View style={styles.deliveryItem}>
        <Ionicons name="location-outline" size={16} color="black" />
        <Text style={styles.deliveryText}>
          Location: 17 Waverley Crescent, Middleham
        </Text>
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  headerSection: {
    // paddingTop: 48,
    paddingHorizontal: 16,
    paddingBottom: 16,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  headerTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderColor: "red",
  },
  iconButton: {
    padding: 8,
  },
  headerRight: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  searchSection: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    marginBottom: 8,
  },
  searchBar: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#E5E7EB",
    borderRadius: 12,
    paddingHorizontal: 12,
    height: 40,
    gap: 8,
    // marginBottom: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: "#1a1a1a",
  },
  filterButton: {
    backgroundColor: COLORS.darkPink,
    width: 48,
    height: 48,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  deliveryInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 8,
  },
  deliveryItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  deliveryText: {
    fontSize: 15,
    color: "black",
  },
});

export default Header;
