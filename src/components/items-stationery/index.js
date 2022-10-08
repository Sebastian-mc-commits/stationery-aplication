import React from "react";
import { ImageBackground, Text } from "react-native";
import Card from "../card";
import { styles } from "./style";

const ItemsStationery = ({ item }) => {
    return (
        

      <Card style={styles.card}>
          <Text style={styles.name}>{item.name}</Text>
          <Text>Cantidadd: {item.quantity}</Text>
          <Text>Cantidadd: {item.price}</Text>
          <Text>Color: {item.color}</Text>
      </Card>
    );
}
export default ItemsStationery;