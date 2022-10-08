import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StationeryCategory, StationeryItems, StationeryItem } from "../screens";
import {colors} from "../constants/themes";

const Stack = createNativeStackNavigator();

const StationeryMain = () => {

  return (

    <Stack.Navigator
      initialRouteName="StationeryCategory">

      <Stack.Screen
        name="StationeryCategory"
        component={StationeryCategory}
        options={{
          title: "Categorias",
          headerStyle: {
            backgroundColor: colors.dark
            ,
          },
          headerTintColor: colors.light,
          headerTitleStyle: {

            fontFamily: "SansPro-Italic",
            fontSize: 20
          }
        }} />

      <Stack.Screen
        name="StationeryItems"
        component={StationeryItems}
        options={({ route }) => ({
          title: route.params.name,
          headerStyle: {
            backgroundColor: route.params.background,
          },
          headerTitleStyle: {

            fontFamily: "SansPro-Italic",
            fontSize: 20
          },
        })} />

      <Stack.Screen
        name="StationeryItem"
        component={StationeryItem}
        options={({ route }) => ({
          title: route.params.name,
          headerStyle: {
            backgroundColor: route.params.background,
          },
          headerTitleStyle: {

            fontWeight: "bold"
          },
        })} />

    </Stack.Navigator>
  );
}
export default StationeryMain;