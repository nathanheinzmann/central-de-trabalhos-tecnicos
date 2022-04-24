import Fuse from 'fuse.js';
import { InputsState } from '@src/store/modules/inputs/inputs.types';

type Props = {
  inputs: InputsState;
  articles: any;
  setAllArticles: (articles: any) => void;
};

const fuseSearch = async ({ articles, setAllArticles, inputs }: Props) => {
  let filteredArticles = articles;
  const {
    course,
    limits,
    student,
    teacher,
    title,
    workType,
  } = inputs;

  //search by title
  if (title) {
    const fuse = new Fuse(articles, {
      threshold: 0,
      includeScore: true,
      ignoreLocation: true,
      keys: ['title'],
    });
    const fuseArticles = fuse.search(title);
    const allFuseArticles = fuseArticles.map(({ item }) => item);
    filteredArticles = allFuseArticles;
  };

  //search by student
  if (student) {
    const fuse = new Fuse(filteredArticles, {
      threshold: 0,
      includeScore: true,
      ignoreLocation: true,
      keys: ['student'],
    });
    const fuseArticles = fuse.search(student);
    const allFuseArticles = fuseArticles.map(({ item }) => item);
    filteredArticles = allFuseArticles;
  };

  //search by course
  if (course !== 'TODOS') {
    filteredArticles = filteredArticles.filter(
      (article: any) => article.course === course
    );
  };

  //search by teacher
  if (teacher !== 'TODOS') {
    filteredArticles = filteredArticles.filter(
      (article: any) => article.teacher === teacher
    );
  };

  //search by workType
  if (workType !== 'TODOS') {
    filteredArticles = filteredArticles.filter(
      (article: any) => article.workType === workType
    );
  };

  //search by years limits
  filteredArticles = filteredArticles.filter(
    (article: any) => article.year >= limits[0] && article.year <= limits[1]
  );

  setAllArticles(filteredArticles);
};

export default fuseSearch;