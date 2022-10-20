import { colors } from '../../constants/themes';
import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  tabBar: {

    backgroundColor: "#ffffff",
    bottom: 30,
    left: 10,
    right: 10,
    padding: 10,
    borderRadius: 6,
    height: 100
  },
});
