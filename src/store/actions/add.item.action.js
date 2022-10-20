import { URL_API_DATA } from '../../constants/firebase';
import { dataCategoryItemTypes } from '../types/data.category.items.types';
import { Alert } from 'react-native';

const {
  ADD_CATEGORY,
  ADD_ITEM,
  UPDATE_CATEGORY_ITEM,
  UPDATE_ITEM,
  DELETE_ITEM,
  DELETE_CATEGORY_ITEM,
} = dataCategoryItemTypes;

export const addCategory = (name, image, background) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${URL_API_DATA}/category.json`, {
        method: 'POST',
        headers: {
          'Content-Type': 'aplication/json',
        },
        body: JSON.stringify({
          date: Date.now(),
          name,
          image,
          background,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        Alert.alert(
          'Estado de la categoria',
          `${name} ha sido creado satisfactoriamente`,
          [
            {
              text: 'Ok',
            },
          ]
        );
      }

      dispatch({
        type: ADD_CATEGORY,
        result,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const addItem = (
  key,
  name,
  price,
  description,
  quantity,
  background,
  color
) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${URL_API_DATA}/items.json`, {
        method: 'POST',
        headers: {
          'content-Type': 'aplication/json',
        },
        body: JSON.stringify({
          date: Date.now(),
          name,
          price,
          description,
          quantity,
          background,
          color,
          key,
        }),
      });
      const result = await response.json();

      if (response.ok) {
        Alert.alert(
          'Estado del item',
          `${name} ha sido creado satisfactoriamente`,
          [
            {
              text: 'Ok',
            },
          ]
        );
      }
      dispatch({
        type: ADD_ITEM,
        result: result,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
