import { StyleSheet, Dimensions } from 'react-native';
import {colors} from "../../constants/themes";

const {width, height} = Dimensions.get("window");
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  iconContainer: {
    flex: 1,
    position: 'absolute',
    top: 20,
    right: 20,
  },
})
