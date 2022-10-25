import React, { useState } from 'react';
import { FlatList, View, Text, Button, TouchableOpacity } from 'react-native';
import { styles } from './style';
import { useSelector, useDispatch } from 'react-redux';
import { activeModal } from '../../store/slices/customModal.slice';
import { CustomModal } from '../../components';
import { MaterialIcons } from '@expo/vector-icons';

const Sales = ({ navigation, route }) => {
  const onAdd = () => null;

  const onSubtract = () => null;

  const onSale = () => null;
  const modalVisible = useSelector((state) => state.customModal.content);
  const dispatch = useDispatch();

  //const renderItem = ({ item }) => <SalesStationery item={item} onAdd={onAdd} onSubtract={onSubtract} onSale={onSale} />

  return (
    <View style={styles.container}>
      <Text>Working on it</Text>
      <Button
        title="press here"
        onPress={() =>
          dispatch(
            activeModal({
              value: true,
              content: (
                <View style={styles.container}>
                  <Text>{modalVisible}</Text>
                  <Text>hi</Text>
                  <Text>hi</Text>
                  <Text>hi</Text>
                  <Text>hi</Text>
                  <Text>hi</Text>
                  <Text>hi</Text>
                  <Text>hi</Text>
                  <Text>hi</Text>
                </View>
              ),
            })
          )
        }
      />

      <CustomModal visible={modalVisible.value}>
        <TouchableOpacity onPress={() => dispatch(activeModal(false))}>
          <MaterialIcons name="close" size={24} color="red" />
        </TouchableOpacity>

        {modalVisible.content}
      </CustomModal>
    </View>
  );
};
export default Sales;
