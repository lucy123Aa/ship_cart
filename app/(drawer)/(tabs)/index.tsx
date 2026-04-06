import Divider from "@/components/Divider";
import HeaderImageSection from "@/components/headerImageSection";
import HomeScreenDealCard from "@/components/homeScreenDealCard";
import HomeScreenPopularItems from "@/components/homeScreenPopularItems";
import PersonalizeRecommendation from "@/components/personalizeRecommendation";
import RecommendedCard from "@/components/recommendedCard";
import { ScrollItems } from "@/components/scrollItams";
import {
  categories,
  featuredDeals,
  popularItems,
} from "@/constants/Dummy/DummyProducts";
import { COLORS } from "@/typography/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";
import Ionicons from "@expo/vector-icons/Ionicons";
import { LinearGradient } from "expo-linear-gradient";
import { useRef, useState } from "react";
import {
  Animated,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { DrawerActions } from "@react-navigation/native";

export default function HomeScreen() {
  const navigation = useNavigation();
  const [searchText, setSearchText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Mobile");
  const scrollY = useRef(new Animated.Value(0)).current;

  const headerOpacity = scrollY.interpolate({
    inputRange: [0, 100],
    outputRange: [1, 0.95],
    extrapolate: "clamp",
  });

  return (
    <>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />

      <Animated.ScrollView
        showsVerticalScrollIndicator={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true },
        )}
        scrollEventThrottle={16}
        style={styles.container}
      >
        <LinearGradient colors={["#1e90ff", "#99badd"]} style={{ flex: 1 }}>
          <Animated.View
            style={[styles.headerSection, { opacity: headerOpacity }]}
          >
            <View style={styles.headerTop}>
              <TouchableOpacity
                style={styles.iconButton}
                onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
              >
                <Feather name="menu" size={24} color="#1a1a1a" />
              </TouchableOpacity>
              <View style={styles.headerRight}>
                <TouchableOpacity style={styles.iconButton}>
                  <Feather name="shopping-cart" size={24} color="black" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconButton}>
                  <MaterialCommunityIcons
                    name="account-circle-outline"
                    size={28}
                    color="#1a1a1a"
                  />
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.searchSection}>
              <View style={styles.searchBar}>
                <Feather name="search" size={20} color="#999" />
                <TextInput
                  placeholder="Search 10,000+ items..."
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

            {/* Delivery Info */}
            <View style={styles.deliveryInfo}>
              <View style={styles.deliveryItem}>
                <Ionicons
                  name="location-outline"
                  size={16}
                  color={COLORS.darkPink}
                />
                <Text style={styles.deliveryText}>Delivery in 20 minutes</Text>
              </View>
              <View style={styles.deliveryItem}>
                <Ionicons
                  name="time-outline"
                  size={16}
                  color={COLORS.darkPink}
                />
                <Text style={styles.deliveryText}>Free shipping over $50</Text>
              </View>
            </View>
          </Animated.View>
        </LinearGradient>

        <HeaderImageSection />

        {/* Categories Section */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.whiteBox}
          contentContainerStyle={styles.categoriesContent}
        >
          {categories.map((category) => (
            <ScrollItems
              key={category.id}
              title={category.name}
              image={category.image}
              color={category.color}
              isSelected={selectedCategory === category.name}
              onPress={() => setSelectedCategory(category.name)}
            />
          ))}
        </ScrollView>

        {/* Top Deals Section */}
        <View style={styles.whiteBox}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Top Deals in Fashion</Text>
            <TouchableOpacity style={styles.seeAllButton}>
              <Text style={styles.seeAllText}>See All</Text>
              <Feather
                name="chevron-right"
                size={16}
                color={COLORS.lightGreen}
              />
            </TouchableOpacity>
          </View>

          <View
            // horizontal
            // showsHorizontalScrollIndicator={false}
            style={styles.dealsSection}
            // contentContainerStyle={styles.dealsContent}
          >
            {featuredDeals.map((deal) => (
              <HomeScreenDealCard
                key={deal.id}
                id={deal.id}
                image={deal.image}
                discount={deal.discount}
                title={deal.title}
                price={deal.price}
                originalPrice={deal.originalPrice}
              />
            ))}
          </View>
        </View>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Popular Items</Text>
          <TouchableOpacity style={styles.seeAllButton}>
            <Text style={styles.seeAllText}>View All</Text>
            <Feather name="chevron-right" size={16} color={COLORS.darkPink} />
          </TouchableOpacity>
        </View>

        <View style={styles.popularGrid}>
          {popularItems.map((item) => (
            <HomeScreenPopularItems
              key={item.id}
              id={item.id}
              image={item.image}
              title={item.title}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </View>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>
            <AntDesign name="star" size={24} color={COLORS.gold} /> Recommended
            for you
          </Text>
          <TouchableOpacity style={styles.seeAllButton}>
            <Text style={styles.seeAllText}>View All</Text>
            <Feather name="chevron-right" size={16} color={COLORS.darkPink} />
          </TouchableOpacity>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ paddingBottom: 10 }}
          contentContainerStyle={styles.dealsContent}
        >
          {popularItems.map((item) => (
            <RecommendedCard
              key={item.id}
              id={item.id}
              image={item.image}
              title={item.title}
              price={item.price}
              rating={item.rating}
              onPress={() => {}}
            />
          ))}
        </ScrollView>

        <PersonalizeRecommendation />

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>
            <AntDesign name="star" size={24} color={COLORS.gold} /> Best Sellers
            in Gamers
          </Text>
          <TouchableOpacity style={styles.seeAllButton}>
            <Text style={styles.seeAllText}>View All</Text>
            <Feather name="chevron-right" size={16} color={COLORS.darkPink} />
          </TouchableOpacity>
        </View>
      </Animated.ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
  },
  headerSection: {
    paddingTop: 48,
    paddingHorizontal: 16,
    paddingBottom: 16,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },

  headerTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
    borderColor: "red",
  },
  iconButton: {
    padding: 8,
  },
  headerRight: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  searchSection: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    marginBottom: 16,
  },
  searchBar: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    borderRadius: 12,
    paddingHorizontal: 12,
    height: 48,
    gap: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: "#1a1a1a",
  },
  filterButton: {
    backgroundColor: COLORS.darkPink,
    width: 48,
    height: 48,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  deliveryInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 8,
  },
  deliveryItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  deliveryText: {
    fontSize: 12,
    color: "white",
  },

  categoriesContent: {
    paddingHorizontal: 16,
    gap: 16,
  },

  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "semibold",
    color: "black",
  },
  seeAllButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  seeAllText: {
    fontSize: 14,
    color: COLORS.lightGreen,
    fontWeight: "semibold",
  },
  dealsSection: {
    marginBottom: 8,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 20,
  },
  dealsContent: {
    paddingHorizontal: 16,
    gap: 16,
  },

  popularGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    paddingHorizontal: 10,
    gap: 16,
    marginBottom: 24,
  },
  whiteBox: {
    marginHorizontal: 5,
    marginVertical: 5,
    paddingHorizontal: 2,
    paddingVertical: 10,
    backgroundColor: "white",
    shadowColor: "gray",
    elevation: 3,
    borderRadius: 10,
  },
});
