import { StyleSheet, Dimensions } from "react-native";

const {width, height} = Dimensions.get("screen");
export const styles = StyleSheet.create({

    container: {
      
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },

    flatListContainer: {

      height: height * 0.6,
      marginTop: width * 0.05
    }
});