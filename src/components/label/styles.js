import { StyleSheet } from "react-native";
import {colors} from "../../constants/themes";


export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    label: {
        fontSize: 16,
        color: colors.text,
        marginVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: colors.dark,
        width: "60%"

    },
});