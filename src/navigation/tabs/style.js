import {colors} from "../../constants/themes";
import {StyleSheet, Dimensions} from "react-native";

const {width, height} = Dimensions.get("screen");

export const styles = StyleSheet.create({

  tabBar: {

    position: "absolute",
    bottom: height * 0.04,
    right: 15,
    left: 15,
    padding: 15,
    height: height * 0.1,
    shadowColor: colors.dark,
        shadowOffset: {

            width: 0,
            heigth: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
        borderRadius: 4,
    backgroundColor: "#ffffff"
  },
});