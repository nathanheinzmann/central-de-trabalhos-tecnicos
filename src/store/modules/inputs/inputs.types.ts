export enum InputsActionTypes {
  ADD_FILTER = 'ADD_FILTER',
  CLEAR_FILTER = 'CLEAR_FILTER',
}

export type InputsAction = {
  type: InputsActionTypes,
  payload: {
    inputUser: string | number[],
    type: string,
  }
}

export type InputsState = {
  title: string,
  student: string,
  course: string,
  teacher: string,
  limits: number[],
};