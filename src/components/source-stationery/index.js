import React from "react";
import { TouchableOpacity, Text } from "react-native";
import Card from "../card";
import { styles } from "./style";

const SourceStationery = ({ item, onSelected, children }) => {
    return (
        <TouchableOpacity onPress={() => onSelected(item)}>
          <Card style={{...styles.cardContainer, backgroundColor: item.background}}>

            {children}
            <Text style={styles.title}>{item.name}</Text>
          </Card>
        </TouchableOpacity>
    );
}
export default SourceStationery;