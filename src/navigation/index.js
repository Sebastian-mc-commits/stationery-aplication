import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import { UpdateDelete } from '../screens';
import Tabs from './tabs';
import { CustomModal } from '../components';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { colors } from '../constants/themes';
import { activeModal } from '../store/actions';
const styles = StyleSheet.create({
  icon: {
    alignSelf: "flex-start"
  },
});
const AppNavigator = () => {
  const searchScreen = useSelector(
    (state) => state.globalSearch.selectedSearch
  );
  const modalVisible = useSelector((state) => state.customModal.content);
  const dispatch = useDispatch();

  return (
    <NavigationContainer>
      {searchScreen?.screen || <Tabs />}

      <CustomModal visible={modalVisible.value}>
        <TouchableOpacity
          onPress={() => dispatch(activeModal(false))}
          style={styles.icon}>
          <MaterialIcons name="close" size={24} color={colors.danger} />
        </TouchableOpacity>

        {modalVisible.content}
      </CustomModal>
    </NavigationContainer>
  );
};

export default AppNavigator;
