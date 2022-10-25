import React, { useState, useEffect, useCallback } from 'react';
import { View, FlatList, Text } from 'react-native';
import { Search, SourceStationery } from '../../components';
import { styles } from './styles';
import { useSelector, useDispatch } from 'react-redux';
import { addCommit } from '../../store/slices/history.slice';
import { selectedItem, getItem } from '../../store/slices/item.slice';
import { useFocusEffect } from '@react-navigation/native';
const StationeryItems = ({ navigation, route }) => {
  const dispatch = useDispatch();

  const selectedCategory = useSelector((state) => state.category.selected);
  const modalVisible = useSelector((state) => state.customModal.content);
  const items = useSelector((state) => state.item.items);

  const filter = items.filter((item) => item.key === selectedCategory);

  useFocusEffect(
    useCallback(() => {
      dispatch(getItem());
    }, [dispatch])
  );

  const onSelected = (item) => {
    dispatch(addCommit({ id: Date.now(), name: item.name, date: Date.now() }));
    dispatch(selectedItem(item));
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
        keyExtractor={(item) => item.id.toString()}
        style={styles.container}
      />
    </View>
  );
};
export default StationeryItems;
