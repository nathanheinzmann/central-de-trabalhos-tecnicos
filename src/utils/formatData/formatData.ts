const formatData = (apiArticle) => {
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
    type: acf.type || '',
    year: acf.year || '',
  };
}

export default formatData;