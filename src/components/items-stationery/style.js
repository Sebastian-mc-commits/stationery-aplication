import { StyleSheet } from "react-native";
import {colors} from "../../constants/themes";

export const styles = StyleSheet.create({

    container: {

        flex: 1
    },

    card: {

        padding: "5%",
        height: 150,
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: colors.primary
    },

    name: {

      fontSize: 20,
      color: colors.text,
      fontFamily: "SansPro-BoldItalic"
    },
});