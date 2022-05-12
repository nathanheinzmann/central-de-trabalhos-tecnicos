export enum InputsActionTypes {
  ADD_FILTER = 'ADD_FILTER',
  CLEAR_FILTER = 'CLEAR_FILTER',
  REMOVE_FILTER = 'REMOVE_FILTER',
}

export type InputsTypes = keyof InputsState;

export type InputsAction = {
  type: InputsActionTypes,
  payload: {
    inputUser: string | number[],
    type: InputsTypes,
  }
}

export type InputsState = {
  course: string,
  keywords: string,
  knowledge: string,
  limits: number[],
  student: string,
  teacher: string,
  title: string,
  workType: string,
};
