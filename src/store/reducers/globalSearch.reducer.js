import {globalSearchTypes} from "../types";

const { SELECTED, SCREEN } = globalSearchTypes;

const initialState = {

  selectedSearch: false
}

const globalSearchReducer = (state = initialState, action) => {

  switch (action.type) {

    case SELECTED: {
      return {
        selectedSearch: action.data
      }
    }

    case SCREEN: 
      return {

        ...state,
        selected: action.selectedScreen
      }
    default: 
      return state;
  }
}

export default globalSearchReducer;