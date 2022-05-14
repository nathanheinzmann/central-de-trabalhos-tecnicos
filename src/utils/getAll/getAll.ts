import formatData from "../formatData";

const getAll = async (url: string, option?: string) => {
  if (option === 'paths') {
    const response = await fetch(url);
    const data = await response.json();
    const totalPosts = Number(response.headers.get('X-WP-Total'));
    const paths = data.map((item: any) => ({ params: { id: String(item.id) } }));

    while (totalPosts > paths.length) {
      const newResponse = await fetch(`${url}&page=${(paths.length / 10) + 1}`);
      const newData = await newResponse.json();
      const newPaths = newData.map((item: any) => ({ params: { id: String(item.id) } }));
      paths.push(...newPaths);
    }

    return paths;
  }

  if (option === 'article') {
    const response = await fetch(url);
    const article = await response.json();
    const modelArticle = {
      id: url.substring(url.length - 2),
      acf: article.acf
    };
    const formattedArticle = formatData(modelArticle);

    return formattedArticle;
  }

  const response = await fetch(url);
  const data = await response.json();
  const totalPostsData = await fetch('https://ctt-next-ts.tk/wp-json/wp/v2/academic-works?_fields=id');
  const totalPosts = Number(totalPostsData.headers.get('X-WP-Total'));
  const articles = data.map((article: any) => formatData(article));

  while (totalPosts > articles.length) {
    const newResponse = await fetch(`${url}?page=${(articles.length / 10) + 1}`);
    const newData = await newResponse.json();
    const newArticles = newData.map((article: any) => formatData(article));
    articles.push(...newArticles);
  };

  return articles;
};

export default getAll;