import Divider from "@/components/Divider";
import Header from "@/components/Header";
import RecommendedCard from "@/components/recommendedCard";
import {
  DummyCartData,
  DummyCartDataValues,
  recommendedItems,
} from "@/constants/Dummy/DummyProducts";
import { COLORS } from "@/typography/colors";
import { AntDesign, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { Image } from "expo-image";
import React, { useState } from "react";
import {
  Animated,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

function Cart() {
  const [counter, setCounter] = useState(1);

  const INCREASE_COUNT = () => {
    setCounter((prev) => prev + 1);
  };

  const DECREASE_COUNT = () => {
    setCounter((prev) => prev - 1);
  };

  return (
    <>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="transparent"
      />

      <SafeAreaView style={styles.safeAreaView}>
        <Header />
        <ScrollView>
          <Text style={styles.yourShoppingCartTxt}>Your Shopping Cart (1)</Text>

          <View
            style={[
              styles.box,
              { flexDirection: "row", alignItems: "center", gap: 10 },
            ]}
          >
            <View style={styles.iconContainer}>
              <Ionicons name="location-outline" size={24} color="black" />
            </View>

            <View>
              <Text style={styles.deliverTo}>
                Deliver to {DummyCartData.deliverTo}
              </Text>
              <Text style={styles.address} numberOfLines={2}>
                {DummyCartData.address}
              </Text>
            </View>

            <TouchableOpacity>
              <Text style={{ fontWeight: "semibold", fontSize: 16 }}>
                Change
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.box}>
            <View style={{ flexDirection: "row", gap: 7 }}>
              <Image
                source={DummyCartData.productImage}
                style={styles.productImage}
              />

              <View
                style={{
                  gap: 3,
                  width: "65%",
                }}
              >
                <Text style={styles.productName} numberOfLines={2}>
                  {DummyCartData.productName}
                </Text>
                <View
                  style={{ flexDirection: "row", alignItems: "center", gap: 6 }}
                >
                  <View style={styles.priceSection}>
                    <MaterialIcons
                      name="currency-pound"
                      size={18}
                      color="black"
                    />
                    <Text style={styles.price}>{DummyCartData.price}</Text>
                  </View>

                  <View style={styles.offSection}>
                    <MaterialIcons
                      name="currency-pound"
                      size={12}
                      color="gray"
                    />
                    <Text style={styles.off}>{DummyCartData.off}</Text>
                    <View style={styles.strike} />
                  </View>
                </View>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Text style={{ color: "gray" }}> Seller: </Text>
                  <Text style={{ textTransform: "uppercase", color: "gray" }}>
                    {DummyCartData.seller}
                  </Text>
                </View>
              </View>
            </View>

            <View style={styles.productBottomSection}>
              <View style={styles.counterSection}>
                <TouchableOpacity
                  onPress={INCREASE_COUNT}
                  style={styles.counterBtn}
                >
                  <AntDesign name="plus" size={10} color="black" />
                </TouchableOpacity>

                <Text style={styles.counterValue}>{counter} </Text>

                <TouchableOpacity
                  onPress={DECREASE_COUNT}
                  style={styles.counterBtn}
                >
                  <AntDesign name="minus" size={10} color="black" />
                </TouchableOpacity>
              </View>

              <TouchableOpacity style={{}}>
                <Text style={styles.delete}>Delete </Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={[styles.whiteBox, { paddingTop: 20, paddingBottom: 0 }]}>
            <Text
              style={[
                styles.sectionTitle,
                { marginBottom: 10, marginLeft: 10 },
              ]}
            >
              Frequently Bought Togeter
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

          <View style={styles.box}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 10,
                marginVertical: 20,
              }}
            >
              <View style={styles.secureImageContainer}></View>
              <Text style={styles.valuesPrice}>Secure Transaction</Text>
            </View>

            <View style={{ gap: 25 }}>
              {DummyCartDataValues.map((item) => (
                <Values
                  key={item.id}
                  label={item.label}
                  price={item.price}
                  availableValues={item.availableValues}
                />
              ))}
              <Divider />

              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Text style={styles.totalAmount}> Total Amount</Text>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <MaterialIcons name="currency-pound" size={20} color="blue" />
                  <Text style={[styles.totalAmount, { color: "blue" }]}>
                    265.00
                  </Text>
                </View>
              </View>

              <View style={{backgroundColor:COLORS.lightGreen}}>
<Text>You Save  </Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

interface ValuesProps {
  label: string;
  availableValues?: string | number;
  price: number;
}

const Values = ({ label, price, availableValues }: ValuesProps) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <View style={{ flexDirection: "row", gap: 1, alignItems: "center" }}>
        <Text style={styles.label}>{label} </Text>
        {availableValues && (
          <Text style={styles.label}>{availableValues} </Text>
        )}
      </View>

      <View style={{ flexDirection: "row", gap: 1, alignItems: "center" }}>
        <MaterialIcons name="currency-pound" size={18} color="black" />
        <Text style={styles.valuesPrice}>{price}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: COLORS.background,
    // paddingHorizontal: 5,
    paddingVertical: 10,
  },

  yourShoppingCartTxt: {
    fontWeight: "bold",
    fontSize: 20,
    marginHorizontal: 16,
  },
  box: {
    backgroundColor: "white",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 15,
    marginVertical: 10,
    marginHorizontal: 10,
  },

  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 50,
    backgroundColor: COLORS.lightBlue,
    justifyContent: "center",
    alignItems: "center",
  },
  deliverTo: {
    fontWeight: "normal",
    fontSize: 14,
    textTransform: "uppercase",
  },

  address: {
    fontWeight: "bold",
    fontSize: 14,
    textTransform: "capitalize",
    width: 200,
    marginTop: 4,
  },
  productImage: { width: 120, height: 100 },
  productName: { textTransform: "capitalize", fontSize: 14 },

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

  productBottomSection: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 5,
  },

  counterSection: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    backgroundColor: COLORS.lightGray,
    alignSelf: "flex-start",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
  },

  counterBtn: {
    backgroundColor: "white",
    borderRadius: 10,
    height: "100%",
    padding: 5,
  },

  counterValue: {
    fontSize: 16,
    fontWeight: "bold",
  },

  delete: {
    color: "red",
    fontSize: 16,
    fontWeight: "bold",
  },

  whiteBox: {
    marginHorizontal: 10,
    marginVertical: 10,
    paddingHorizontal: 2,
    paddingVertical: 15,
    backgroundColor: "white",
    shadowColor: "gray",
    elevation: 3,
    borderRadius: 10,
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: "semibold",
    color: "black",
    textTransform: "capitalize",
  },

  secureImageContainer: {
    width: 40,
    height: 40,
    borderRadius: 50,
    backgroundColor: COLORS.lightBlue,
    justifyContent: "center",
    alignItems: "center",
  },

  secureTransaction: {
    fontSize: 16,
    fontWeight: "light",
  },

  label: {
    fontSize: 18,
    fontWeight: "light",
    color: "gray",
  },

  valuesPrice: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
  },

  totalAmount: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default Cart;
