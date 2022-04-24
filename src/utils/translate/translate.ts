const translate = (text: string) => {
  const dictionary = {
    course: "Curso",
    teacher: "Professor",
    title: "Título",
    student: "Autor",
    limits: "Período",
    workType: "Tipo de trabalho",
  };

  return dictionary[text as keyof typeof dictionary];
};

export default translate;