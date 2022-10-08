import { Modal, TouchableOpacity, View, Text } from "react-native";
import Card from "../card";

const OptionAdd = () => {

    return (

        <View>
        <Card>
            <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                <Text>+</Text>
            </TouchableOpacity>
        </Card>

        <Modal 
            visible={modalVisible}
            animationType="fade"
            onDismiss={dismiss}
            transparent/>

        </View>
    );
}