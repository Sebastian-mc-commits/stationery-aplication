import React, { useState } from "react";
import { FlatList, View } from "react-native";
import { Search, SalesStationery } from "../../components";
import { Items } from "../../constants/data";
import { styles } from "./style";

const Sales = ({ navigation, route }) => {

  const [filterListSearch, setFilterListSearch] = useState([]);

  const filterSearch = (content) => {

    setFilterListSearch(content);
  }

  const onAdd = () => null;

  const onSubtract = () => null;

  const onSale = () => null;

  const renderItem = ({ item }) => <SalesStationery item={item} onAdd={onAdd} onSubtract={onSubtract} onSale={onSale} />

  return (

    <View style={styles.container}>

      <View style={styles.FlatListContainer}>

      <FlatList

        data={filterListSearch.length > 0 ? filterListSearch : Items}
        renderItem={renderItem}
        numColumns={2}
        keyExtractor={content => content.id} 
        />
        </View>
        <Search dataList={Items} filterSearch={filterSearch} />
    </View>
  );
}
export default Sales;