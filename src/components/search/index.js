import React,{ useState } from "react";
import { TextInput, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "./style";
import {colors} from "../../constants/themes";

const Search = ({ dataList, filterSearch }) => {

    const [textInput, setTextInput] = useState("");
    const [activeInput, setActiveInput] = useState(false);

    const conditionIcon = textInput.length === 0? colors.dark : colors.danger;

    const onHandleText = (text) => {
    const lowerCaseText = text.toLowerCase();
    
        const filterList = dataList.filter((item) => {
            
            return item.name.toLowerCase().includes(lowerCaseText);
        });
        const filterSearchCondition = text.length === 0 ? [] : filterList;
        filterSearch(filterSearchCondition);
        return setTextInput(text);
    }

    return (

        <View style={styles.container}>

            {activeInput && <TextInput
                value={textInput}
                onChangeText={(text) => onHandleText(text)}
                style={styles.input}
                autoCapitalize="none"
            />}

            <Ionicons
                name="search"
                size={22}
                color={ textInput.length >= 1 && textInput.length <= 8 ? colors.primary : conditionIcon}
                onPress={() => setActiveInput(!activeInput)} />

        </View>
    );
}
export default Search;