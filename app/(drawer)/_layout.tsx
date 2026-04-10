import CustomDrawer from "@/components/CustomDrawer";
import { Drawer } from "expo-router/drawer";
export default function DrawerLayout() {
  return (
    <Drawer
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          backgroundColor: "white",
        },
      }}
      drawerContent={(props) => <CustomDrawer {...props} />}
    >
      {/* Routes */}
      <Drawer.Screen name="(tabs)" />
    </Drawer>
  );
}
