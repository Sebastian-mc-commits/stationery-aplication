import React, { useReducer } from 'react';
import { Card, Picker, Input } from '../index';
import { Button, View, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { colors } from '../../constants/themes';
import { styles } from './styles';
import { pickerValues, category } from '../../constants/data';
import { Ionicons } from '@expo/vector-icons';
import { selected } from '../../store/actions';

const UpdateItem = ({ dispatchAction, list, showComponentList }) => {
  const selectedBySearch = useSelector(
    (state) => state.globalSearch.selectedSearch.item
  );
  const items = useSelector((state) => state.items.items);
  const dispatch = useDispatch();

  const onConfirm = () => {
    const { name, valueInputItems, valueItem } = formState;
    dispatch(
      dispatchAction(valueItem.value, valueInputItems.value, name.value)
    );
  };

  const initialState = {
    name: {
      value: '',
    },
    valueItem: {
      value: selectedBySearch || '',
    },
    valueInputItems: {
      value: '',
    },
  };

  const formReducer = (state, action) => {
    switch (action.type) {
      case 'UPDATE_FORM':
        return {
          ...state,
          [action.data.typeForm]: {
            ...state[action.data.typeForm],
            value: action.data.valueInput,
          },
        };
    }
  };

  const [formState, distpatchFormState] = useReducer(formReducer, initialState);

  const onHandleChangeText = (valueInput, typeForm) => {
    return distpatchFormState({
      type: 'UPDATE_FORM',
      data: {
        typeForm,
        valueInput,
      },
    });
  };
  return (
    <Card style={styles.card}>
      {selectedBySearch && (
        <TouchableOpacity
          onPress={() => dispatch(selected(false))}
          style={styles.iconContainer}>
          <Ionicons name="arrow-back" size={24} color={colors.dark} />
        </TouchableOpacity>
      )}
      <View style={styles.pickerContainer}>
        {Boolean(selectedBySearch) || (
          <Picker
            list={list}
            title="Items"
            onSelectedList={(text) => onHandleChangeText(text, 'valueItem')}
            nameError="Items no encontrados"
          />
        )}
        <Picker
          list={showComponentList ? category : pickerValues}
          title="Valores"
          onSelectedList={(text) =>
            onHandleChangeText(text.type, 'valueInputItems')
          }
          nameError="Items no encontrados"
        />
      </View>

      <Input
        placeholder="Actualizar item"
        label={formState.valueItem.value?.name}
        value={formState.name.value}
        placeholderTextColor={colors.gray}
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={(text) => onHandleChangeText(text, 'name')}
      />
      <Button
        title="Actualizar"
        onPress={onConfirm}
        color={colors.primary}
        disabled={
          !formState.valueItem.value || !formState.valueInputItems.value
        }
      />
    </Card>
  );
};
export default UpdateItem;
