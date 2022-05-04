import { InputsAction, InputsActionTypes, InputsState, InputsTypes } from './inputs.types';

const initialState: InputsState = {
  course: 'TODOS',
  knowledge: '',
  limits: [1995, new Date().getFullYear()],
  student: '',
  teacher: '',
  title: '',
  workType: 'TODOS',
};

const InputsReducer = (state = initialState, action: InputsAction) => {
  switch (action.type) {
    case InputsActionTypes.ADD_FILTER: {
      const { inputUser, type } = action.payload;
      return {
        ...state,
        [type as InputsTypes]: inputUser,
      };
    }
    case InputsActionTypes.REMOVE_FILTER: {
      const { type } = action.payload;
      return {
        ...state,
        [type as InputsTypes]: initialState[type],
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
