import React, {useState} from "react";
import {Items, Category} from "../../constants/data";
import {Card, Search} from "../../components";
import {FlatList, Text, View} from "react-native";
import {SourceStationery} from "../../components";
import {styles} from "./style";
import {colors} from "../../constants/themes";

const GlobalSearch = ({navigation}) => {

  const [filterListSearch, setFilterListSearch] = useState([]);

  const conditionFilterSearch = filterListSearch.length >= 2 && filterListSearch.length <= 3? colors.warn : colors.primary;
  const onSelected = (item) => {

    if (item.idC === undefined){

      return navigation.navigate("StationeryCategory");
    }
    const categoryFilterNavigation = Category.find(content => content.id === item.idC);
    
    return navigation.navigate("StationeryItems", { name: categoryFilterNavigation.name, 
    idC: categoryFilterNavigation.id,
     background: categoryFilterNavigation.background });
  }

  const categoryItems = Items.concat(Category);

  const filterSearch = content => setFilterListSearch(content);

  const renderItem = ({item}) => <SourceStationery item={item} onSelected={onSelected}/>
  return (
    
    
    <Card style={styles.container}>

      <View style={styles.contentContainer}>
        <Text style={styles.data}>Datos encontrados: </Text>
        <Text style={{color: filterListSearch.length === 0? colors.danger : conditionFilterSearch, 
        fontFamily: "SourceSansPro-BlackItalic"
        }}>{filterListSearch.length}</Text>
      </View>
      
        <Search dataList={categoryItems} filterSearch={filterSearch}/>
      {filterListSearch.length > 0 || <Text style={styles.placeholderWrite}>
        Si la busqueda coincide con los datos almacenados,
          aparecera aqui.</Text>}
          
      <FlatList 
      
        data={filterListSearch}
        keyExtractor={item => item.id * (Math.random() * Date.now()).toString()}
        renderItem={renderItem}/>
    </Card>
  );
}
export default GlobalSearch;