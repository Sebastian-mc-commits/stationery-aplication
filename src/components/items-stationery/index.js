import React from 'react';
import { ImageBackground, Text } from 'react-native';
import Card from '../card';
import { styles } from './style';

const ItemsStationery = ({ item }) => {
  const formDate = (time) => {
    const date = new Date(time);
    return date.toLocaleDateString();
  };
  return (
    <Card style={styles.card}>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.itemContent}>
        Fecha de creacion: {formDate(item.date)}
      </Text>
      <Text style={styles.itemContent}>Cantidad: {item.quantity}</Text>
      <Text style={styles.itemContent}>Precio: {item.price}</Text>
      <Text style={styles.description}>{item.description}</Text>
      <Text style={styles.itemContent}>Color: {item.color}</Text>
    </Card>
  );
};
export default ItemsStationery;
