import {HistoryTypes} from "../types";

const { ADD_COMMIT, DELETE_COMMIT, DELETE_ALL_COMMITS } = HistoryTypes;

const initialState = {

  history: []
}

const historyReducer = (state = initialState, action) => {

  switch (action.type) {

    case ADD_COMMIT:

      return {

        history: [...state.history, action.commit]
      }
    
    case DELETE_COMMIT:
      return {

        ...state,
        history: state.history.filter(historyItem => historyItem.id != action.id)
      }

    case DELETE_ALL_COMMITS:
      return {

        history: []
      }
    default: 
      return state
  }
}
export default historyReducer;