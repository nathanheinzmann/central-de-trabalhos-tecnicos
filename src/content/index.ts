import homeContent from './home';

const contents = {
  homeContent,
};

const getContent = (contentType: string) => contents[contentType as keyof typeof contents];

export default getContent;
