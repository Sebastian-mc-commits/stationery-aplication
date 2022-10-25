import { createSlice } from '@reduxjs/toolkit';
import { URL_API_DATA } from '../../constants/firebase';
import { Alert } from 'react-native';

const initialState = {
  list: [],
  selected: null,
};

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    selectCategory: (state, action) => {
      state.selected = action.payload;
    },
    setCategory: (state, action) => {
      state.list = action.payload;
    },
  },
});

export const { selectCategory, setCategory } = categorySlice.actions;

export const getCategory = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${URL_API_DATA}/category.json`, {
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

      dispatch(setCategory(result));
    } catch (e) {
      console.log(e.error);
    }
  };
};

export const updateCategory = (key, type, content) => {
  return async (dispatch) => {
    const response = await fetch(`${URL_API_DATA}/category/${key.id}.json`, {
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

    dispatch(getCategory());
  };
};

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
        dispatch(getCategory());
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export default categorySlice.reducer;
