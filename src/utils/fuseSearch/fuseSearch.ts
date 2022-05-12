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
    knowledge,
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
    filteredArticles = fuseArticles.map(({ item }) => item);
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
    filteredArticles = fuseArticles.map(({ item }) => item);
  };

  //search by teacher
  if (teacher) {
    const fuse = new Fuse(filteredArticles, {
      threshold: 0,
      includeScore: true,
      ignoreLocation: true,
      keys: ['teacher'],
    });
    const fuseArticles = fuse.search(teacher);
    filteredArticles = fuseArticles.map(({ item }) => item);
  };

  //search by course
  if (course !== 'TODOS') {
    filteredArticles = filteredArticles.filter(
      (article: any) => article.course === course
    );
  };

  //search by workType
  if (workType !== 'TODOS') {
    filteredArticles = filteredArticles.filter(
      (article: any) => article.workType === workType
    );
  };

  //search by knowledge
  if (knowledge) {
    const fuse = new Fuse(filteredArticles, {
      threshold: 0,
      includeScore: true,
      ignoreLocation: true,
      keys: ['knowledge'],
    });
    const fuseArticles = fuse.search(knowledge);
    filteredArticles = fuseArticles.map(({ item }) => item);
  };

  //search by keywords
  if (inputs.keywords) {
    const keywords = inputs.keywords.split(',');
    keywords.forEach((keyword: string) => {
      const fuse = new Fuse(filteredArticles, {
        threshold: 0,
        includeScore: true,
        ignoreLocation: true,
        keys: ['keywords'],
      });
      const fuseArticles = fuse.search(keyword);
      filteredArticles = fuseArticles.map(({ item }) => item);
    }
    );
  }

  //search by years limits
  filteredArticles = filteredArticles.filter(
    (article: any) => article.year >= limits[0] && article.year <= limits[1]
  );

  setAllArticles(filteredArticles);
};

export default fuseSearch;