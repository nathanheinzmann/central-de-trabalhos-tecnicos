type Post = {
  id: number;
  infos: string[];
  student: string;
  title: string;
};

export type ResponseTypes = {
  articles: Post[],
  dashboardContent: {
    buttonContent: string,
    mainTitle: string,
    notFoundContent: {
      title: string,
      options: string[],
    }
    placeholder: string,
  }
};