import React, {useState} from "react";
import {View, Text} from "react-native";
import {styles} from "./style";

const SalesData = () => {

  const [data, setData] = useState(0);

  return (

    <View style={styles.container}>
      <Text>Grafico</Text>
    </View>
  );
}
export default SalesData;