import React, { useState, useEffect, useCallback } from 'react';
import { View, FlatList, Text } from 'react-native';
import { Search, SourceStationery } from '../../components';
import { styles } from './styles';
import { useSelector, useDispatch } from 'react-redux';
import { selectItem, addCommit } from '../../store/actions';
import { useFocusEffect } from '@react-navigation/native';
import { getItem } from '../../store/actions';
const StationeryItems = ({ navigation, route }) => {
  const dispatch = useDispatch();

  const selectedCategory = useSelector((state) => state.category.selected);
  const modalVisible = useSelector((state) => state.customModal.content.value);

  const items = useSelector((state) => state.items.items);

  const filter = items.filter((item) => item.key == selectedCategory);

  useFocusEffect(
    useCallback(() => {
      dispatch(getItem());
    }, [dispatch])
  );

  const onSelected = (item) => {
    dispatch(addCommit({ id: Date.now(), name: item.name, date: Date.now() }));
    dispatch(selectItem(item));
    navigation.navigate('StationeryItem', {
      name: item.name,
      background: item.background,
    });
  };

  const renderItem = ({ item }) => (
    <SourceStationery
      item={item}
      onSelected={modalVisible ? () => null : onSelected}
    />
  );
  return (
    <View style={styles.container}>
      <Text>{selectedCategory?.id}</Text>
      <FlatList
        data={filter}
        renderItem={renderItem}
        ListEmptyComponent={
          <Text style={styles.emptyMessage}> No hay items registrados</Text>
        }
        keyExtractor={(item) => item.id}
        style={styles.container}
      />
    </View>
  );
};
export default StationeryItems;
