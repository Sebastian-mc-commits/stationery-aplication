import { StyleSheet, Dimensions } from 'react-native';
import { colors } from '../../constants/themes';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  titlesContainer: {
    backgroundColor: colors.primary,
    height: '100%',
    justifyContent: "center",
    paddingHorizontal: 30
  },

  header: {
    flexDirection: 'row',

    backgroundColor: colors.dark,
    alignItems: 'center',
    justifyContent: 'space-around',
    height: height * 0.07,
    marginVertical: height * 0.05,
    borderRadius: 6
  },

  titles: {
    color: colors.light,
    fontSize: 15,
  },
});
