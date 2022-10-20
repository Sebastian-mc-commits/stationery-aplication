import React from 'react';
import { View, Text, TouchableOpacity, Modal } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { styles } from './styles';
import { colors } from '../../constants/themes';
import { activeModal } from '../../store/actions';
import { useDispatch } from 'react-redux';

const More = ({ navigation }) => {
  const dispatch = useDispatch();

  const add = () => {
    dispatch(activeModal(false));
    navigation.navigate('Add');
  };

  const updateDelete = () => {
    dispatch(activeModal(false));
    navigation.navigate('UpdateDelete');
  };

  const ComponentModal = () => {
    return (
      <View style={styles.containerByModal}>
        <TouchableOpacity onPress={add}>
          <Text style={styles.add}>Agregar</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={updateDelete}>
          <Text style={styles.update}>Actualizar y Eliminar</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate('History')}
        style={styles.component}>
        <MaterialIcons
          name="history-toggle-off"
          size={24}
          color={colors.dark}
        />
        <Text>Historial</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => dispatch(activeModal(true, <ComponentModal />))}
        style={styles.component}>
        <MaterialIcons name="add" size={24} color={colors.dark} />
        <Text>Agregar</Text>
      </TouchableOpacity>
    </View>
  );
};
export default More;
