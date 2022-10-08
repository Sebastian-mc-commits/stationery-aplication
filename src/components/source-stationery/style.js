import { Dimensions, StyleSheet } from "react-native";
import {colors} from "../../constants/themes";

const {width, height} = Dimensions.get("screen");

export const styles = StyleSheet.create({

    cardContainer: {

        justifyContent: "center",
        alignItems: "center",
        paddingVertical: width * 0.01,
        height: height * 0.2,
        marginVertical: "3%",
        marginHorizontal: 30,
    },

    title: {

        fontSize: 20,
        color: colors.text,
        fontFamily: "SansPro-Italic"
    }
});