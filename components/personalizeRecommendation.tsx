import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function PersonalizeRecommendation() {
  return (
    <LinearGradient
      colors={["#667eea", "#764ba2"]}
      style={styles.bannerSection}
    >
      <View style={styles.bannerContent}>
        <Text style={styles.bannerTitle}>Personalized Recommendation</Text>
        <Text style={styles.bannerSubtitle}>
          See personalized reecommendation!!
        </Text>
        <TouchableOpacity style={styles.bannerButton}>
          <Text style={styles.bannerButtonText}>Sign in</Text>
        </TouchableOpacity>
      </View>
      {/* <Ionicons name="pricetag" size={80} color="rgba(255,255,255,0.2)" /> */}
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  bannerSection: {
    margin: 16,
    borderRadius: 20,
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    overflow: "hidden",
  },
  bannerContent: {
    flex: 1,
  },
  bannerTitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
    textAlign: "center",
  },
  bannerSubtitle: {
    color: "#fff",
    fontSize: 14,
    opacity: 0.9,
    marginBottom: 16,
    textAlign: "center",
  },
  bannerButton: {
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    paddingHorizontal: 40,
    paddingVertical: 10,
    borderRadius: 12,
    gap: 8,
  },
  bannerButtonText: {
    color: "#667eea",
    fontSize: 14,
    fontWeight: "600",
  },
});
