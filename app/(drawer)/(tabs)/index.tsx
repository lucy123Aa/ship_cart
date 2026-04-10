import Divider from "@/components/Divider";
import HeaderImageSection from "@/components/headerImageSection";
import HomeScreenDealCard from "@/components/homeScreenDealCard";
import HomeScreenPopularItems from "@/components/BestOffers";
import PersonalizeRecommendation from "@/components/personalizeRecommendation";
import RecommendedCard from "@/components/recommendedCard";
import { ScrollItems } from "@/components/scrollItams";

import {
  bestOfferForHome,
  categories,
  featuredDeals,
  outdoorOasis,
  popularItems,
  recommendedItems,
  trendingGedgets,
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
  Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { DrawerActions } from "@react-navigation/native";
import BestOffers from "@/components/BestOffers";
import { Image } from "expo-image";
import { MotiView } from "moti";
import ShipCartLogo from "../../../assets/svg/shipCart_logo.svg";
import hpLogo from "../../../assets/svg/hpLogo.svg";
import pumaLogo from "../../../assets/svg/pumaLogo.svg";
import addidasLogo from "../../../assets/svg/addidasLogo.svg";
import nikeelogo from "../../../assets/svg/nikeLogo.svg";
import asusLogo from "../../../assets/svg/asusLogo.svg";
import samsungLogo from "../../../assets/svg/samsungLogo.svg";
import appleLogo from "../../../assets/svg/appleLogo.svg";
import googleLogo from "../../../assets/svg/googleLogo.svg";

const { width } = Dimensions.get("window");

export default function HomeScreen() {
  const navigation = useNavigation();
  const [searchText, setSearchText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Mobile");
  const scrollY = useRef(new Animated.Value(0)).current;
  const [index, setIndex] = useState(0);

  const modalImage =
    "https://img.freepik.com/free-photo/fashionable-pale-brunette-long-green-dress-black-jacket-sunglasses-standing-street-daytime-against-wall-light-city-building_197531-24468.jpg?semt=ais_incoming&w=740&q=80";

  const banner = require("../../../assets/images/banner.png");
  const banner1 = require("../../../assets/images/banner1.png");
  const banner2 = require("../../../assets/images/banner2.png");
  const haha = require("../../../assets/images/haha.png");
  const yellowFrame = require("../../../assets/images/yellowFrame.png");
  const cyber_monday_super_frame = require("../../../assets/images/cyber_monday_super_frame.jpg");

  const headerOpacity = scrollY.interpolate({
    inputRange: [0, 100],
    outputRange: [1, 0.95],
    extrapolate: "clamp",
  });

  return (
    <>
      <StatusBar
        barStyle="dark-content"
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
        <Animated.View
          style={[styles.headerSection, { opacity: headerOpacity }]}
        >
          <View style={styles.headerTop}>
            <TouchableOpacity
              style={styles.iconButton}
              onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
            >
              <View
                style={{ flexDirection: "row", gap: 10, alignItems: "center" }}
              >
                <Feather name="menu" size={24} color="#1a1a1a" />
                <ShipCartLogo width={140} height={50} />
              </View>
            </TouchableOpacity>
            <View style={styles.headerRight}>
              <TouchableOpacity style={styles.iconButton}>
                <Feather name="shopping-cart" size={24} color="black" />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.searchSection}>
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
          {/* Delivery Info */}
          <View style={styles.deliveryItem}>
            <Ionicons name="location-outline" size={16} color="black" />
            <Text style={styles.deliveryText}>
              Location: 17 Waverley Crescent, Middleham
            </Text>
          </View>
        </Animated.View>
        <View
          style={{
            width: 380,
            marginHorizontal: "auto",
          }}
        >
          <ScrollView
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            onMomentumScrollEnd={(e) => {
              const newIndex = Math.round(
                e.nativeEvent.contentOffset.x / width,
              );
              setIndex(newIndex);
            }}
            contentContainerStyle={{
              gap: 0.2,
            }}
          >
            <HeaderImageSection image={banner} />
            <HeaderImageSection image={banner1} />
            <HeaderImageSection image={banner2} />
          </ScrollView>

          <View style={styles.dotsContainer}>
            {[0, 1, 2].map((i) => (
              <MotiView
                key={i}
                animate={{
                  width: index === i ? 8 : 8,
                  opacity: index === i ? 1 : 0.4,
                }}
                transition={{ type: "timing", duration: 300 }}
                style={styles.dot}
              />
            ))}
          </View>
        </View>

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
            </TouchableOpacity>
          </View>

          <View style={styles.dealsSection}>
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
        <View style={styles.whiteBox}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Best offer for Your Home</Text>
            <TouchableOpacity style={styles.seeAllButton}>
              <Text style={styles.seeAllText}>See All</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.dealsSection}>
            {bestOfferForHome.map((deal) => (
              <HomeScreenDealCard
                key={deal.id}
                id={deal.id}
                image={deal.image}
                title={deal.title}
                price={deal.price}
              />
            ))}
          </View>
        </View>
        <View style={styles.whiteBox}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Trending Text & Gedgets</Text>
            <TouchableOpacity style={styles.seeAllButton}>
              <Text style={styles.seeAllText}>See All</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.dealsSection}>
            {trendingGedgets.map((deal) => (
              <HomeScreenDealCard
                key={deal.id}
                id={deal.id}
                image={deal.image}
                title={deal.title}
                price={deal.price}
              />
            ))}
          </View>
        </View>

        <View style={styles.whiteBox}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Outdoor Oasis</Text>
            <TouchableOpacity style={styles.seeAllButton}>
              <Text style={styles.seeAllText}>See All</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.dealsSection}>
            {outdoorOasis.map((deal) => (
              <HomeScreenDealCard
                key={deal.id}
                id={deal.id}
                image={deal.image}
                title={deal.title}
                price={deal.price}
              />
            ))}
          </View>
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            gap: 15,
            paddingHorizontal: 8,
            marginVertical: 8,
          }}
        >
          <View style={{ height: 200, width: 350 }}>
            <Image
              source={haha}
              style={{
                width: "100%",
                height: "100%",
                borderRadius: 5,
                resizeMode: "cover",
              }}
            />
          </View>
          <View style={{ height: 200, width: 350 }}>
            <Image
              source={yellowFrame}
              style={{
                width: "100%",
                height: "100%",
                borderRadius: 5,
                resizeMode: "cover",
              }}
            />
          </View>
        </ScrollView>
        <View style={styles.whiteBox}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Top Deals in Fashion</Text>
            <TouchableOpacity style={styles.seeAllButton}>
              <Text style={styles.seeAllText}>See All</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.dealsSection}>
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
        <View style={[styles.whiteBox, { paddingTop: 20, paddingBottom: 0 }]}>
          <Text
            style={[styles.sectionTitle, { marginBottom: 10, marginLeft: 10 }]}
          >
            Recommended for you
          </Text>

          <Animated.ScrollView
            horizontal
            // showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ gap: 15 }}
          >
            {recommendedItems.map((deal) => (
              <RecommendedCard
                key={deal.id}
                id={deal.id}
                image={deal.image}
                title={deal.title}
                price={deal.price}
                rating={deal.rating}
                off={deal.off}
                onPress={() => {}}
              />
            ))}
          </Animated.ScrollView>
        </View>
        <View style={styles.whiteBox}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Top Deals in Fashion</Text>
            <TouchableOpacity style={styles.seeAllButton}>
              <Text style={styles.seeAllText}>See All</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.dealsSection}>
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
        <View style={{ width: 370, height: 300, marginHorizontal: "auto" }}>
          <Image
            source={cyber_monday_super_frame}
            style={{
              width: "100%",
              height: "100%",
              borderRadius: 5,
              resizeMode: "cover",
            }}
          />
        </View>
        <View style={styles.whiteBox}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Top Deals in Fashion</Text>
            <TouchableOpacity style={styles.seeAllButton}>
              <Text style={styles.seeAllText}>See All</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.dealsSection}>
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
        <View
          style={[
            styles.whiteBox,
            { paddingHorizontal: 10, paddingVertical: 20 },
          ]}
        >
          <Text style={styles.sectionTitle}>Shop from Top Brands</Text>

          <Animated.ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.logoSection}
          >
            <BrandLogos Logo={hpLogo} />
            <BrandLogos Logo={pumaLogo} />
            <BrandLogos Logo={addidasLogo} />
            <BrandLogos Logo={nikeelogo} />
            <BrandLogos Logo={asusLogo} />
            <BrandLogos Logo={samsungLogo} />
            <BrandLogos Logo={appleLogo} />
            <BrandLogos Logo={googleLogo} />
          </Animated.ScrollView>
        </View>
        <View style={styles.whiteBox}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Top Deals in Fashion</Text>
            <TouchableOpacity style={styles.seeAllButton}>
              <Text style={styles.seeAllText}>See All</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.dealsSection}>
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
        <View style={[styles.whiteBox, { paddingTop: 20, paddingBottom: 0 }]}>
          <Text
            style={[styles.sectionTitle, { marginBottom: 10, marginLeft: 10 }]}
          >
            <AntDesign name="star" size={24} color={COLORS.gold} /> Best Sellers
            in Gamers
          </Text>

          <Animated.ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ gap: 15 }}
          >
            {recommendedItems.map((deal) => (
              <RecommendedCard
                key={deal.id}
                id={deal.id}
                image={deal.image}
                title={deal.title}
                price={deal.price}
                rating={deal.rating}
                off={deal.off}
                onPress={() => {}}
              />
            ))}
          </Animated.ScrollView>
        </View>
        <PersonalizeRecommendation />
      </Animated.ScrollView>
    </>
  );
}

const BrandLogos = ({ Logo }: { Logo: any }) => {
  return (
    <View style={styles.logoBox}>
      <Logo width={"100%"} height={"100%"} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    // paddingHorizontal: 5,
    marginHorizontal: "auto",
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
    marginBottom: 8,
  },
  searchBar: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#E5E7EB",
    borderRadius: 12,
    paddingHorizontal: 12,
    height: 40,
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
    fontSize: 15,
    color: "black",
  },

  dotsContainer: {
    position: "absolute",
    bottom: 10,
    alignSelf: "center",
    flexDirection: "row",
  },
  dot: {
    height: 8,
    borderRadius: 4,
    backgroundColor: "#fff",
    marginHorizontal: 4,
  },

  categoriesContent: {
    paddingHorizontal: 16,
    gap: 16,
  },

  logoSection: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 45,
    marginTop: 10,
  },

  logoBox: {
    height: 80,
    width: 80,
    borderRadius: 50,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
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
  seeAllButton: {},
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
    marginVertical: 10,
    paddingHorizontal: 2,
    paddingVertical: 15,
    backgroundColor: "white",
    shadowColor: "gray",
    elevation: 3,
    borderRadius: 10,
  },
});
