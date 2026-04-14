import React, { useState } from "react";
import { COLORS } from "@/typography/colors";
import {
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import {
  AntDesign,
  Entypo,
  EvilIcons,
  Feather,
  FontAwesome,
  FontAwesome6,
  Foundation,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
  Octicons,
} from "@expo/vector-icons";
import {
  accountAbout,
  accountCategories,
  accountProducts,
  accountReviews,
} from "@/constants/Dummy/DummyProducts";
import { Rating } from "react-native-ratings";
import Divider from "@/components/Divider";

export default function Account() {
  const router = useRouter();
  const [follow, setFollow] = useState(false);
  const [openTab, setOpenTab] = useState("categories");

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

      <SafeAreaView style={styles.safeAreaView}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.headerSection}>
            <TouchableOpacity
              onPress={() => {
                router.back();
              }}
            >
              <MaterialCommunityIcons
                name="arrow-left"
                size={24}
                color="black"
              />
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
              <View
                style={{ flexDirection: "row", gap: 3, alignItems: "center" }}
              >
                <Text style={styles.userName}>{user.name}</Text>
                <MaterialCommunityIcons
                  name="check-decagram"
                  size={24}
                  color="blue"
                />
              </View>
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

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              borderBottomWidth: 1,
              borderTopWidth: 1,
              borderTopColor: COLORS.border,
              borderBottomColor: COLORS.border,
              height: 50,
              paddingHorizontal: 10,
              gap: 20,
              marginTop: 20,
            }}
          >
            <Sections
              Icon={() => (
                <MaterialCommunityIcons
                  name="view-grid-outline"
                  size={20}
                  color="black"
                />
              )}
              active={openTab === "categories"}
              label="Categories"
              onPress={() => setOpenTab("categories")}
            />

            <Sections
              Icon={() => (
                <MaterialCommunityIcons
                  name="package-variant-closed"
                  size={20}
                  color="black"
                />
              )}
              active={openTab === "products"}
              label="Products"
              onPress={() => setOpenTab("products")}
            />

            <Sections
              Icon={() => (
                <MaterialCommunityIcons
                  name="message-text-outline"
                  size={18}
                  color="black"
                />
              )}
              active={openTab === "reviews"}
              label="Reviews"
              rating
              onPress={() => setOpenTab("reviews")}
            />

            <Sections
              Icon={() => (
                <MaterialCommunityIcons
                  name="information-variant-circle-outline"
                  size={20}
                  color="black"
                />
              )}
              active={openTab === "about"}
              label="About"
              onPress={() => setOpenTab("about")}
            />
          </ScrollView>

          <View style={{ paddingTop: 10 }}>
            {openTab === "categories" && (
              <View style={styles.dealsSection}>
                {accountCategories.map((deal) => (
                  <Categories
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
            )}
            {openTab === "products" && (
              <View style={styles.dealsSection}>
                {accountProducts.map((deal) => (
                  <ProductCard
                    key={deal.id}
                    id={deal.id}
                    image={deal.image}
                    title={deal.title}
                    price={deal.price}
                    rating={deal.rating}
                    off={deal.off}
                    onExclusiveDiscount={deal.onExclusiveDiscount}
                    onPress={() => {}}
                  />
                ))}
              </View>
            )}
            {openTab === "reviews" && <Reviews />}
            {openTab === "about" && (
              <View style={styles.dealsSection}>
                {accountAbout.map((item) => (
                  <About
                    key={item.id}
                    des={item.des}
                    des2={item.des2}
                    joinedDate={item.joinedDate}
                    label={item.label}
                    views={item.views}
                    products={item.products}
                    reviews={item.reviews}
                    followers={item.followers}
                    revenue={item.revenue}
                    nation={item.nation}
                  />
                ))}
              </View>
            )}
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

interface SectionsProp {
  // Icon: React.ReactNode | React.ComponentType<any>;
  Icon: any;
  label: string;
  rating?: boolean;
  active?: boolean;
  onPress: () => void;
}

const Sections = ({ Icon, label, rating, active, onPress }: SectionsProp) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 2,
        borderBottomWidth: active ? 2 : 0,
        borderBottomColor: active ? "black" : "transparent",
        paddingHorizontal: 5,
      }}
      onPress={onPress}
    >
      {/* Handle both component and JSX */}
      {/* {typeof Icon === "function" ? <Icon width={20} height={20} /> : Icon} */}

      <Icon width={20} height={20} />

      <Text style={{ fontSize: 16 }}>{label}</Text>
      {rating && (
        <>
          <View style={styles.ratingBadge}>
            <Text style={styles["4.3"]}>
              4.3 <AntDesign name="star" size={14} color="white" />
            </Text>
          </View>
        </>
      )}
    </TouchableOpacity>
  );
};

interface CategoriesProp {
  id: number;
  image: any;
  title: string;
  discount?: string;
  price?: string;
  originalPrice?: string;
}

const Categories = ({
  id,
  title,
  discount,
  price,
  originalPrice,
  image,
}: CategoriesProp) => {
  return (
    <TouchableOpacity key={id} style={styles.dealCard}>
      <Image source={image} style={styles.dealImage} />
      <Text style={styles.dealTitle}>{title}</Text>
    </TouchableOpacity>
  );
};

interface ProductCardProps {
  id: number;
  title: string;
  price: string;
  image: any;
  rating: number;
  off: number;
  onExclusiveDiscount?: boolean;
  onPress: () => void;
}

const ProductCard = ({
  id,
  title,
  price,
  image,
  rating,
  off,
  onPress,
  onExclusiveDiscount,
}: ProductCardProps) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress} key={id}>
      {onExclusiveDiscount && (
        <Text style={styles.onExclusiveDiscount}>On Exclusive Discount</Text>
      )}
      <Image source={image} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.title} numberOfLines={2}>
          {title}
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 10,
          }}
        >
          <Rating
            type="star"
            ratingCount={5}
            imageSize={16}
            readonly
            startingValue={rating}
            ratingColor={COLORS.gold}
          />
          <Text style={styles.rating}>({rating})</Text>
        </View>
        <View style={styles.footer}>
          {/* LEFT SIDE */}
          <View style={{ flexDirection: "row", alignItems: "center", gap: 6 }}>
            <View style={styles.priceSection}>
              <MaterialIcons name="currency-pound" size={18} color="black" />
              <Text style={styles.price}>{price}</Text>
            </View>

            <View style={styles.offSection}>
              <MaterialIcons name="currency-pound" size={12} color="gray" />
              <Text style={styles.off}>{off}</Text>
              <View style={styles.strike} />
            </View>
          </View>

          {/* RIGHT SIDE (Bookmark) */}
          <FontAwesome name="bookmark-o" size={22} color="black" />
        </View>
      </View>
    </TouchableOpacity>
  );
};

interface ReviewsProp {}

const Reviews = () => {
  const ratingData = [
    { star: 5, percent: 71 },
    { star: 4, percent: 19 },
    { star: 3, percent: 5 },
    { star: 2, percent: 2 },
    { star: 1, percent: 3 },
  ];

  return (
    <>
      <View style={{ padding: 15 }}>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>Reviews</Text>

          {/* Rating Badge */}
          <View style={styles.ratingBadge}>
            <Text style={styles["4.3"]}>
              4.3 <AntDesign name="star" size={14} color="white" />
            </Text>
          </View>

          {/* Reviews Count */}
          <Text style={styles.reviewsCount}>(512 reviews)</Text>
        </View>

        {ratingData.map((item) => (
          <View key={item.star} style={styles.ratingDataStar}>
            <Text style={styles.starValue}>{item.star}</Text>
            <AntDesign name="star" size={18} color="black" />

            <View style={styles.progressBar}>
              <View
                style={{
                  width: `${item.percent}%`,
                  height: "100%",
                  backgroundColor:
                    item.star >= 4
                      ? "green"
                      : item.star === 3
                        ? "orange"
                        : "red",
                  borderTopLeftRadius: 5,
                  borderBottomLeftRadius: 5,
                }}
              />
            </View>

            <Text>{item.percent}%</Text>
          </View>
        ))}
      </View>

      {accountReviews.map((item) => (
        <View key={item.id} style={styles.accountReviewsContainer}>
          {/* User */}
          <View style={styles.reviwerImageContainer}>
            <Image source={item.userImage} style={styles.reviwerImage} />
          </View>
          <View style={styles.reviwer}>
            <Text style={styles.reviwerName}>{item.name}</Text>
            <Text style={{ color: "gray" }}>{item.date}</Text>
          </View>

          <Rating
            type="star"
            ratingCount={5}
            imageSize={16}
            readonly
            startingValue={item.rating}
            ratingColor={COLORS.gold}
            style={styles.reviwerRatingStars}
          />

          <Text style={{ fontWeight: "bold", marginVertical: 4 }}>
            {item.title}
          </Text>

          <Text style={styles.reviwerDes}>{item.desc}</Text>

          {/* Images */}
          {item.images.length > 0 && (
            <View
              style={{
                marginVertical: 10,
                flexDirection: "row",
                gap: 5,
                flexWrap: "wrap",
              }}
            >
              {item.images.map((img, index) => (
                <Image
                  key={index}
                  source={img}
                  style={styles.reviewerGivenImage}
                />
              ))}
            </View>
          )}

          {/* Actions */}
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 15,
              marginTop: 10,
            }}
          >
            <TouchableOpacity>
              <MaterialCommunityIcons
                name="thumb-up-outline"
                size={24}
                color="black"
              />
            </TouchableOpacity>
            <Text>{item.likes}</Text>

            <View style={styles.reviewDivider} />

            <TouchableOpacity>
              <MaterialCommunityIcons
                name="thumb-down-outline"
                size={22}
                color="black"
              />
            </TouchableOpacity>
            <Text>{item.dislikes}</Text>

            <View style={styles.reviewDivider} />

            <TouchableOpacity>
              <Text style={{ color: "gray" }}>View Comments</Text>
            </TouchableOpacity>

            <View style={styles.reviewDivider} />

            <TouchableOpacity>
              <Text style={{ color: "gray" }}>Reply</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </>
  );
};

interface AboutProp {
  des?: string;
  des2?: string;
  joinedDate: string;
  label: string;
  views: string;
  products: string;
  followers: string;
  revenue: string;
  nation: string;
  reviews: number;
}

const About = ({
  des,
  des2,
  joinedDate,
  label,
  views,
  products,
  followers,
  revenue,
  nation,
  reviews,
}: AboutProp) => {
  return (
    <>
      <Text style={[styles.aboutText, { marginBottom: 15 }]}>{des}</Text>
      <Text style={[styles.aboutText, { marginBottom: 15 }]}>{des2} </Text>
      
      <View style={{ gap: 15 }}>
        <AboutBottom
          Icon={MaterialCommunityIcons}
          iconName="information-variant-circle-outline"
          label="www.nikwalker.com"
        />
        <AboutBottom
          Icon={Ionicons}
          iconName="globe-outline"
          label="www.nikwalker.com"
        />

        <AboutBottom
          Icon={Octicons}
          iconName="graph"
          value={views}
          label="Views"
        />

        <AboutBottom
          Icon={MaterialCommunityIcons}
          iconName="package-variant-closed"
          label="Products"
          value={products}
        />

        <AboutBottom
          Icon={Feather}
          iconName="star"
          label="Reviews"
          value={reviews}
        />

        <AboutBottom
          Icon={FontAwesome6}
          iconName="user"
          label="Followers"
          value={followers}
        />

        <AboutBottom
          Icon={MaterialCommunityIcons}
          iconName="piggy-bank-outline"
          label="Revenue"
          value={revenue}
        />

        <AboutBottom
          Icon={Entypo}
          iconName="globe"
          label="Revenue"
          value={revenue}
        />
      </View>
    </>
  );
};

interface AboutBottom {
  Icon: any;
  iconName: string;
  label: string;
  value?: string | number;
}

const AboutBottom = ({ Icon, iconName, label, value }: AboutBottom) => {
  return (
    <View
      style={{
        flexDirection: "row",
        gap: 2,
        alignItems: "center",
      }}
    >
      <Icon name={iconName} label={label} size={24} />
      <Text style={styles.aboutText}>{value} </Text>
      <Text style={styles.aboutText}>{label} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: COLORS.background,
    paddingHorizontal: 5,
    paddingVertical: 10,
  },
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

  dealsSection: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },

  dealCard: {
    width: "48%",
    marginBottom: 15,
  },

  discountText: {
    color: "#fff",
    fontSize: 10,
    fontWeight: "700",
  },
  dealImage: {
    width: "100%",
    height: 150,
    borderRadius: 12,
    marginBottom: 8,
    resizeMode: "cover",
  },
  dealTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: "#1a1a1a",
    marginBottom: 4,
    textAlign: "center",
  },

  card: {
    borderRadius: 12,
    padding: 5,
    width: "49%",
    backgroundColor: "white",
    marginBottom: 15,
    elevation: 1,
    position: "relative",
  },
  image: {
    width: "100%",
    height: 110,
    borderRadius: 8,
    marginBottom: 2,
    resizeMode: "cover",
  },
  content: {
    flex: 1,
    gap: 5,
  },
  title: {
    fontSize: 16,
    fontWeight: "light",
    marginBottom: 8,
    color: "#333",
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 4,
    marginTop: 8,
    paddingRight: 10,
  },
  priceSection: {
    flexDirection: "row",
    alignItems: "center",
  },
  price: {
    fontSize: 16,
    fontWeight: "bold",
    color: "black",
  },

  offSection: {
    flexDirection: "row",
    alignItems: "center",
    position: "relative",
  },

  off: {
    fontSize: 13,
    color: "gray",
  },

  strike: {
    position: "absolute",
    height: 1,
    backgroundColor: "gray",
    width: "100%",
    top: "45%",
  },
  rating: {
    fontSize: 12,
    color: "#666",
  },

  ratingBadge: {
    backgroundColor: "green",
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 5,
  },
  4.3: {
    color: "white",
    fontWeight: "bold",
  },

  reviewsCount: {
    color: "black",
    fontSize: 14,
    borderBottomWidth: 1,
    borderBottomColor: "black",
  },
  ratingDataStar: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 4,
  },
  starValue: {
    marginRight: 3,
    fontSize: 18,
  },

  progressBar: {
    flex: 1,
    height: 6,
    backgroundColor: "#eee",
    borderRadius: 5,
    marginHorizontal: 10,
  },
  accountReviewsContainer: {
    padding: 15,
    paddingVertical: 30,
    borderColor: COLORS.border,
    borderTopWidth: 1,
  },

  reviwerImageContainer: {
    alignSelf: "center",
    width: 50,
    height: 50,
    borderRadius: 60,
    overflow: "hidden",
  },

  reviwerImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },

  reviwer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  reviwerName: {
    fontWeight: "bold",
  },
  reviwerRatingStars: {
    alignSelf: "flex-start",
    marginTop: 8,
    marginBottom: 12,
  },
  reviwerDes: {
    color: "#444",
    lineHeight: 18,
  },

  reviewerGivenImage: {
    width: 70,
    height: 70,
    borderRadius: 8,
    marginRight: 10,
  },

  reviewDivider: {
    height: "100%",
    width: 0.9,
    backgroundColor: COLORS.border,
  },

  onExclusiveDiscount: {
    color: "white",
    backgroundColor: "red",
    borderRadius: 5,
    position: "absolute",
    right: 5,
    top: 5,
    paddingHorizontal: 5,
    paddingVertical: 5,
    zIndex: 2,
    fontSize: 10,
  },
  aboutText: {
    fontSize: 16,
    fontWeight: "normal",
  },
});
