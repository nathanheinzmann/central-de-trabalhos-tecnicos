const formatData = (apiArticle: any) => {
  const {
    id,
    acf,
  } = apiArticle;

  return {
    course: acf.course || '',
    id,
    infos: [acf.course, acf.teacher, acf.type, acf.year],
    keywords: acf.keywords || [],
    student: acf.student || '',
    teacher: acf.teacher || '',
    title: acf.title || '',
    workType: acf.type || '',
    year: acf.year || '',
  };
}

export default formatData;