import { createSlice } from '@reduxjs/toolkit';
import { URL_API_DATA } from '../../constants/firebase';
import { Alert } from 'react-native';
const initialState = {
  items: [],
  selected: null,
};

const itemSlice = createSlice({
  name: 'item',
  initialState,
  reducers: {
    selectedItem: (state, action) => {
      state.selected = action.payload;
    },
    get_item: (state, action) => {
      state.items = action.payload;
    },
  },
});
export const { selectedItem, get_item } = itemSlice.actions;

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

    dispatch(get_item(result));
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
      dispatch(getItem());
    }
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
        [type]: content,
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
    dispatch(getItem());
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
        dispatch(getItem());
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export default itemSlice.reducer;
