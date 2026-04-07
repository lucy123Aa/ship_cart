import { COLORS } from "@/typography/colors";
import { Image } from "expo-image";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface HomeScreenDealCardProp {
  id: number;
  image: any;
  title: string;
  discount?: string;
  price?: string;
  originalPrice?: string;
}

function HomeScreenDealCard({
  id,
  title,
  discount,
  price,
  originalPrice,
  image,
}: HomeScreenDealCardProp) {
  return (
    <TouchableOpacity key={id} style={styles.dealCard}>
      <Image source={{ uri: image }} style={styles.dealImage} />
      <Text style={styles.dealTitle}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  dealCard: {
    width: 160,
  },

  discountText: {
    color: "#fff",
    fontSize: 10,
    fontWeight: "700",
  },
  dealImage: {
    width: "100%",
    height: 180,
    borderRadius: 12,
    marginBottom: 8,
  },
  dealTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: "#1a1a1a",
    marginBottom: 4,
  },
  priceContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginBottom: 8,
  },
  currentPrice: {
    fontSize: 16,
    fontWeight: "700",
    color: COLORS.darkPink,
  },
  originalPrice: {
    fontSize: 12,
    color: "#999",
    textDecorationLine: "line-through",
  },
  addButton: {
    backgroundColor: COLORS.darkPink,
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: "center",
  },
  addButtonText: {
    color: "white",
    fontSize: 12,
    fontWeight: "600",
  },
});
export default HomeScreenDealCard;
