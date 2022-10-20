import { URL_API_DATA } from '../../constants/firebase';
import { itemTypes } from '../types';
import { Alert } from 'react-native';

const { SELECTED_ITEM, GET_ITEM, DELETE_ITEMS, UPDATE_ITEM } = itemTypes;

export const selectItem = (id) => ({
  type: SELECTED_ITEM,
  id,
});

export const getItem = () => {
  return async (dispatch) => {
    const response = await fetch(`${URL_API_DATA}/items.json`, {
      method: 'GET',
      headers: {
        'Content-Type': 'aplication/json',
      },
    });

    const data = await response.json();

    const result = Object.keys(data).map((key) => {
      return {
        ...data[key],
        id: key,
      };
    });

    dispatch({
      type: GET_ITEM,
      result,
    });
  };
};

export const deleteItem = (item) => {
  return async (dispatch) => {
    const response = await fetch(`${URL_API_DATA}/items/${item.id}.json`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const result = await response.json();

    if (response.ok) {
      Alert.alert(
        'Estado del item',
        `${item.name} ha sido eliminado satisfactoriamente`,
        [
          {
            text: 'Ok',
          },
        ]
      );
    }

    dispatch({
      type: DELETE_ITEMS,
      result,
    });
  };
};

export const updateItem = (key, type, content) => {
  return async (dispatch) => {

    const response = await fetch(`${URL_API_DATA}/items/${key.id}.json`, {
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
        'Estado del item',
        `${key.name} ha sido actualizado setisfactoriamente`,
        [
          {
            text: 'Ok',
          },
        ]
      );
    }

    const result = await response.json();
    alert('response' + reponse.ok);

    dispatch({
      type: UPDATE_ITEM,
      result,
    });
  };
};
