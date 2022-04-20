import { UserInputDataProps } from '@src/contexts';
import Fuse from 'fuse.js';

type Props = {
  context: UserInputDataProps;
  articles: any;
  setAllArticles: (articles: any) => void;
};

const fuseSearch = async ({ articles, setAllArticles, context }: Props) => {
  let filteredArticles = articles;
  const { inputLimits, inputTitle, inputStudent } = context;

  //search by title
  if (inputTitle) {
    const fuse = new Fuse(articles, {
      threshold: 0,
      includeScore: true,
      ignoreLocation: true,
      keys: ['title'],
    });
    const fuseArticles = fuse.search(inputTitle);
    const allFuseArticles = fuseArticles.map(({ item }) => item);
    filteredArticles = allFuseArticles;
  }

  //search by student
  if (inputStudent) {
    const fuse = new Fuse(filteredArticles, {
      threshold: 0,
      includeScore: true,
      ignoreLocation: true,
      keys: ['student'],
    });
    const fuseArticles = fuse.search(inputStudent);
    const allFuseArticles = fuseArticles.map(({ item }) => item);
    filteredArticles = allFuseArticles;
  }

  //search by years limits
  filteredArticles = filteredArticles.filter(
    (article: any) => article.year >= inputLimits[0] && article.year <= inputLimits[1]
  );

  setAllArticles(filteredArticles);
};

export default fuseSearch;