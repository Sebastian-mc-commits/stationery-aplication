import { View } from "react-native";
import { styles } from "./style";

const Card = ({ children, style }) => {

    return (

        <View style={{...style, ...styles.container}}>
            {children}
        </View>
    );
}
export default Card;