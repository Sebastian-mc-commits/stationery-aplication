import {StyleSheet, Dimensions} from "react-native";
import {colors} from "../../constants/themes";

const {width, height} = Dimensions.get("screen");

export const styles = StyleSheet.create({

  container:{

    flex: 1,
    backgroundColor: colors.white,
    margin: width * 0.01,
    height: height * 0.4,
    padding: width * 0.01,
    marginVertical: height * 0.08
  },

  placeholderWrite: {

    textAlign: "center",
    fontSize: 15,
    fontFamily: "SansPro-ExtraLightItalic",
    color: colors.text
  },

  contentContainer: {

    flexDirection: "row",
    justifyContent: "space-evenly"
  },
  
  data: {

    fontSize: 15,
    color: colors.text
  }
});