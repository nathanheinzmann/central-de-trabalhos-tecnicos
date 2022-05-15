type Post = {
  id: number;
  infos: string[];
  student: string;
  title: string;
};

export type ResponseTypes = {
  allArticles: Post[],
  showResponse: boolean,
  content: {
    title: string,
    options: string[],
  }
};