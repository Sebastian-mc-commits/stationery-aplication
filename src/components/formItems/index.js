import React, { useReducer, useState } from 'react';
import { ScrollView } from 'react-native';
import { Button } from 'react-native';
import { Card, Input, Picker } from '../index';
import { formReducer, onInputChange } from '../../utils/forms';
import { styles } from './styles';
import { colors } from '../../constants/themes';
import { useDispatch, useSelector } from 'react-redux';

const FormItems = ({ dispatchAction }) => {
  const category = useSelector((state) => state.category.list);
  const dispatch = useDispatch();

  const onConfirm = () => {
    const { name, price, description, quantity, background, color } = formState;
    dispatch(
      dispatchAction(
        value.id,
        name.value,
        price.value,
        description.value,
        quantity.value,
        background.value,
        color.value
      )
    );
  };

  const initialState = {
    name: {
      value: '',
      error: '',
      hasError: true,
      touched: false,
      optional: false,
    },
    price: {
      value: '',
      error: '',
      hasError: true,
      touched: false,
      optional: false,
    },
    description: {
      value: '',
      error: '',
      optional: true,
    },
    quantity: {
      value: '',
      error: '',
      hasError: true,
      touched: false,
      optional: false,
    },
    background: {
      value: '',
      error: '',
      hasError: true,
      touched: false,
      optional: false,
    },
    color: {
      value: '',
      error: '',
      hasError: true,
      touched: false,
      optional: false,
    },

    isFormValid: false,
  };

  const [formState, distpatchFormState] = useReducer(formReducer, initialState);
  const [value, setValue] = useState('');

  const onSelected = (item) => {
    setValue(item);
  };

  const onHandleChangeText = (value, type) => {
    onInputChange(type, value, distpatchFormState, formState);
  };

  return (
    <Card style={styles.cardContainer}>
      <Picker
        onSelectedList={onSelected}
        list={category}
        title="Categoria perteneciente al item"
        nameError="ha ocurrido un error en encontrar las categorias"
      />
      <ScrollView>
        <Input
          placeholder="Ingresar nombre"
          label="Nombre"
          value={formState.name.value}
          placeholderTextColor={colors.gray}
          autoCapitalize="none"
          autoCorrect={false}
          hasError={formState.name.hasError}
          error={formState.name.error}
          touched={formState.name.touched}
          onChangeText={(text) => onHandleChangeText(text, 'name')}
        />

        <Input
          placeholder="Ingresar precio"
          label="Precio"
          value={formState.price.value}
          placeholderTextColor={colors.gray}
          autoCapitalize="none"
          autoCorrect={false}
          hasError={formState.price.hasError}
          error={formState.price.error}
          touched={formState.price.touched}
          onChangeText={(text) => onHandleChangeText(text, 'price')}
        />

        <Input
          placeholder="Ingresar descripcion (opcional)"
          label="Descripcion"
          value={formState.description.value}
          placeholderTextColor={colors.gray}
          autoCapitalize="none"
          autoCorrect={false}
          hasError={formState.description.hasError}
          error={formState.description.error}
          touched={formState.description.touched}
          onChangeText={(text) => onHandleChangeText(text, 'description')}
        />

        <Input
          placeholder="Ingresar cantidad"
          label="Cantidad"
          value={formState.quantity.value}
          placeholderTextColor={colors.gray}
          autoCapitalize="none"
          autoCorrect={false}
          hasError={formState.quantity.hasError}
          error={formState.quantity.error}
          touched={formState.quantity.touched}
          onChangeText={(text) => onHandleChangeText(text, 'quantity')}
        />

        <Input
          placeholder="Ingresar fondo"
          label="Fondo"
          value={formState.background.value}
          placeholderTextColor={colors.gray}
          autoCapitalize="none"
          autoCorrect={false}
          hasError={formState.background.hasError}
          error={formState.background.error}
          touched={formState.background.touched}
          onChangeText={(text) => onHandleChangeText(text, 'background')}
        />

        <Input
          placeholder="Ingresar Colores disponibles"
          label="Colores"
          value={formState.color.value}
          placeholderTextcolor={colors.gray}
          autoCapitalize="none"
          autoCorrect={false}
          hasError={formState.color.hasError}
          error={formState.color.error}
          touched={formState.color.touched}
          onChangeText={(text) => onHandleChangeText(text, 'color')}
        />

        <Button
          title={
            Boolean(value) ? 'agregar' : 'seleccion de categoria requerida'
          }
          onPress={onConfirm}
          disabled={!formState.isFormValid || Boolean(!value)}
          color={colors.primary}
        />
      </ScrollView>
    </Card>
  );
};
export default FormItems;
