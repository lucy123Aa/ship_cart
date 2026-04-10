import { Image } from "expo-image";
import React from "react";

import { StyleSheet, View } from "react-native";

interface HeaderImageSectionProp {
  image: any;
}

function HeaderImageSection({ image }: HeaderImageSectionProp) {
  return (
    <View style={styles.heroWrapper}>
      <Image source={image} style={styles.heroImage} />
    </View>
  );
}

const styles = StyleSheet.create({
  heroWrapper: {
    height: 170,
    position: "relative",
    marginBottom: 5,
    width: 380,
  },
  heroImage: {
    width: "100%",
    height: "100%",
  },
});

export default HeaderImageSection;
