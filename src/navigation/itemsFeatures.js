import {View, Text, TouchableOpacity} from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {More, History, Add} from "../screens";

const StackItemsFeatures = createNativeStackNavigator();
const ItemsFeatures = () => {

  return (

    <StackItemsFeatures.Navigator
      initialRouteName="Add">

      <StackItemsFeatures.Screen
        name="Add"
        component={Add}/>

      <StackItemsFeatures.Screen
        name="History"
        component={History}/>
    </StackItemsFeatures.Navigator>
  );
}

export default ItemsFeatures;