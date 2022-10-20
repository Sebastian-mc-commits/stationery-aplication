import { categoryTypes } from '../types';
import { URL_API_DATA } from '../../constants/firebase';
import {Alert} from "react-native";

const { SELECTED_CATEGORY, GET_CATEGORY, UPDATE_CATEGORY } = categoryTypes;

export const selectCategory = (id) => ({
  type: SELECTED_CATEGORY,
  id,
});

export const getCategory = () => {

  return async (dispatch) => {

    const response = await fetch(`${URL_API_DATA}/category.json`, {

      method: "GET",
      headers: {

        "Content-Type": "aplication/json"
      }
    })

    const data = await response.json();

    const result = Object.keys(data).map(key => {

      return {
        ...data[key], 
        id: key
        }}
      
      );

    dispatch({
      type: GET_CATEGORY,
      result,
      response: response.ok
    })
  }
}

export const updateCategory = (key, type, content) => {
  return async (dispatch) => {

    const response = await fetch(`${URL_API_DATA}/category/${key.id}.json`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        [type]: content
      }),
    });

    if (response.ok) {
      Alert.alert(
        'Estado de la categoria',
        `${key.name} ha sido actualizado setisfactoriamente`,
        [
          {
            text: 'Ok',
          },
        ]
      );
    }

    const result = await response.json();

    dispatch({
      type: UPDATE_CATEGORY,
      result,
    });
  };
};
