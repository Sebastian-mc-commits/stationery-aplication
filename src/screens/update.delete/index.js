import React, { useState, useRef, useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import {
  View,
  Text,
  ScrollView,
  Animated,
  FlatList,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { styles } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import {
  getItem,
  deleteItem,
  updateItem,
  updateCategory,
  getCategory,
  addCommit,
} from '../../store/actions';
import { Card, AnimatedHeader, UpdateItem } from '../../components';
import { colors } from '../../constants/themes';

const UpdateDelete = () => {
  const dispatch = useDispatch();

  const items = useSelector((state) => state.items.items);
  const categoryList = useSelector((state) => state.category.list);
  const animation = useRef(new Animated.Value(0)).current;
  const scrollView = useRef();

  useFocusEffect(
    useCallback(() => {
      dispatch(getItem());
      dispatch(
        addCommit({
          id: Date.now(),
          name: 'Actualizar y Eliminar',
          date: Date.now(),
        })
      );
      dispatch(getCategory());
    }, [dispatch])
  );
  const onSelected = (item) => {
    dispatch(deleteItem(item));
  };

  const renderItem = ({ item }) => {
    return (
      <View style={styles.renderItemContainer}>
        <Text style={styles.renderItemName}>{item.name}</Text>
        <TouchableOpacity onPress={() => onSelected(item)}>
          <AntDesign name="delete" size={24} color={colors.light} />
        </TouchableOpacity>
      </View>
    );
  };
  const [stateItem, setStateItem] = useState(true);
  const message = stateItem ? 'Categorias' : 'Items';

  return (
    <View style={styles.container}>
      {stateItem ? (
        <AnimatedHeader
          scrollName={scrollView}
          animation={animation}
          leftTitle="Eliminar"
          rightTitle="Actualizar"
          rightTitleColor={colors.blue}
          leftTitleColor={colors.danger}
        />
      ) : (
        <View style={styles.updateCategory}>
          <Text style={styles.updateCategoryMessage}>
            Actualizar categorias
          </Text>
        </View>
      )}

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
        {stateItem && (
          <View style={styles.cardContainer}>
            <Card style={styles.card}>
              {stateItem && (
                <FlatList
                  data={items}
                  renderItem={renderItem}
                  keyExtractor={(item) => item.id.toString()}
                  ListEmptyComponent={
                    <Text style={styles.emptyMessage}>
                      No hay items registrados
                    </Text>
                  }
                />
              )}
            </Card>
          </View>
        )}
        <View style={styles.cardContainer}>
          <UpdateItem
            list={stateItem ? items : categoryList}
            dispatchAction={stateItem ? updateItem : updateCategory}
            showComponentList={stateItem}
          />
        </View>
      </ScrollView>
      <TouchableOpacity
        onPress={() => setStateItem(!stateItem)}
        style={[
          styles.messageContainer,
          { backgroundColor: stateItem ? colors.secondary : colors.primary },
        ]}>
        <Text style={styles.message}>{message}</Text>
      </TouchableOpacity>
    </View>
  );
};
export default UpdateDelete;
