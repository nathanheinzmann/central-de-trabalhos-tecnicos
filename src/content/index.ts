import dashboard from './dashboard';

const contents = {
  dashboard,
};

const getContent = (contentType: any) => contents[contentType];

export default getContent;
