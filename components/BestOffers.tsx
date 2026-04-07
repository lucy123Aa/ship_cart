import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { COLORS } from "@/typography/colors";

interface BestOffersProp {
  id: number;
  image: any;
  title: string;
  rating: number;
  price: string;
}

function BestOffers({ id, image, title, rating, price }: BestOffersProp) {
  return (
    <TouchableOpacity key={id} style={styles.popularCard}>
      <Image source={{ uri: image }} style={styles.popularImage} />
      <Text style={styles.popularTitle}>{title}</Text>
      <View style={styles.ratingContainer}>
        <Ionicons name="star" size={14} color={COLORS.gold} />
        <Text style={styles.ratingText}>{rating}</Text>
      </View>
      <Text style={styles.popularPrice}>{price}</Text>
      <TouchableOpacity style={styles.quickAddButton}>
        <Ionicons name="add" size={20} color="#fff" />
      </TouchableOpacity>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  popularCard: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 10,
    width: 175,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  popularImage: {
    width: "100%",
    height: 150,
    borderRadius: 12,
    marginBottom: 8,
  },
  popularTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: "#1a1a1a",
    marginBottom: 4,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    marginBottom: 4,
  },
  ratingText: {
    fontSize: 12,
    color: "#666",
  },
  popularPrice: {
    fontSize: 16,
    fontWeight: "700",
    color: "#FF6B6B",
  },
  quickAddButton: {
    position: "absolute",
    bottom: 12,
    right: 12,
    backgroundColor: "#FF6B6B",
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default BestOffers;
