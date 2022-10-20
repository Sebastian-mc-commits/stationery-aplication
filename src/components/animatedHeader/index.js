import React, {useRef} from "react";

import {
  View,
  TouchableOpacity,
  Text,
  Animated,
  Dimensions,
} from 'react-native';
import { styles } from './styles';
const { width, height } = Dimensions.get('window');

const AnimatedHeader = ({ scrollName, animation, leftTitle, rightTitle, leftTitleColor, rightTitleColor }) => {

  const animationOpacityCategory = animation.interpolate({
    inputRange: [0, width],
    outputRange: [1, 0.3],
  });

  const animationOpacityItem = animation.interpolate({
    inputRange: [0, width],
    outputRange: [0.3, 1],
  });
  
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={() => scrollName.current.scrollTo({ x: 0 })}>
        <Animated.View
          style={{
            ...styles.titlesContainer,
            opacity: animationOpacityCategory,
            backgroundColor: leftTitleColor
          }}>
          <Text style={styles.titles}>{leftTitle}</Text>
        </Animated.View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => scrollName.current.scrollTo({ x: width })}>
        <Animated.View
          style={{ ...styles.titlesContainer, opacity: animationOpacityItem, backgroundColor: rightTitleColor }}>
          <Text style={styles.titles}>{rightTitle}</Text>
        </Animated.View>
      </TouchableOpacity>
    </View>
  );
};
export default AnimatedHeader;
