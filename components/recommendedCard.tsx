import { COLORS } from "@/typography/colors";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import React from "react";
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

interface RecommendedCardProps {
  id: number;
  title: string;
  price: string;
  image: string;
  rating: number;
  off: number;
  onPress: () => void;
}

const RecommendedCard = ({
  id,
  title,
  price,
  image,
  rating,
  off,
  onPress,
}: RecommendedCardProps) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress} key={id}>
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.title} numberOfLines={2}>
          {title}
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 10,
          }}
        >
          <View style={{ flexDirection: "row", gap: 2 }}>
            <AntDesign name="star" size={20} color={COLORS.gold} />
            <AntDesign name="star" size={20} color={COLORS.gold} />
            <AntDesign name="star" size={20} color={COLORS.gold} />
            <AntDesign name="star" size={20} color={COLORS.gold} />
            <AntDesign name="star" size={20} color={COLORS.gold} />
          </View>
          <Text style={styles.rating}>({rating})</Text>
        </View>
        <View style={styles.footer}>
          <View style={styles.priceSection}>
            <MaterialIcons name="currency-pound" size={18} color="black" />
            <Text style={styles.price}>{price}</Text>
          </View>
          <View style={styles.offSection}>
            <MaterialIcons name="currency-pound" size={12} color="gray" />
            <Text style={styles.off}>{off}</Text>
            <View style={styles.strike} />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 12,
    padding: 12,
    width: 200,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOpacity: 0.8,
    shadowRadius: 10,
    elevation: 3,
    // marginBottom: 5,
  },
  image: {
    width: "100%",
    height: 180,
    borderRadius: 8,
    marginBottom: 8,
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 8,
    color: "#333",
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    // borderWidth: 1,
    marginTop: 8,
  },
  priceSection: {
    flexDirection: "row",
    alignItems: "center",
  },
  price: {
    fontSize: 16,
    fontWeight: "bold",
    color: "black",
  },

  offSection: {
    flexDirection: "row",
    alignItems: "center",
    position: "relative",
  },

  off: {
    fontSize: 13,
    color: "gray",
  },

  strike: {
    position: "absolute",
    height: 1,
    backgroundColor: "gray",
    width: "100%",
    top: "45%",
  },
  rating: {
    fontSize: 12,
    color: "#666",
  },
});

export default RecommendedCard;
