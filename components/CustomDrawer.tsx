import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import {
  AntDesign,
  FontAwesome,
  FontAwesome6,
  MaterialCommunityIcons,
  MaterialIcons,
  Ionicons,
  SimpleLineIcons,
} from "@expo/vector-icons";
import { COLORS } from "@/typography/colors";
import Divider from "./Divider";
import { useRouter } from "expo-router";

export default function CustomDrawer(props: any) {
  const router = useRouter();
  return (
    <DrawerContentScrollView
      {...props}
      style={{}}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.backBtnSection}>
        <TouchableOpacity onPress={() => props.navigation.closeDrawer()}>
          <MaterialCommunityIcons name="arrow-left" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Menu</Text>
      </View>

      {/* ===== SHOP SECTION ===== */}
      <DrawerRow
        label="Best Sellers"
        onPress={() => props.navigation.navigate("bestSellers")}
        icon={({ color }: any) => (
          <MaterialCommunityIcons name="star-outline" size={22} color={color} />
        )}
      />

      <DrawerRow
        label="Trending Items"
        onPress={() => props.navigation.navigate("trendingItems")}
        icon={({ color }: any) => (
          <MaterialCommunityIcons name="fire" size={22} color={color} />
        )}
      />

      <DrawerRow
        label="Today's discount"
        onPress={() => props.navigation.navigate("todayDiscount")}
        icon={({ color }: any) => (
          <MaterialIcons name="discount" size={24} color={color} />
        )}
      />

      <DrawerRow
        label="Mobile"
        onPress={() => props.navigation.navigate("mobiles")}
        icon={({ color }: any) => (
          <AntDesign name="mobile" size={24} color={color} />
        )}
      />

      <DrawerRow
        label="Electronics"
        onPress={() => props.navigation.navigate("electronics")}
        icon={({ color }: any) => (
          <MaterialIcons name="electric-bolt" size={24} color={color} />
        )}
      />

      <DrawerRow
        label="Fashion"
        onPress={() => props.navigation.navigate("fashion")}
        icon={({ color }: any) => (
          <Ionicons name="bag-outline" size={24} color={color} />
        )}
      />

      <DrawerRow
        label="Kids"
        onPress={() => props.navigation.navigate("kids")}
        icon={({ color }: any) => (
          <SimpleLineIcons name="emotsmile" size={24} color={color} />
        )}
      />

      <DrawerRow
        label="Kitchen"
        onPress={() => props.navigation.navigate("kitchen")}
        icon={({ color }: any) => (
          <MaterialIcons name="soup-kitchen" size={24} color={color} />
        )}
      />

      <DrawerRow
        label="Furniture"
        onPress={() => props.navigation.navigate("furniture")}
        icon={({ color }: any) => (
          <Ionicons name="home-outline" size={24} color={color} />
        )}
      />

      <DrawerRow
        label="Gifts"
        onPress={() => props.navigation.navigate("gifts")}
        icon={({ color }: any) => (
          <Ionicons name="gift-outline" size={24} color={color} />
        )}
      />

      {/* ===== LEGAL TITLE (NON CLICKABLE) ===== */}
      <Text style={styles.sectionTitle}>Legal</Text>

      <DrawerRow
        label="Terms & Conditions"
        onPress={() => props.navigation.navigate("terms")}
        icon={({ color }: any) => (
          <MaterialIcons name="security" size={24} color={color} />
        )}
      />

      <DrawerRow
        label="Privacy Policy"
        onPress={() => props.navigation.navigate("privacy")}
        icon={({ color }: any) => (
          <MaterialCommunityIcons name="lock-outline" size={24} color={color} />
        )}
      />

      <DrawerRow
        label="Refund Policy"
        onPress={() => props.navigation.navigate("refundPolicy")}
        icon={({ color }: any) => (
          <MaterialCommunityIcons name="cash" size={24} color={color} />
        )}
      />

      <DrawerRow
        label="Disclaimer"
        onPress={() => props.navigation.navigate("disclaimer")}
        icon={({ color }: any) => (
          <Ionicons name="warning-outline" size={24} color={color} />
        )}
      />

      {/* ===== HELP TITLE ===== */}
      <Text style={styles.sectionTitle}>Help & Support</Text>

      <DrawerRow
        label="Contact Us"
        onPress={() => props.navigation.navigate("contactUs")}
        icon={({ color }: any) => (
          <MaterialIcons name="support-agent" size={24} color={color} />
        )}
      />

      <DrawerRow
        label="FAQ's"
        onPress={() => props.navigation.navigate("faq")}
        icon={({ color }: any) => (
          <MaterialIcons name="question-mark" size={24} color={color} />
        )}
      />

      <DrawerRow
        label="Help Center"
        onPress={() => props.navigation.navigate("helpCenter")}
        icon={({ color }: any) => (
          <MaterialCommunityIcons
            name="help-box-outline"
            size={24}
            color={color}
          />
        )}
      />

      <TouchableOpacity style={styles.btn} onPress={() => {}}>
        <Text style={styles.text}>Sell on Shipcart</Text>
        <AntDesign name="arrow-right" size={14} color="white" />
      </TouchableOpacity>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  backBtnSection: {
    flexDirection: "row",
    gap: 20,
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 1.5,
    borderBottomColor: COLORS.border,
    paddingHorizontal: 10,
  },
  headerTitle: { fontSize: 18, fontWeight: "600", color: "black" },
  sectionTitle: {
    marginTop: 20,
    marginLeft: 16,
    marginBottom: 5,
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },

  btn: {
    backgroundColor: COLORS.lightGreen,
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    gap: 5,
  },

  text: { color: "white", fontSize: 14 },
});

const DrawerRow = ({ label, onPress, icon }: any) => {
  return (
    <DrawerItem
      onPress={onPress}
      icon={icon}
      inactiveTintColor="gray"
      label={({ color }) => (
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            flex: 1,
          }}
        >
          <Text style={{ color, fontSize: 16 }}>{label}</Text>
          <MaterialCommunityIcons
            name="chevron-right"
            size={20}
            color={color}
          />
        </View>
      )}
    />
  );
};
