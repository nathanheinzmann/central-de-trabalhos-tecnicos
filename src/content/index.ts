import homeContent from './home';
import dictionaryContent from './dictionary';

type contentProps = keyof typeof contents;

const contents = {
  homeContent,
  dictionaryContent,
};

const getContent = (contentType: contentProps) => contents[contentType];

export default getContent;
