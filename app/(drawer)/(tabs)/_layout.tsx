import { Tabs } from "expo-router";
import React from "react";

import { HapticTab } from "@/components/haptic-tab";
import { MaterialCommunityIcons, FontAwesome5 } from "@expo/vector-icons";
import Categories from "@/assets/svg/Categories";
import Home from "@/assets/svg/Home";
import Search from "@/assets/svg/search";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarButton: HapticTab,

        tabBarActiveTintColor: "black", //  active tab
        tabBarInactiveTintColor: "gray", //  inactive tab

        tabBarStyle: {
          backgroundColor: "white",

          // borderTopWidth: 0,
          elevation: 0,
          shadowOpacity: 0,
          paddingBottom: 10,
          height: 60,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <Home width={24} height={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          tabBarIcon: ({ color }) => (
            <Search width={24} height={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Explore",
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="compass" size={24} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="categories"
        options={{
          title: "Categories",
          tabBarIcon: ({ color }) => (
            <Categories width={20} height={20} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="account"
        options={{
          title: "Account",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="account-circle-outline"
              size={28}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
