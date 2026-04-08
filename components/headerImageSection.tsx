import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";

import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from "react-native";
import { MotiView } from "moti";
import Ionicons from "@expo/vector-icons/Ionicons";
import { FontAwesome6 } from "@expo/vector-icons";

const { width } = Dimensions.get("window");

interface HeaderImageSectionProp {
  image: any;
  des: string;
}

function HeaderImageSection({ image, des }: HeaderImageSectionProp) {
  const [liked, setLiked] = useState(false);

  return (
    <View style={styles.heroWrapper}>
      <Image source={{ uri: image }} style={styles.heroImage} />
      <LinearGradient
        colors={["rgba(0,0,0,0.8)", "rgba(0,0,0,0.5)", "rgba(0,0,0,0.4)"]}
        style={styles.heroOverlay}
      >
        <MotiView
          from={{ opacity: 0, translateY: 50 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ type: "timing", duration: 500 }}
          style={[
            styles.imageSection,
            {
              flexDirection: "row",
              flexWrap: "wrap",
            },
          ]}
        >
          <Text style={styles.heroTitle}>{des}</Text>
        </MotiView>

        <TouchableOpacity
          onPress={() => setLiked(!liked)}
          style={{
            backgroundColor: "white",
            padding: 8,
            transform: [{ rotate: "-40deg" }],
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 8,
            position: "absolute",
            top: "40%",
            left: 20,
          }}
        >
          <FontAwesome6
            name="heart"
            size={24}
            color={liked ? "black" : "black"}
            style={{ transform: [{ rotate: "40deg" }] }}
            solid={liked}
          />
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  heroWrapper: {
    height: 200,
    position: "relative",
    marginBottom: 5,
    width: 380,
  },
  heroImage: {
    width: "100%",
    height: "100%",
  },
  heroOverlay: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: "100%",
    justifyContent: "flex-end",
    alignItems: "center",
  },

  imageSection: {
    marginBottom: 10,
  },

  heroTitle: {
    color: "#fff",
    fontSize: 35,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default HeaderImageSection;
