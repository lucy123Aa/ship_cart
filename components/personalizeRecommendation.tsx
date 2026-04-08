import { COLORS } from "@/typography/colors";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function PersonalizeRecommendation() {
  return (
    <View style={styles.whiteBox}>
      <Text style={styles.bannerSubtitle}>
        See personalized reecommendations
      </Text>
      <TouchableOpacity style={styles.bannerButton}>
        <Text style={styles.bannerButtonText}>Sign in</Text>
      </TouchableOpacity>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 2,
          alignSelf: "center",
          marginTop: 10,
        }}
      >
        <Text>New customer?</Text>
        <TouchableOpacity>
          <Text style={{ color: COLORS.lightGreen }}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  whiteBox: {
    marginHorizontal: 5,
    marginVertical: 5,
    paddingHorizontal: 2,
    paddingVertical: 10,
    backgroundColor: "white",
    shadowColor: "gray",
    elevation: 3,
    borderRadius: 10,
  },
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

  bannerSubtitle: {
    color: "black",
    fontSize: 19,
    opacity: 0.9,
    marginBottom: 16,
    textAlign: "center",
  },
  bannerButton: {
    backgroundColor: COLORS.lightGreen,
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    paddingHorizontal: 40,
    paddingVertical: 10,
    borderRadius: 8,
  },
  bannerButtonText: {
    color: "white",
    fontSize: 14,
    fontWeight: "600",
  },
});
