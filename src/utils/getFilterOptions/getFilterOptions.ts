const getFilterOptions = async () => {
  const data = await fetch('https://ctt-next-ts.tk/wp-json/wp/v2/academic-works?_fields=acf');
  const json = await data.json();

  const selectOptions = [
    {
      type: 'course',
      options: json.map((item: any) => item.acf.course),
    },
    {
      type: 'teacher',
      options: json.map((item: any) => item.acf.teacher)
    }
  ];

  return {
    selectOptions: selectOptions.map(
      ({ type, options }) => ({
        type, options: ['TODOS'].concat(options.filter((item: any) => item))
      })
    ),
  };
};

export default getFilterOptions;