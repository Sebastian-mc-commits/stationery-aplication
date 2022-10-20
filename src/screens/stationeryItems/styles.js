import { StyleSheet } from 'react-native';
import { colors } from '../../constants/themes';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  emptyMessage: {
    color: colors.text,
    opacity: 0.5,
    fontSize: 25,
    textAlign: 'center',
    borderColor: colors.gray,
    borderWidth: 2,
  },
});
