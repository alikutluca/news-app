import { categories } from "../constants";
import fetchNews from "../lib/fetchNews";

async function HomePage() {
  const news: NewsResponse = await fetchNews(categories.join(","));

  return <div className="">{/* Newslist news */}</div>;
}

export default HomePage;

// for creating schema example import
//stepzen import curl "http://api.mediastack.com/v1/news?access_key=66c655c23f321987b9f616b2f8783f12&countries=us%2Cgb&limit=100&offset=0&sort=published_desc"
