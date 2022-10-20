import {StyleSheet, Dimensions} from "react-native";
import {colors} from "../../constants/themes";

const {width, height} = Dimensions.get("window");

export const styles = StyleSheet.create({

  container: {

    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 5
  },

  component: {

    flexDirection: "row",
    justifyContent: "space-evenly",
    borderRadius: 7,
    marginBottom: 10,
    padding: 10,
    backgroundColor: colors.light,
    alignItems: "center",
  },

  add: {

    color: colors.secondary,
    fontSize: 18
  },

  onDelete: {

    color: colors.danger,
    fontSize: 18
  },

  update: {

    color: colors.primary,
    fontSize: 18
  },

  containerByModal: {

    justifyContent: "space-around",
    flex: 1,
    alignItems: "center"
  }
});