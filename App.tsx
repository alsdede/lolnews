import { useEffect } from "react";
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import { StatusBar } from "expo-status-bar";
import Constants from "expo-constants";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import { LogLevel, OneSignal } from "react-native-onesignal";
import { ThemeProvider } from "styled-components/native";

import Routes from "@/routes";
import theme from "@/theme";
import { handleNotificationClick } from "@/utils/notifications";
import { ANDROID_CLIENT_ID, ONESIGNAL_ID } from "@env";

OneSignal.Debug.setLogLevel(LogLevel.Verbose);
OneSignal.initialize(ONESIGNAL_ID);
OneSignal.Notifications.requestPermission(true);

WebBrowser.maybeCompleteAuthSession();

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  useEffect(() => {
    handleNotificationClick();
    return OneSignal.Notifications.clearAll();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <StatusBar backgroundColor="transparent" translucent />
      {fontsLoaded && <Routes />}
    </ThemeProvider>
  );
}
