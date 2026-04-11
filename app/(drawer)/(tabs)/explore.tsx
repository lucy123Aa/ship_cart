import Header from "@/components/Header";
import { COLORS } from "@/typography/colors";
import MasonryList from "@react-native-seoul/masonry-list";
import { View, Image, Dimensions, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const data = [
  { id: "1", image: require("../../../assets/explore/explore1.jpg") },
  { id: "2", image: require("../../../assets/explore/explore2.jpg") },
  { id: "3", image: require("../../../assets/explore/explore3.jpg") },
  { id: "4", image: require("../../../assets/explore/explore4.jpg") },
  { id: "5", image: require("../../../assets/explore/explore5.jpg") },
  { id: "6", image: require("../../../assets/explore/explore6.jpg") },
  { id: "7", image: require("../../../assets/explore/explore7.jpg") },
  { id: "8", image: require("../../../assets/explore/explore8.jpg") },
  { id: "9", image: require("../../../assets/explore/explore9.jpg") },
  { id: "10", image: require("../../../assets/explore/explore10.jpg") },
  { id: "11", image: require("../../../assets/explore/explore11.jpg") },
  { id: "12", image: require("../../../assets/explore/explore12.jpg") },
  { id: "13", image: require("../../../assets/explore/explore13.jpg") },
  { id: "14", image: require("../../../assets/explore/explore14.jpg") },
  { id: "15", image: require("../../../assets/explore/explore12.jpg") },
  { id: "16", image: require("../../../assets/explore/explore16.jpg") },
  { id: "17", image: require("../../../assets/explore/explore17.jpg") },
  { id: "18", image: require("../../../assets/explore/explore18.jpg") },
  { id: "19", image: require("../../../assets/explore/explore19.jpg") },
  { id: "20", image: require("../../../assets/explore/explore20.jpg") },
  { id: "21", image: require("../../../assets/explore/explore21.jpg") },
  { id: "22", image: require("../../../assets/explore/explore22.jpg") },
  { id: "23", image: require("../../../assets/explore/explore23.jpg") },
  { id: "24", image: require("../../../assets/explore/explore24.jpg") },
  { id: "25", image: require("../../../assets/explore/explore25.jpg") },
  { id: "26", image: require("../../../assets/explore/explore26.jpg") },
  { id: "27", image: require("../../../assets/explore/explore27.jpg") },
];

const { width } = Dimensions.get("window");

export default function Explore() {
  return (
    <>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="transparent"
      />

      <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.background }}>
        <Header />
        <MasonryList
          data={data}
          keyExtractor={(item) => item.id}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }: any) => (
            <View style={{ margin: 6 }}>
              <Image
                source={item.image}
                style={{
                  width: width / 2 - 12,
                  height: Math.random() * 150 + 150,
                  borderRadius: 12,
                }}
              />
            </View>
          )}
        />
      </SafeAreaView>
    </>
  );
}
