import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import StationeryMain from "../stationeryMain";
import MainMore from "../mainMore";
import { Ionicons, MaterialCommunityIcons, MaterialIcons  } from '@expo/vector-icons'; 
import {Sales, SalesData, GlobalSearch, History} from "../../screens";
import {colors} from "../../constants/themes"
import {styles} from "./style";

// "SourceSansPro-BlackItalic"
const ButtonTab = createBottomTabNavigator();

const Tabs = () => {

  return (
    
    <ButtonTab.Navigator
      initialRouteName="StationeryCategory"
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBar,
        tabBarHideOnKeyboard: true
        //tabBarShowLabel: false
      }}

      >
      <ButtonTab.Screen
        name="StationeryCategory"
        component={StationeryMain}
        options={{
          title: "",
          tabBarIcon: ({ focused }) => (

            <Ionicons name={focused ? "ios-home": "ios-home-outline"} size={24} color={colors.yellow} />
          )
        }}/>

      <ButtonTab.Screen
        name="GlobalSearch"
        component={GlobalSearch}
        options={{
          title: "",
          tabBarIcon: ({ focused }) => (

            <Ionicons name={focused ? "search-sharp": "search-outline"} size={24} color={colors.yellow} />
          )
        }}/>

      <ButtonTab.Screen 
        name="Sales"
        component={Sales}
        options={{
          title: "",
          tabBarIcon: ({ focused }) => (

            <Ionicons name={focused ? "information-circle-sharp": "information-circle-outline"} size={24} color={colors.yellow} />
          )
        }}/>

      <ButtonTab.Screen 
        name="SalesData"
        component={SalesData}
        options={{
          title: "",
          tabBarIcon: ({ focused }) => (

            <MaterialCommunityIcons name={focused? "database" : "database-outline"} size={24} color={colors.yellow} />
          )
        }}/>

      <ButtonTab.Screen 
        name="MainMore"
        component={MainMore}
        options={{
          title: "",
          tabBarIcon: ({ focused }) => (

            <MaterialIcons name={focused? "more": "more-horiz"} size={24} color={colors.yellow} />
          )
        }}/>

    </ButtonTab.Navigator>
    
  );
}
export default Tabs;