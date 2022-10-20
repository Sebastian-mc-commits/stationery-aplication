import {validateInput} from "./validateInput";
import {formTypes} from "./form.types";

const { UPDATE_FORM } = formTypes;

export const onInputChange = (name, value, dispatch, fomrState) => {

  const {hasError, error} = validateInput(name, value);
  let isFormValid = true;

  for (const key in fomrState) {
    const item = fomrState[key];
    if (key !== name && hasError && !item.optional){
      isFormValid = false;
      break;
    } else if (key !== name && item.hasError && !item.optional){
      isFormValid = false;
    }
  }

  dispatch({
    type: UPDATE_FORM,
    data: {
      name,
      value,
      hasError,
      error,
      touched: true,
      isFormValid
    }
  })
}