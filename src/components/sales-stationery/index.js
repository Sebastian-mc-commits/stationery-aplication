import {View, Text, TouchableOpacity} from "react-native";
import Card from "../card"
import {styles} from "./style";

const SalesStationery = ({item, onAdd, onSubtract, onSale}) => {

  return (

    <Card style={styles.container}>

        <View style={styles.atributeContainer}>
          <Text style={styles.name}>{item.name}</Text>
          <Text>${item.price}</Text>
        </View>
        <Text style={styles.quantity}>Cantidad: {item.quantity}</Text>
        
        <View style={styles.features}>

          <TouchableOpacity onPress={() => onSubtract(item)} style={styles.buttons}>
            <Text>-</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => onAdd(item)} style={styles.buttons}>
            <Text>+</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={() => onSale(item)}>
            <Text style={styles.sale}>Venta</Text>
          </TouchableOpacity>
    </Card>
  );
}
export default SalesStationery;