import { StyleSheet, Dimensions } from 'react-native';
import { colors } from '../../constants/themes';

const { width, height } = Dimensions.get('window');
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 7,
  },

  input: {
    padding: 10,
    borderBottomColor: colors.primary,
    borderBottomWidth: 1,
    width: width * 0.9,
  },

  message: {
    marginTop: width * 0.05
  },

  helperText: {
    color: colors.danger,
  },
});
