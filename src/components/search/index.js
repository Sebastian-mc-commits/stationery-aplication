import React, { useState } from 'react';
import { TextInput, View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { styles } from './style';
import { colors } from '../../constants/themes';

const Search = ({ dataList, filterSearch, commit = '' }) => {
  const [textInput, setTextInput] = useState(commit);
  const [activeInput, setActiveInput] = useState(false);

  const conditionIcon = textInput.length === 0 ? colors.dark : colors.danger;

  const onHandleText = (text) => {
    const lowerCaseText = text.toLowerCase();

    const filterList = dataList.filter((item) => {
      return item.name.toLowerCase().includes(lowerCaseText);
    });
    const filterSearchCondition = text.length === 0 ? [] : filterList;
    filterSearch(filterSearchCondition);
    return setTextInput(text);
  };

  return (
    <View style={styles.container}>
      {activeInput && (
        <TextInput
          value={textInput}
          onChangeText={(text) => onHandleText(text)}
          style={styles.input}
          autoCapitalize="none"
          autoFocus={activeInput}
        />
      )}
      <TouchableOpacity onPress={() => setActiveInput(!activeInput)}>
        <Ionicons
          name="search"
          size={24}
          color={
            textInput.length >= 1 && textInput.length <= 8
              ? colors.primary
              : conditionIcon
          }
        />
      </TouchableOpacity>
    </View>
  );
};
export default Search;
