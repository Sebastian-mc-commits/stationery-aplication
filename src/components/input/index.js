import React from "react";
import {TextInput, View, Text} from "react-native";
import {styles} from "./styles";
import Label from "../label";
import { Ionicons } from '@expo/vector-icons';

const Input = ({hasError, error, touched, ...props}) => {

  return (

    <View style={styles.container}>

      <Label {...props}>
        <TextInput
        {...props}
          style={styles.input}/>
      </Label>

      {hasError && touched && (
        <View style={styles.message}>
          <Text style={styles.helperText}>{error}</Text>
        </View>)}
    </View>
  );
}
export default Input;