import {formTypes} from "./form.types";

const {UPDATE_FORM, MODAL_VISIBLE} = formTypes;

const formReducer = (state, action) => {
  switch (action.type){
    case UPDATE_FORM:
      const { name, value, touched, hasError, error, isFormValid } = action.data;
      return {

        ...state,
        [name]: {
          ...state[name],
          name,
          value,
          touched,
          hasError,
          error
        },
        isFormValid
      }

    case "ADD_CATEGORY":
      return {
        ...state,
        response
      }
    default: 
      return state
  }
}
export default formReducer;