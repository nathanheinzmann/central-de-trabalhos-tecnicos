import translate from "../translate";

const formatData = (apiArticle: any) => {
  const { id, acf } = apiArticle;

  const {
    course,
    teacher,
    type,
    year,
    keywords,
    student,
    knowledge,
    title,
    file,
  } = acf;

  const infos = [
    {
      info: translate("workType"),
      value: type,
    },
    {
      info: translate("limits"),
      value: year,
    },
    {
      info: translate("course"),
      value: course,
    },
    {
      info: translate("teacher"),
      value: teacher,
    },
    {
      info: translate("knowledge"),
      value: knowledge,
    },
  ];

  const allKeywords = keywords.length && keywords.map((keyword: any) => keyword.name);

  return {
    course: course || '',
    file: file || '',
    id,
    infos: infos,
    keywords: allKeywords || [],
    knowledge: knowledge || '',
    student: student || '',
    teacher: teacher || '',
    title: title || '',
    workType: type || '',
    year: year || '',
  };
}

export default formatData;