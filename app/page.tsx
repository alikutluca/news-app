import { categories } from "../constants";
import fetchNews from "../lib/fetchNews";

async function HomePage() {
  const news: NewsResponse = await fetchNews(categories.join(","));

  return <div className="">{/* Newslist news */}</div>;
}

export default HomePage;
