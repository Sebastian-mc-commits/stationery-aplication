import {StyleSheet, Dimensions} from "react-native";
import {colors} from "../../constants/themes";

const {width, height} = Dimensions.get("screen");

export const styles = StyleSheet.create({

  container: {

    borderColor: "black",
    backgroundColor: colors.white,
    borderTopWidth: 2,
    margin: 10,
    padding: 10,
    justifyContent: "space-between",
    height: height * 0.25,
    width: width * 0.43
    },

  atributeContainer: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  
  name: {
    
    fontSize: 15,
    color: colors.text,
    fontFamily: "SansPro-Bold"
  },

  features: {

    flexDirection: "row",
    justifyContent: "space-evenly",
  },

  buttons: {

    backgroundColor: colors.light,
    borderRadius: 10,
    padding: 10,
    fontSize: 15
  },

  sale: {

    fontSize: 20,
    textAlign: "center",
    color: colors.primary,
    fontFamily: "SansPro-BoldItalic"
  }
});