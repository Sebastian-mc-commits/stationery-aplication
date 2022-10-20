import {StyleSheet, Dimensions} from "react-native";

const {width, height} = Dimensions.get("window");

export const styles = StyleSheet.create({

  container: {
    
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    
  },

  animatedContainer: {

    flex: 1,
  },

  cardContainer: {

    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "space-around",
    width: width * 0.8,
    height: height * 0.5
  },

});