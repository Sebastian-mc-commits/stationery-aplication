import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
export const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    width: width * 0.8,
    alignSelf: 'center',
    padding: 10,
    height: '90%',
    overflow: 'hidden',
    marginTop: height * 0.05,
  },

  pickerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  iconContainer: {
    flex: 1,
    position: 'absolute',
    top: 20,
    right: 20,
    padding: 5,
  },
});
