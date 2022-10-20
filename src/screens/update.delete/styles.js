import { StyleSheet, Dimensions } from 'react-native';
import { colors } from '../../constants/themes';

const { width, height } = Dimensions.get('window');
export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  card: {
    backgroundColor: '#ffffff',
    width: width * 0.8,
    alignSelf: 'center',
    padding: 10,
    height: '90%',

  },

  renderItemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: width * 0.05,
    paddingVertical: width * 0.04,
    backgroundColor: colors.danger,
    alignItems: 'center',
    borderRadius: 6,
  },

  cardContainer: {
    flex: 1,
    width: width,
    justifyContent: 'center',
  },
  renderItemName: {
    fontSize: 16,
    color: colors.white,
  },

  message: {
    fontSize: 17,
    color: colors.white,
  },

  messageContainer: {
    width: width * 0.6,
    borderRadius: 6,
    padding: 16,
    marginVertical: width * 0.04,
    alignItems: 'center',
    alignSelf: 'center',

  },

  emptyMessage: {
    color: colors.text,
    opacity: 0.5,
    fontSize: 25,
    textAlign: 'center',
    borderColor: colors.gray,
    borderWidth: 2,
  },

  updateCategory: {
    backgroundColor: colors.dark,
    height: 80,
    padding: 5,
    marginVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },

  updateCategoryMessage: {
    fontSize: 25,
    color: colors.yellow,
  },
});
