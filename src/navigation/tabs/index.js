import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import StationeryMain from "../stationeryMain";
import { Ionicons, MaterialCommunityIcons  } from '@expo/vector-icons'; 
import {Sales, SalesData, GlobalSearch} from "../../screens";
import {colors} from "../../constants/themes"
import {Card} from "../../components/card";
import {styles} from "./style";

// "SourceSansPro-BlackItalic"
const ButtonTab = createBottomTabNavigator();

const Tabs = () => {

  return (
    
    <ButtonTab.Navigator
      initialRouteName="StationeryCategory"
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBar
        //tabBarShowLabel: false
      }}
      >
      <ButtonTab.Screen
        name="StationeryCategory"
        component={StationeryMain}
        options={{
          title: "Categorias",
          tabBarIcon: ({ focused }) => (

            <Ionicons name={focused ? "ios-home": "ios-home-outline"} size={24} color={colors.secondary} />
          )
        }}/>

      <ButtonTab.Screen
        name="GlobalSearch"
        component={GlobalSearch}
        options={{
          title: "Busqueda global",
          tabBarStyle: {...styles.tabBar ,backgroundColor: colors.dark},
          tabBarIcon: ({ focused }) => (

            <Ionicons name={focused ? "search-sharp": "search-outline"} size={24} color={colors.secondary} />
          )
        }}/>

      <ButtonTab.Screen 
        name="Sales"
        component={Sales}
        options={{
          title: "Agregar...",
          tabBarIcon: ({ focused }) => (

            <Ionicons name={focused ? "information-circle-sharp": "information-circle-outline"} size={24} color={colors.secondary} />
          )
        }}/>

      <ButtonTab.Screen 
        name="SalesData"
        component={SalesData}
        options={{
          title: "Categorias",
          tabBarIcon: ({ focused }) => (

            <MaterialCommunityIcons name={focused? "database" : "database-outline"} size={24} color={colors.secondary} />
          )
        }}/>
    </ButtonTab.Navigator>
    
  );
}
export default Tabs;