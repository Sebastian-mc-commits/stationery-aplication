import React, { useState, useCallback, useEffect } from 'react';
import { FlatList, Image, View, TouchableOpacity, Text } from 'react-native';
import { SourceStationery } from '../../components';
import { styles } from './style';
import {
  selectCategory,
  getCategory
} from '../../store/slices/category.slice';
import {addCommit} from '../../store/slices/history.slice';
import { useSelector, useDispatch } from 'react-redux';
import { useFocusEffect } from '@react-navigation/native';

const StationeryCategory = ({ navigation }) => {
  const dispatch = useDispatch();

  const category = useSelector((state) => state.category.list);
  const selectedBySearch = useSelector(
    (state) => state.globalSearch.selectedSearch.item
  );

  useFocusEffect(
    useCallback(() => {
      dispatch(getCategory());
    }, [dispatch])
  );

  const onSelected = (item) => {
    dispatch(selectCategory(item.id));

    dispatch(addCommit({ id: Date.now(), name: item.name, date: Date.now() }));

    navigation.navigate('StationeryItems', {
      name: item.name,
      background: item.background,
    });
  };

  const renderItem = ({ item }) => (
    <SourceStationery
      item={item}
      onSelected={selectedBySearch ? () => null : onSelected}>
      <Image
        source={{ uri: item.image }}
        style={{ width: '90%', height: '100%', opacity: 0.7 }}
      />
    </SourceStationery>
  );
  return (
    <View style={styles.container}>
      <FlatList
        data={category}
        renderItem={renderItem}
        keyExtractor={(content) => content.id}
        style={styles.container}
      />
    </View>
  );
};
export default StationeryCategory;
