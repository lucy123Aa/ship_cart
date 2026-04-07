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
  off:number
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
            gap:10
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
          <Text style={styles.price}>
            <MaterialIcons name="currency-pound" size={24} color="black" />
            {price}
          </Text>
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
    backgroundColor: COLORS.lightBlue,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 3,
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
    justifyContent: "space-between",
    alignItems: "center",
  },
  price: {
    fontSize: 16,
    fontWeight: "bold",
    color: "black",
  },
  rating: {
    fontSize: 12,
    color: "#666",
  },
});

export default RecommendedCard;
