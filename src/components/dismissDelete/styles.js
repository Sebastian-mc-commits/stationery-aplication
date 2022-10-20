import {StyleSheet, Dimensions} from "react-native";
import {colors} from "../../constants/themes";

const {width, height} = Dimensions.get("window");

export const styles = StyleSheet.create({

  deleted: {

    fontSize: 15,
    color: colors.danger,
  },

  undo: {

    color: colors.blue
  },

  renderItemHistoryDismiss: {

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width : width * 0.9,
    backgroundColor: colors.blue,
    padding: 15,
  },

  historyContent: {

    flexDirection: "row",
    width: width * 0.35,
    justifyContent: "space-between"
  },

  container: {

    flex: 1,
    marginTop: 25,
    justifyContent: "center",
    alignItems: "center",

  },
});