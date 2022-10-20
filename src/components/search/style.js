import { Dimensions, StyleSheet } from "react-native";
import {colors} from "../../constants/themes";

const {width, height} = Dimensions.get("screen");
export const styles = StyleSheet.create({

    container: {

        flexDirection: "row",
        marginVertical: width * 0.04,
        alignItems: "center",
        justifyContent: "center",
    
    },

    input: {

        borderBottomColor: colors.dark,
        borderBottomWidth: 1,
        width: width * 0.3
    },

    containerInput: {

      flexDirection: "row"
    }
});