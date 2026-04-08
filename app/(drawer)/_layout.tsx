import CustomDrawer from "@/components/CustomDrawer";
import { Drawer } from "expo-router/drawer";
import { SafeAreaView } from "react-native-safe-area-context";
export default function DrawerLayout() {
  return (
    <Drawer
      screenOptions={{
        headerShown: false,
      }}
      drawerContent={(props) => <CustomDrawer {...props} />}
    >
      {/* Routes */}

      <Drawer.Screen name="(tabs)" />

      <Drawer.Screen name="bestSellers" />
      <Drawer.Screen name="trendingItems" />
    </Drawer>
  );
}
