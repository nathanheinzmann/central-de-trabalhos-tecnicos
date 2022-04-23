import { InputsActionTypes, InputsTypes } from './inputs.types';

const addFilter = (inputUser: string | number[], type: InputsTypes) => {
  return {
    type: InputsActionTypes.ADD_FILTER,
    payload: {
      inputUser,
      type,
    },
  };
};

const clearFilter = () => {
  return {
    type: InputsActionTypes.CLEAR_FILTER,
  };
};

const removeFilter = (type: InputsTypes) => {
  return {
    type: InputsActionTypes.REMOVE_FILTER,
    payload: {
      type,
    },
  };
};

const productActions = {
  addFilter,
  clearFilter,
  removeFilter,
};

export default productActions;
