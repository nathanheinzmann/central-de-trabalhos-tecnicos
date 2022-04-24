const translate = (text: string) => {
  const dictionary = {
    course: "Curso",
    teacher: "Professor",
    title: "Título",
    student: "Autor",
    limits: "Período",
  };

  return dictionary[text as keyof typeof dictionary];
};

export default translate;