import { Dimensions, StyleSheet } from 'react-native';
import { colors } from '../../constants/themes';

const { width, height } = Dimensions.get('window');
export const styles = StyleSheet.create({
  container: {
    margin: width * 0.02,
  },

  items: {
    padding: width * 0.04,
    backgroundColor: colors.blue,
    margin: width * 0.03,
    borderRadius: 7,
    alignSelf: "center"
  },

  containerFlatList: {
    height: height,

    alignSelf: 'center',
  },

  name: {
    fontSize: 17,
    color: colors.white,
  },

  value: {
    fontSize: 18,
    color: colors.blue,
  },

  helperText: {
    color: colors.danger,
    marginVertical: 5,
    fontSize: 15,
  },

  title: {
    color: colors.text,
    fontSize: 16,
    alignSelf: "center"
  },

  titleContainer: {
    backgroundColor: colors.gray,
    padding: 5,
    border: colors.white,
    borderRadius: 6,
  },
});
