import React, { useState } from 'react';
import {
  TextInput,
  View,
  Text,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { styles } from './style';
import { colors } from '../../constants/themes';

const Picker = ({ onSelectedList, list, nameError, title }) => {
  const [value, setValue] = useState('');
  const [showList, setShowList] = useState(false);

  const onSelected = (item) => {
    setValue(item.name);
    onSelectedList(item);
    return setTimeout(() => setShowList(false), 250);
  };

  const renderItem = ({ item }) => {
    return (
      <View style={styles.items}>
        <TouchableOpacity onPress={() => onSelected(item)}>
          <Text style={styles.name}>{item.name}</Text>
        </TouchableOpacity>
      </View>
    );
  };
  //alert(Boolean(list.length > 0));
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setShowList(!showList)}>
        <Text style={styles.value}>{value}</Text>
        <Entypo name="select-arrows" size={24} color="black" />
        {showList || (
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{title}</Text>
          </View>
        )}
      </TouchableOpacity>

      {showList && list.length > 0 ? (
        <FlatList
          style={styles.containerFlatList}
          data={list}
          renderItem={renderItem}
          key={(item) => item.id.toString()}
        />
      ) : (
        showList && <Text style={styles.helperText}>{nameError}</Text>
      )}
    </View>
  );
};
export default Picker;
