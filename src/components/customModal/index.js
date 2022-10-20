import React, {useEffect, useRef, useState} from "react";
import {Modal, View, Animated, TouchableOpacity} from "react-native";
import Card from "../card";
import { MaterialIcons } from '@expo/vector-icons';
import {styles} from "./styles";
import {colors} from "../../constants/themes";

const CustomModal = ({children, visible}) => {

  const [modalVisible, setModalVisible] = useState(visible);
  const animationValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {

    animation()
  }, [visible]);

  const animation = () => {

    if (visible){
      setModalVisible(true);
      Animated.spring(animationValue, {
        toValue: 1,
        duration: 1000
      }).start();
    } else {
      setTimeout(() => setModalVisible(false), 1000);
      Animated.spring(animationValue, {
        toValue: 0,
        duration: 1000
      }).start();
    }
  }

  return (
      <Modal visible={modalVisible} transparent>
        <Animated.View style={{...styles.container, transform: [{scale: animationValue}]}}>
          <Card style={styles.cardContainer}>
                {children}
          </Card>
          </Animated.View>
      </Modal>
  );
}

export default CustomModal;
