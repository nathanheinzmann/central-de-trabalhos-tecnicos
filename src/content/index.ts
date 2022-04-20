import dashboard from './dashboard';

const contents = {
  dashboard,
};

const getContent = (contentType: string) => contents[contentType as keyof typeof contents];

export default getContent;
