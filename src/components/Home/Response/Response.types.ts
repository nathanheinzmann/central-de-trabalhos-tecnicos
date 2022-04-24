type Post = {
  id: number;
  infos: string[];
  student: string;
  title: string;
};

export type ResponseTypes = {
  articles: Post[],
  content: {
    title: string,
    options: string[],
  }
};