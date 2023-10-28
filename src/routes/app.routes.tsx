import { Ionicons, Feather } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useTheme } from "styled-components/native";

import Details from "@/screens/details/details-screen";
import Home from "@/screens/home/home-screen";
import Schedule from "@/screens/schedule/schedule-screen";
import SignIn from "@/screens/auth/signin";

const { Navigator, Screen } = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const BottomRoutes = () => {
  const { colors } = useTheme();
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: colors.green[500],
        tabBarInactiveTintColor: colors.gray[300],
        tabBarStyle: {
          borderTopWidth: 0,
          backgroundColor: colors.gray[500],
        },
      }}
    >
      <Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="md-home-outline" color={color} size={24} />
          ),
        }}
      />

      <Screen
        name="cart"
        component={Schedule}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name="list" color={color} size={24} />
          ),
        }}
      />

      <Screen
        name="details"
        component={Details}
        options={{ tabBarButton: () => null }}
      />
    </Navigator>
  );
};

const AppRoutes = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="BottomTabs" component={BottomRoutes} />
    </Stack.Navigator>
  );
};
export default AppRoutes;
