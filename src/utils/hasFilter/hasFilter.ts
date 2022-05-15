const hasFilter = (inputs: any) => {
  return Object.values(inputs).some((value: any) =>
    value !== '' && value !== 'TODOS' && value.toString() !== [1995, new Date().getFullYear()].toString()
  );
};

export default hasFilter;