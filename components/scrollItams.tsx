import { Image } from "expo-image";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface ScrollItemsProps {
  title: string;
  image: any;
  color: string;
  isSelected: boolean;
  onPress: () => void;
}

export const ScrollItems = ({
  title,
  image,
  color,
  isSelected,
  onPress,
}: ScrollItemsProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.categoryItem}>
      <View
        style={[
          styles.categoryIconContainer,
          { backgroundColor: "white" },
          isSelected && styles.selectedCategory,
        ]}
      >
        <Image
          source={image}
          style={{
            width: 50,
            height: 50,
            borderRadius: 30,
            resizeMode: "contain",
          }}
        />
      </View>

      <Text
        style={[styles.categoryText, isSelected && styles.selectedCategoryText]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  categoryItem: {
    alignItems: "center",
    gap: 8,
  },
  categoryIconContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 4,
  },
  selectedCategory: {
    transform: [{ scale: 1.05 }],
  },
  categoryText: {
    fontSize: 12,
    color: "#666",
  },
  selectedCategoryText: {
    color: "black",
    fontWeight: "bold",
  },
});
