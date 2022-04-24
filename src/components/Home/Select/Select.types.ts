import { InputsState } from "@src/store/modules/inputs/inputs.types";

export type Selected = {
  callOnChange: boolean;
  value: string;
};

export type SelectProps = {
  defaultOption?: number;
  disabled?: boolean;
  type: keyof InputsState;
  onChange?: (value: string) => void;
  options?: Array<string>;
};

export type FieldProps = {
  disabled?: boolean;
  isOpen?: boolean;
};

export type OptionsProps = {
  show?: boolean;
  label?: string;
};
