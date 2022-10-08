import React, {useState} from "react";
import { View, FlatList } from "react-native";
import { Search, SourceStationery } from "../../components";
import { Items } from "../../constants/data";
import {styles} from "./styles";

const StationeryItems = ({ navigation, route }) => {

  const [filterListSearch, setFilterListSearch] = useState([]);

  const filterSearch = (content) => {

    setFilterListSearch(content);
  }

  const { idC } = route.params;

  const onSelected = (item) => {

    navigation.navigate("StationeryItem", { name: item.name, idI: item.id, background: item.background })
  }

  const data = Items.filter((item) => item.idC === idC);
  const renderItem = ({ item }) => <SourceStationery item={item} onSelected={onSelected} />
  return (

    <View style={styles.container}>
      <Search dataList={data} filterSearch={filterSearch} />
      <FlatList

        data={filterListSearch.length > 0 ? filterListSearch : data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        style={styles.container} />
    </View>
  );
}
export default StationeryItems;