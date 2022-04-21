import { InputsAction, InputsActionTypes, InputsState } from './inputs.types';

const initialState: InputsState = {
  title: '',
  student: '',
  teacher: '',
  course: '',
  limits: [1995, new Date().getFullYear()],
};

const InputsReducer = (state = initialState, action: InputsAction) => {
  switch (action.type) {
    case InputsActionTypes.ADD_FILTER: {
      const { inputUser, type } = action.payload;
      return {
        ...state,
        [type as keyof typeof inputUser]: inputUser,
      };
    }
    case InputsActionTypes.CLEAR_FILTER: {
      return initialState;
    }
    default: {
      return state;
    }
  }
};

export default InputsReducer;
