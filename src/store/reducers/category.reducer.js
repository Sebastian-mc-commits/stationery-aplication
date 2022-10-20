import { Category } from "../../constants/data";
import { categoryTypes } from "../types";

const { SELECTED_CATEGORY, GET_CATEGORY } = categoryTypes;

const initialState = {

  list: [],
  selected: null,
}

const categoryReducer = (state = initialState, action) => {

  switch (action.type){

    case GET_CATEGORY:
      return {
        ...state,
        list: action.result
      }

    case SELECTED_CATEGORY:

        return {

          ...state,
          selected: action.id
        }
    default:
      return state;
  }
}
export default categoryReducer;