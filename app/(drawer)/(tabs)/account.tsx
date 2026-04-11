import React, { useState } from "react";
import { COLORS } from "@/typography/colors";
import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function Account() {
  const router = useRouter();
  const [follow, setFollow] = useState(false);

  const user = {
    name: "Tikkaram's",
    userImage: require("../../../assets/images/user.png"),
    about: "RSP Enterprise",
    des: "Dive into gooey, mounthwatering slices that will make your taste buds dance with joy",
    followers: 194,
    products: 34,
    sold: "66k+",
  };

  const handleFollow = () => {
    setFollow(!follow); // toggle
  };

  return (
    <>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="transparent"
      />

      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: COLORS.background,
          paddingHorizontal: 5,
          paddingVertical: 10,
        }}
      >
        <View style={styles.headerSection}>
          <TouchableOpacity
            onPress={() => {
              router.back();
            }}
          >
            <MaterialCommunityIcons name="arrow-left" size={24} color="black" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}> {user.name} </Text>
        </View>

        <View style={styles.topContainer}>
          <View style={styles.imageSection}>
            <Image
              source={user.userImage}
              style={{ width: "100%", height: "100%", resizeMode: "cover" }}
            />
          </View>
          <View style={styles.userNameSection}>
            <Text style={styles.userName}>{user.name} </Text>
            <Text style={styles.userAbout}>{user.about} </Text>
            <Text style={styles.userDes}>{user.des} </Text>
          </View>
        </View>

        <View
          style={{
            marginVertical: 15,
            flexDirection: "row",
            justifyContent: "space-between",
            paddingHorizontal: 20,
          }}
        >
          <View>
            <Text>{user.followers} </Text>
            <Text>Followers </Text>
          </View>
          <View
            style={{
              height: "auto",
              width: 0.9,
              backgroundColor: COLORS.border,
            }}
          />

          <View>
            <Text>{user.products} </Text>
            <Text>Products </Text>
          </View>
          <View
            style={{
              height: "auto",
              width: 0.9,
              backgroundColor: COLORS.border,
            }}
          />
          <View>
            <Text>{user.sold} </Text>
            <Text>Sold </Text>
          </View>
        </View>

        <TouchableOpacity
          style={follow ? styles.nonClick : styles.onClick}
          onPress={handleFollow}
        >
          <Text>+Follow/Edit Profile</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  headerSection: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    marginBottom: 5,
    // borderWidth: 1,
  },

  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
  },
  userName: {
    fontSize: 18,
    fontWeight: "semibold",
    color: "black",
  },
  userAbout: {
    fontSize: 16,
    fontWeight: "semibold",
    color: "black",
  },
  userDes: {
    fontSize: 14,
    fontWeight: "light",
    color: "gray",
  },

  topContainer: {
    flexDirection: "row",
    gap: 5,
    justifyContent: "flex-start",
    marginTop: 10,
  },

  imageSection: {
    width: 100,
    height: 100,
    borderRadius: 50,
    overflow: "hidden",
  },

  userNameSection: {
    gap: 4,
    width: "70%",
  },

  nonClick: {
    backgroundColor: COLORS.lightGray,
    paddingVertical: 10,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 5,
  },
  onClick: {
    paddingVertical: 10,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: COLORS.border,
    backgroundColor: COLORS.border,
    borderRadius: 5,
  },
});
