import {itemTypes} from "../types";

const { SELECTED_ITEM, GET_ITEM } = itemTypes;

const initialState = {

  items: [],
  selected: null
}

const itemReducer = (state = initialState, action) => {

  switch (action.type) {

    case GET_ITEM: {
      return {
        ...state,
        items: action.result
      }
    }

    case SELECTED_ITEM: 
      return {

        ...state,
        selected: action.id
      }
    default: 
      return state;
  }
}

export default itemReducer;