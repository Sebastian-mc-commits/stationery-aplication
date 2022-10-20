import React, { useState } from 'react';
import { FlatList, View, Text } from 'react-native';
import { styles } from './style';

const Sales = ({ navigation, route }) => {
  const onAdd = () => null;

  const onSubtract = () => null;

  const onSale = () => null;

  //const renderItem = ({ item }) => <SalesStationery item={item} onAdd={onAdd} onSubtract={onSubtract} onSale={onSale} />

  return (
    <View style={styles.container}>
      <Text>Working on it</Text>
    </View>
  );
};
export default Sales;
