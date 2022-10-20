import { customModalTypes } from '../types';

const { ACTIVE_MODAL } = customModalTypes;

const initialState = {
  content: false,
};

const customModalReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIVE_MODAL: {
      return {
        content: action.data,
      };
    }
    default:
      return state;
  }
};

export default customModalReducer;
