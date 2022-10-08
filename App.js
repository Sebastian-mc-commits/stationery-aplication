import React from "react";
import {useFonts} from "expo-font";
import AppNavigator from "./src/navigation";
import {ActivityIndicator, SafeAreaView, StyleSheet, View, Platform } from "react-native";
import {colors} from "./src/constants/themes";

const styles = StyleSheet.create({

  container: {

    flex: 1,
    marginTop: Platform.OS === "android" && 20
  },

  contentLoader: {

    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
export default function App() {

  const [loaded] = useFonts({

    "SansPro-Black": require("./assets/fonts/SourceSansPro-Black.ttf"),
    "SansPro-BlackItalic": require("./assets/fonts/SourceSansPro-BlackItalic.ttf"),
    "SansPro-Bold": require("./assets/fonts/SourceSansPro-Bold.ttf"),
    "SansPro-BoldItalic": require("./assets/fonts/SourceSansPro-BoldItalic.ttf"),
    "SansPro-ExtraLight": require("./assets/fonts/SourceSansPro-ExtraLight.ttf"),
    "SansPro-ExtraLightItalic": require("./assets/fonts/SourceSansPro-ExtraLightItalic.ttf"),
    "SansPro-Italic": require("./assets/fonts/SourceSansPro-Italic.ttf"),
    "SansPro-Light": require("./assets/fonts/SourceSansPro-Light.ttf"),

  });

  if (!loaded) {
    return ( 
      <View style={styles.contentLoader}>
        <ActivityIndicator size={60} color={colors.primary}/> 
      </View>
    );
    }
  return (
      <SafeAreaView style={styles.container}>

        <AppNavigator />
      </SafeAreaView>
  );
}