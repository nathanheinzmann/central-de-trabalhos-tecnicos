import { InputsActionTypes } from './inputs.types';

const addFilter = (inputUser: string | number[], type: string) => {
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
