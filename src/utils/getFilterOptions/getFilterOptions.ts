type ApiType = {
  acf: {
    course: string,
    teacher: string,
    type: string,
  };
}[];

const getFilterOptions = async () => {
  const data = await fetch('https://ctt-next-ts.tk/wp-json/wp/v2/academic-works?_fields=acf');
  const json: ApiType = await data.json();

  const apiOptions = [
    {
      type: 'course',
      options: json.map(({ acf }) => acf.course)
    },
    {
      type: 'teacher',
      options: json.map(({ acf }) => acf.teacher)
    },
    {
      type: 'workType',
      options: json.map(({ acf }) => acf.type)
    }
  ]

  const concatOptions = apiOptions.map(({ type, options }) => ({ type, options: ['TODOS'].concat(options) }));
  const selectOptions = concatOptions.map(({ type, options }) => ({ type, options: [...new Set(options)] }));

  return selectOptions;
};

export default getFilterOptions;