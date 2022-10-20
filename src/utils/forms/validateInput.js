const minNameCategoryLength = 4;
const minNamePriceLength = 2;
const minNameQuantityLength = 1;

export const validateInput = (name, value) => {
  let hasError = false;
  let error = '';
  switch (name) {
    case "name":
      if (value?.trim() === '') {
        hasError = true;
        error = "El nombre de la categoria es requerido";
      } else if (value.length < minNameCategoryLength) {
        hasError = true;
        error = `El campo debe tener al menos ${minNameCategoryLength} caracteres`;
      } else {
        hasError = false;
        error = '';
      }
      break;

    case "background":
      if (value?.trim() === '') {
        hasError = true;
        error = `El color del fondo es requerido`;
      } else if (value.length < minNameCategoryLength) {
        hasError = true;
        error = `El campo debe tener al menos ${minNameCategoryLength} caracteres`;
      } else {
        hasError = false;
        error = '';
      }
    break;

    case "price":
      if (value?.trim() === '') {
        hasError = true;
        error = `El precio del item es requerido`;
      } else if (value.length < minNamePriceLength) {
        hasError = true;
        error = `El campo debe tener al menos ${minNamePriceLength} caracteres`;
      } else {
        hasError = false;
        error = '';
      }
    break;

    case "quantity":
      if (value?.trim() === '') {
        hasError = true;
        error = `La cantidad del item es requerida`;
      } else if (value.length < minNameQuantityLength) {
        hasError = true;
        error = `El campo debe tener al menos ${minNameQuantityLength} caracteres`;
      } else {
        hasError = false;
        error = '';
      }
    break;

    default:
      break;
  }
  return {hasError, error};
};
