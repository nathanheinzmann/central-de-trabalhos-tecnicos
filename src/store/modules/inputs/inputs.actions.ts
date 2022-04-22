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

const productActions = {
  addFilter,
  clearFilter,
};

export default productActions;
