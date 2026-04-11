import Divider from "@/components/Divider";
import { COLORS } from "@/typography/colors";
import { Feather, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

function Search() {
  const [searchText, setSearchText] = useState("");
  const router = useRouter();
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
        <View style={styles.searchSection}>
          <TouchableOpacity
            onPress={() => {
              router.back();
            }}
          >
            <MaterialCommunityIcons name="arrow-left" size={24} color="black" />
          </TouchableOpacity>
          <View style={styles.searchBar}>
            <Feather name="search" size={20} color="#6a6868" />
            <TextInput
              placeholder="Search your item here"
              placeholderTextColor="#999"
              style={styles.searchInput}
              value={searchText}
              onChangeText={setSearchText}
            />
            {searchText.length > 0 && (
              <TouchableOpacity onPress={() => setSearchText("")}>
                <Ionicons name="close-circle" size={20} color="#999" />
              </TouchableOpacity>
            )}
          </View>
        </View>
        <Divider />

        <View style={{ gap: 10, marginBottom: 10 }}>
          <Text style={styles.recentSearchesText}>Recent Searches </Text>

          <View style={{ flexDirection: "row", gap: 8, flexWrap: "wrap" }}>
            <SearchValues label="Smart tv" />
            <SearchValues label="Sneaker" />
            <SearchValues label="Crystal 4k vivid pro" />
            <SearchValues label="Samsung Tv" />
            <SearchValues label="CMF phone 1 by nothing" />
          </View>
        </View>

        <View>
          <Text style={[styles.recentSearchesText,{marginBottom:10}]}>Trending </Text>

          {/* <View > */}
            <TrendingList label="Mobiles" />
            <TrendingList label="Washing Machine" />
            <TrendingList label="Tv" />
            <TrendingList label="Shoes" />
            <TrendingList label="Fashion" />
          {/* </View> */}
        </View>
      </SafeAreaView>
    </>
  );
}

interface SearchValuesProp {
  label: string;
}

const SearchValues = ({ label }: SearchValuesProp) => {
  return (
    <TouchableOpacity style={styles.searchValue}>
      <Text>
        <MaterialCommunityIcons
          name="clock-time-seven-outline"
          size={15}
          color="black"
        />
        <Text style={styles.label}> {label} </Text>
      </Text>
    </TouchableOpacity>
  );
};

interface TrendingListProp {
  label: string;
}

const TrendingList = ({ label }: TrendingListProp) => {
  return (
    <>
      <TouchableOpacity
        style={{
          borderBottomWidth: 1,
          borderBottomColor: COLORS.border,
          paddingVertical: 10,
          paddingHorizontal: 10,
          flexDirection:'row'

          
        }}
      >
          <Ionicons
            name="arrow-back-circle-outline"
            size={20}
            color="black"
            style={{ transform: [{ rotate: "130deg" }] }}
          />
        <Text>
          <Text style={styles.labelTrending}> {label} </Text>
        </Text>
      </TouchableOpacity>
    </>
  );
};
const styles = StyleSheet.create({
  searchSection: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    marginBottom: 5,
    // borderWidth: 1,
  },
  searchBar: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#E5E7EB",
    borderRadius: 8,
    paddingHorizontal: 12,
    height: 40,
    gap: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: "#1a1a1a",
  },

  recentSearchesText: {
    fontSize: 15,
    fontWeight: "semibold",
    marginTop:10,
  },

  searchValue: {
    flexDirection: "row",
    alignItems: "center",
    // gap: 2,
    backgroundColor: "#d9dadb",
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 15,
  },
  label: {
    fontSize: 13,
    fontWeight: "500",
  },
  labelTrending: {
    fontSize: 15,
    fontWeight: "semibold",
  },
});
export default Search;
