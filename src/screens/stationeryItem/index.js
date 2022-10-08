import React from "react";
import { ImageBackground } from "react-native";
import { Items } from "../../constants/data";
import { ItemsStationery } from "../../components";
import { styles } from "./style";

const StationeryItem = ({ route }) => {

  const { idI } = route.params;

  const content = Items.find((item) => item.id === idI);

  return (

    <ImageBackground style={styles.container} source={require("../../images/background.jpg")}>
      <ItemsStationery item={content} />
    </ImageBackground>
  );
}
export default StationeryItem;