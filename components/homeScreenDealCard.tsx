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
      <Image source={image} style={styles.dealImage} />
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
    height: 150,
    borderRadius: 12,
    marginBottom: 8,
    resizeMode: "cover",
  },
  dealTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: "#1a1a1a",
    marginBottom: 4,
    textAlign: "center",
  },
});
export default HomeScreenDealCard;
