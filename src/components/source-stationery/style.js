import { Dimensions, StyleSheet } from "react-native";
import {colors} from "../../constants/themes";

const {width, height} = Dimensions.get("window");

export const styles = StyleSheet.create({

    cardContainer: {


        alignItems: "center",
        justifyContent: "space-between",
        paddingVertical: width * 0.01,
        height: height * 0.2,
        marginVertical: width * 0.1,
        marginHorizontal: 30,

    },

    title: {

        fontSize: 20,
        color: colors.light,
        fontFamily: "SansPro-Italic"
    },

    nameContainer:{

      width: "100%",
      backgroundColor: colors.dark,
      padding: 5,
      alignItems: "center"
    }
});