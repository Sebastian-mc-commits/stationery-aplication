import {StyleSheet, Dimensions} from "react-native";
import {colors} from "../../constants/themes";

const {width, height} = Dimensions.get("window");
export const styles = StyleSheet.create({

  container: {

    flex: 1,
    marginTop: 25,
    justifyContent: "center",
    alignItems: "center",

  },

  historyItem: {

    flexDirection: "row",
    justifyContent: "space-between",
    width: width * 0.9,
    alignItems: "center",
    marginVertical: 10,
    borderBottomColor: colors.dark,
    borderBottomWidth: 1,
    paddingVertical: 5

  },

  historyName: {

    color: colors.text,
    fontSize: 17
  },
  containerList: {

    height: height * 0.5,
    marginVertical: width * 0.1
  },

  emptyMessage: {
    color: colors.text,
    opacity: 0.5,
    fontSize: 25,
    textAlign: 'center',
  },
});