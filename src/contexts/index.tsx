import React, { createContext, useState } from 'react';

export type UserInputData = {
  inputLimits: number[];
  inputStudent: string;
  inputTitle: string;
  setInputLimits(value: any): void;
  setInputStudent(value: any): void;
  setInputTitle(value: any): void;
  handleSearch(): void;
  clearAllFilters(): void;
}

const UserInputContext = createContext<UserInputData>({} as UserInputData);

export const UserInputProvider: React.FC = ({ children }) => {
  const [inputTitle, setInputTitle] = useState<string>("");
  const [inputStudent, setInputStudent] = useState<string>("");
  const [inputLimits, setInputLimits] = useState<number[]>([1995, new Date().getFullYear()]);
  
  const handleSearch = () => null;
  
  const clearAllFilters = () => {
    setInputLimits([1995, new Date().getFullYear()]);
    setInputStudent("");
    setInputTitle("");
  }

  const value = {
    handleSearch,
    inputLimits,
    inputStudent,
    inputTitle,
    setInputLimits,
    setInputStudent,
    setInputTitle,
    clearAllFilters,
  };

  return (
    <UserInputContext.Provider value={value}>
      {children}
    </UserInputContext.Provider>
  );
};

export default UserInputContext;