const getFilterOptions = async () => {
  const data = await fetch('https://ctt-next-ts.tk/wp-json/wp/v2/academic-works?_fields=acf');
  const json = await data.json();
  const labels = ['Nome do Autor',
    'Nome do Orientador',
    'Palavra Chave',
    'Área de Estudo',

  ];

  const selectOptions = [
    {
      label: 'Curso',
      options: json.map((item: any) => item.acf.course),
    },
    {
      label: 'Professor',
      options: json.map((item: any) => item.acf.teacher)
    }
  ];

  return {
    selectOptions,
    labels,
  };
}

export default getFilterOptions;