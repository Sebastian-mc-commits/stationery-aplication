import { StyleSheet, Dimensions } from 'react-native';
import { colors } from '../../constants/themes';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: '90%',
    height: '90%',
  },
  imageContainer: {
    flex: 1,
    borderRadius: 6,
    borderColor: colors.primary,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center"
  },

  containerImageOptions: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    flex: 1,
    justifyContent: "center"
  },
  containerLibrary: {
    backgroundColor: colors.primary,
    justifyContent: "center",
    height: "90%",
    opacity: 0.7,
    width: "50%"
  },
  modalText: {
    fontSize: 20,
    color: colors.white,
  },
  containercamera: {
    backgroundColor: colors.secondary,
    justifyContent: "center",
    height: "90%",
    opacity: 0.7,
    width: "50%"
  },

  containerInput:{
    flex: 1,
    flexDirection: "row",
    alignItems: "center"
  }

});
