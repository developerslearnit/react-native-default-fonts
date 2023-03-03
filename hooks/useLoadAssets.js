import { useState, useEffect } from "react";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";

export const useLoadAssets = () => {
  const [assetsLoaded, setAssetsLoaded] = useState(false);

  const customFonts = {
    "roboto-bold": require("../assets/fonts/Roboto-Bold.ttf"),
    "roboto-regular": require("../assets/fonts/Roboto-Regular.ttf"),
    "roboto-medium": require("../assets/fonts/Roboto-Medium.ttf"),
    "roboto-light": require("../assets/fonts/Roboto-Light.ttf"),
    "tenor-sans": require("../assets/fonts/TenorSans-Regular.ttf"),
  };

  useEffect(() => {
    const loadAssets = async () => {
      try {
        SplashScreen.preventAutoHideAsync();
        await Font.loadAsync(customFonts);
      } catch (error) {
        console.warn(error);
      } finally {
        setAssetsLoaded(true);
        SplashScreen.hideAsync();
      }
    };
    loadAssets();
  }, []);
  return assetsLoaded;
};
