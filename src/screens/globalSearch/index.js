import React, { useState } from 'react';
import { Card, Search, UpdateItem } from '../../components';
import { FlatList, Text, View, TouchableOpacity } from 'react-native';
import { styles } from './style';
import { UpdateDelete, StationeryItem, StationeryItems } from '../index';
import { colors } from '../../constants/themes';
import { useSelector, useDispatch } from 'react-redux';
import { MaterialIcons } from '@expo/vector-icons';
import {
  updateCategory,
  selectCategory,
} from '../../store/slices/category.slice';
import { updateItem, deleteItem } from '../../store/slices/item.slice';
import { activeModal } from '../../store/slices/customModal.slice';
import { selected } from '../../store/slices/globalSearch.slice';

const GlobalSearch = ({ navigation }) => {
  const [filterListSearch, setFilterListSearch] = useState([]);
  const dispatch = useDispatch();
  const items = useSelector((state) => state.item.items);
  const category = useSelector((state) => state.category.list);

  const categoryItems = items.concat(category);

  const onSelected = (item, screen) => {
    if (screen === 'delete') {
      return dispatch(deleteItem(item));
    } else if (screen === 'showItems') {
      dispatch(selectCategory(item.id));
      return dispatch(activeModal({value: true, content: <StationeryItems />}));
    }
    return dispatch(selected({item, screen}));
  };
  const conditionFilterSearch =
    filterListSearch.length < 3 ? colors.danger : colors.primary;

  const renderItem = ({ item }) => (
    <View style={styles.renderItemContent}>
      <TouchableOpacity
        onPress={() =>
          onSelected(
            item,
            item.key === undefined ? 'showItems' : <StationeryItem />
          )
        }>
        <Text style={styles.message}>
          {item.key === undefined ? 'Categoria' : 'Item'}
        </Text>
        <Text style={styles.itemName}>{item.name}</Text>
      </TouchableOpacity>
      {item.key === undefined || (
        <TouchableOpacity
          style={styles.deleteIcon}
          onPress={() => onSelected(item, 'delete')}>
          <MaterialIcons name="delete" size={30} color={colors.dark} />
        </TouchableOpacity>
      )}

      <TouchableOpacity style={styles.updateIcon}>
        <MaterialIcons
          name="system-update-alt"
          size={30}
          color={colors.dark}
          onPress={() =>
            onSelected(
              item,
              <UpdateItem
                list={item}
                dispatchAction={
                  item.key === undefined ? updateCategory : updateItem
                }
                showComponentList={Boolean(item.key === undefined)}
              />
            )
          }
        />
      </TouchableOpacity>
    </View>
  );
  return (
    <Card style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.data}>Datos encontrados: </Text>
        <Text
          style={{
            color:
              filterListSearch.length === 0
                ? colors.danger
                : conditionFilterSearch,
            ...styles.number,
          }}>
          {filterListSearch.length}
        </Text>
      </View>
      <Search
        dataList={categoryItems}
        filterSearch={(content) => setFilterListSearch(content)}
      />
      {filterListSearch.length > 0 || (
        <Text style={styles.placeholderWrite}>
          Si la busqueda coincide con los datos almacenados, aparecera aqui.
        </Text>
      )}

      <FlatList
        data={filterListSearch}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </Card>
  );
};
export default GlobalSearch;
