import { StyleSheet, Dimensions } from 'react-native';
import { colors } from '../../constants/themes';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    height: height * 0.5,
    padding: width * 0.1,
    marginVertical: height * 0.08,
    width: width * 0.9,
    alignSelf: 'center',
  },

  number: {
    fontSize: 20,
  },

  placeholderWrite: {
    textAlign: 'center',
    fontSize: 15,
    fontFamily: 'SansPro-ExtraLightItalic',
    color: colors.text,
  },

  contentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },

  data: {
    fontSize: 15,
    color: colors.text,
  },

  renderItemContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: height * 0.05,
    backgroundColor: colors.blue,
    height: height * 0.1,
    borderRadius: 6,
    width: width * 0.9,
  },

  message: {
    fontSize: 12,
  },

  itemName: {
    fontSize: 17,
  },

  deleteIcon: {
    backgroundColor: colors.danger,
    height: '100%',
    justifyContent: 'center',
    width: width * 0.2,
    alignItems: 'center',
  },

  updateIcon: {
    backgroundColor: '#ffffff',
    height: '100%',
    justifyContent: 'center',
    width: width * 0.2,
    alignItems: 'center',
  },

  icon: {
    position: 'absolute',
    top: 0,
    right: 0,
  },
});
