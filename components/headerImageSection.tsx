import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Animated from "react-native-reanimated";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

function HeaderImageSection() {
  const modalImage =
    "https://img.freepik.com/free-photo/fashionable-pale-brunette-long-green-dress-black-jacket-sunglasses-standing-street-daytime-against-wall-light-city-building_197531-24468.jpg?semt=ais_incoming&w=740&q=80";

  return (
    <View style={styles.heroWrapper}>
      <Image source={modalImage} style={styles.heroImage} />
      <LinearGradient
        colors={["rgba(0,0,0,0.8)", "rgba(0,0,0,0.5)", "rgba(0,0,0,0.4)"]}
        style={styles.heroOverlay}
      >
        <Animated.View
          style={[
            styles.imageSection,
            {
              flexDirection: "row",
              flexWrap: "wrap",
            },
          ]}
        >
          <Text style={styles.heroTitle}>Get an </Text>

          <View
            style={{
              borderBottomWidth: 2,
              borderColor: "white",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Text style={styles.heroTitle}>extra </Text>
            <MaterialIcons name="currency-pound" size={40} color="white" />
            <Text style={styles.heroTitle}>20 </Text>
          </View>
          <Text style={styles.heroTitle}>this Black Friday.</Text>
        </Animated.View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  heroWrapper: {
    height: 200,
    position: "relative",
    marginBottom:5
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
  },

  imageSection: {
    padding: 24,
  },

  heroTitle: {
    color: "#fff",
    fontSize: 42,
    fontWeight: "bold",
  },
});

export default HeaderImageSection;
