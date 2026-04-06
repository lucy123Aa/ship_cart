import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";
import { Drawer } from "expo-router/drawer";
import { Text, View } from "react-native";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

export default function DrawerLayout() {
  return (
    <Drawer screenOptions={{ headerShown: false }}>
      {/* Show only what you want */}
      <Drawer.Screen
        name="(tabs)"
        options={{
          title: "Home",
          drawerIcon: () => {
            <MaterialCommunityIcons
              name="home-outline"
              size={24}
              color="black"
            />;
          },
        }}
      />

      <Drawer.Screen
        name="bestSellers"
        options={{
          title: "Best Sellers",
          drawerIcon: ({ size, color }) => (
            <MaterialCommunityIcons
              name="star-outline"
              size={size}
              color={color}
            />
          ),
          drawerLabel: ({ color }) => (
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                flex: 1,
              }}
            >
              <Text style={{ color }}>Best Sellers</Text>
              <MaterialCommunityIcons
                name="chevron-right"
                size={24}
                color={color}
              />
            </View>
          ),
        }}
      />

      <Drawer.Screen
        name="trendingItems"
        options={{
          title: "Trending Items",
          drawerIcon: ({ color }) => (
            <FontAwesome5 name="fire" size={24} color={color} />
          ),
          drawerLabel: ({ color }) => (
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                flex: 1,
              }}
            >
              <Text style={{ color }}>Trending Items</Text>
              <MaterialCommunityIcons
                name="chevron-right"
                size={20}
                color={color}
              />
            </View>
          ),
        }}
      />

      <Drawer.Screen
        name="todayDiscount"
        options={{
          title: "Today Discount",
          drawerIcon: ({ color }) => (
            <MaterialIcons name="discount" size={24} color={color} />
          ),
          drawerLabel: ({ color }) => (
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                flex: 1,
              }}
            >
              <Text style={{ color }}>Today Discount</Text>
              <MaterialCommunityIcons
                name="chevron-right"
                size={20}
                color={color}
              />
            </View>
          ),
        }}
      />

      <Drawer.Screen
        name="mobiles"
        options={{
          title: "Mobiles",
          drawerIcon: ({ color }) => (
            <AntDesign name="mobile" size={24} color="black" />
          ),
          drawerLabel: ({ color }) => (
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                flex: 1,
              }}
            >
              <Text style={{ color }}>Mobiles</Text>
              <MaterialCommunityIcons
                name="chevron-right"
                size={20}
                color={color}
              />
            </View>
          ),
        }}
      />

      <Drawer.Screen
        name="electronics"
        options={{
          title: "electronics",
          drawerIcon: ({ color }) => (
            <MaterialIcons name="electric-bolt" size={24} color={color} />
          ),
          drawerLabel: ({ color }) => (
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                flex: 1,
              }}
            >
              <Text style={{ color }}>electronics</Text>
              <MaterialCommunityIcons
                name="chevron-right"
                size={20}
                color={color}
              />
            </View>
          ),
        }}
      />

      <Drawer.Screen
        name="kids"
        options={{
          title: "kids",
          drawerIcon: ({ color }) => (
            <FontAwesome6 name="child" size={24} color={color} />
          ),
          drawerLabel: ({ color }) => (
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                flex: 1,
              }}
            >
              <Text style={{ color }}>kids</Text>
              <MaterialCommunityIcons
                name="chevron-right"
                size={20}
                color={color}
              />
            </View>
          ),
        }}
      />
      <Drawer.Screen
        name="kitchen"
        options={{
          title: "kitchen",
          drawerIcon: ({ color }) => (
            <MaterialIcons name="soup-kitchen" size={24} color={color} />
          ),
          drawerLabel: ({ color }) => (
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                flex: 1,
              }}
            >
              <Text style={{ color }}>kitchen</Text>
              <MaterialCommunityIcons
                name="chevron-right"
                size={20}
                color={color}
              />
            </View>
          ),
        }}
      />

      <Drawer.Screen
        name="fashion"
        options={{
          title: "fashion",
          drawerIcon: ({ color }) => (
            <FontAwesome name="shopping-bag" size={24} color={color} />
          ),
          drawerLabel: ({ color }) => (
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                flex: 1,
              }}
            >
              <Text style={{ color }}>fashion</Text>
              <MaterialCommunityIcons
                name="chevron-right"
                size={20}
                color={color}
              />
            </View>
          ),
        }}
      />

      {/* Hide index */}
      <Drawer.Screen
        name="index"
        options={{
          drawerItemStyle: { display: "none" },
        }}
      />
    </Drawer>
  );
}
