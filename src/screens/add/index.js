import React, { useState, useReducer, useRef, useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import {
  View,
  Text,
  Button,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
  Animated,
  TouchableOpacity,
} from 'react-native';
import { styles } from './styles';
import { useDispatch } from 'react-redux';
import { addCategory, getCategory } from '../../store/slices/category.slice';
import { addCommit } from '../../store/slices/history.slice';
import { addItem } from '../../store/slices/item.slice';
import { Input, Card, AnimatedHeader, ImageSelector } from '../../components';
import FormItems from '../../components/formItems';
import { colors } from '../../constants/themes';
import { onInputChange, formReducer } from '../../utils/forms';
import { Ionicons } from '@expo/vector-icons';

const Add = () => {
  const dispatch = useDispatch();
  const onConfirm = () => {
    const { name, image, background } = formState;
    dispatch(addCategory(name.value, image.value, background.value));
  };

  useFocusEffect(
    useCallback(() => {
      dispatch(getCategory());
      dispatch(
        addCommit({ id: Date.now(), name: 'Agregar', date: Date.now() })
      );
    }, [dispatch])
  );

  const initialState = {
    name: {
      value: '',
      error: '',
      hasError: true,
      touched: false,
      optional: false,
    },
    image: { value: '', touched: false, optional: true },
    background: {
      value: '',
      error: '',
      hasError: true,
      touched: false,
      optional: false,
    },
    isFormValid: false,
  };

  const [formState, distpatchFormState] = useReducer(formReducer, initialState);

  const onHandleChangeText = (value, type) => {
    onInputChange(type, value, distpatchFormState, formState);
  };

  const animation = useRef(new Animated.Value(0)).current;
  const scrollView = useRef();

  return (
    <KeyboardAvoidingView style={styles.container} behavior="height">
      <AnimatedHeader
        scrollName={scrollView}
        animation={animation}
        leftTitle="Categorias"
        rightTitle="Items"
        leftTitleColor={colors.primary}
        rightTitleColor={colors.secondary}
      />
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        ref={scrollView}
        onScroll={Animated.event([
          {
            nativeEvent: { contentOffset: { x: animation } },
          },
        ])}>
        <View style={styles.cardContainer}>
          <Card style={styles.card}>
            <Input
              placeholder="Ingresar nombre"
              label="Nombre"
              value={formState.name.value}
              placeholderTextColor={colors.gray}
              autoCapitalize="none"
              maxLength={10}
              autoCorrect={false}
              hasError={formState.name.hasError}
              error={formState.name.error}
              touched={formState.name.touched}
              onChangeText={(text) => onHandleChangeText(text, 'name')}
            />
            <ImageSelector
              onImage={(image) =>
                distpatchFormState({
                  type: 'UPDATE_FORM',
                  data: {
                    name: 'image',
                    value: image,
                  },
                })
              }
              valueImage={formState.image.value}
              onChangeTextImage={(text) => onHandleChangeText(text, 'image')}
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

            <Button
              title="Agregar"
              onPress={onConfirm}
              disabled={!formState.isFormValid}
              color={colors.primary}
            />
          </Card>
        </View>
        <View style={styles.cardContainer}>
          <FormItems dispatchAction={addItem} />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
export default Add;
