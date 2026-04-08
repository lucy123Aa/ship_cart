import Divider from "@/components/Divider";
import HeaderImageSection from "@/components/headerImageSection";
import HomeScreenDealCard from "@/components/homeScreenDealCard";
import HomeScreenPopularItems from "@/components/BestOffers";
import PersonalizeRecommendation from "@/components/personalizeRecommendation";
import RecommendedCard from "@/components/recommendedCard";
import { ScrollItems } from "@/components/scrollItams";
import {
  categories,
  featuredDeals,
  popularItems,
  recommendedItems,
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
import Accordion from "@/components/Accordion";
import { AccordionData } from "../../../constants/Dummy/AccordionData";

const { width } = Dimensions.get("window");
const CARD_WIDTH = width * 0.9;

export default function HomeScreen() {
  const navigation = useNavigation();
  const [searchText, setSearchText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Mobile");
  const scrollY = useRef(new Animated.Value(0)).current;
  const [index, setIndex] = useState(0);

  const pumaLogo =
    "https://companieslogo.com/img/orig/PUM.DE_BIG-3030b719.png?t=1720244493";

  const hpLogo =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgMuHHADrFziUav2SRl02rMVDIOb09Z1jlsQ&s";

  const modalImage =
    "https://img.freepik.com/free-photo/fashionable-pale-brunette-long-green-dress-black-jacket-sunglasses-standing-street-daytime-against-wall-light-city-building_197531-24468.jpg?semt=ais_incoming&w=740&q=80";

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
              <Feather name="menu" size={24} color="#1a1a1a" />
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
            <HeaderImageSection
              image={modalImage}
              des="Get an extra 20 this Black Friday"
            />
            <HeaderImageSection
              image={modalImage}
              des="Get a kids' table tablet."
            />
            <HeaderImageSection
              image={modalImage}
              des="Watches that know when it's time to go"
            />
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
            {popularItems.map((deal) => (
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
            {featuredDeals.map((deal) => (
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
            {featuredDeals.map((deal) => (
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
              source={modalImage}
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
              source={modalImage}
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
              source={modalImage}
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
        <View style={{ width: 370, height: 200, marginHorizontal: "auto" }}>
          <Image
            source={modalImage}
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
            <BrandLogos image={hpLogo} />
            <BrandLogos image={hpLogo} />
            <BrandLogos image={hpLogo} />
            <BrandLogos image={hpLogo} />
            <BrandLogos image={hpLogo} />
            <BrandLogos image={hpLogo} />
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

const BrandLogos = ({ image }: { image: any }) => {
  return (
    <View style={styles.logoBox}>
      <Image source={{ uri: image }} style={styles.logoImage} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
    paddingHorizontal: 5,
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
    marginBottom: 8,
  },
  searchBar: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#E5E7EB",
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
    backgroundColor: "#123490",
    height: 80,
    width: 80,
    borderRadius: 100,
    padding: 5,
    justifyContent: "center",
    alignItems: "center",
  },

  logoImage: {
    height: "80%",
    width: "80%",
    resizeMode: "contain",
    borderRadius: 50,
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
