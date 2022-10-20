import { StyleSheet, Dimensions } from 'react-native';
import { colors } from '../../constants/themes';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  card: {
    padding: '5%',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: colors.blue,
    height: height * 0.7,
    width: width * 0.8
  },

  name: {
    fontSize: 25,
    color: colors.text,
    fontFamily: 'SansPro-BoldItalic',
  },

  itemContent: {
    borderWidth: 1,
    borderColor: colors.primary,
    padding: 8,
    borderRadius: 6,
    color: colors.gray,
    fontSize: 20
  },
});
