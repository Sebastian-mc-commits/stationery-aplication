import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import Card from '../card';
import { styles } from './style';

const SourceStationery = ({ item, onSelected, children }) => {
  return (
    <TouchableOpacity onPress={() => onSelected(item)}>
      <Card
        style={{ ...styles.cardContainer, backgroundColor: item.background }}>
        {children}
        <View style={styles.nameContainer}>
          <Text style={styles.title}>{item.name}</Text>
        </View>
      </Card>
    </TouchableOpacity>
  );
};
export default SourceStationery;
