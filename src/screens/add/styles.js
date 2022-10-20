import {StyleSheet, Dimensions} from "react-native";
import {colors} from "../../constants/themes";

const {width, height} = Dimensions.get("window");

export const styles = StyleSheet.create({

  container: {

    flex: 1,
    padding: 20
  },

  cardContainer: {

    height: height * 0.5,
    width: width * 0.9,
  },

  card:{

    backgroundColor: "#ffffff",
    padding: 12,
    flex: 1,
  },

  item: {

    justifyContent: "center",
    alignItems: "center",
    width: width
  }

});