import type { NewYorkArticles, NewsApi, OpenNews } from "models/news";
import uuid from "react-uuid";

export const reformatNewYorkTimesData = (data: NewYorkArticles[]) => {
  return data.map((item) => ({
    title: item.headline.main,
    description: item.abstract,
    author: item.byline.original,
    pubDate: item.pub_date.split("T")[0],
    imageUrl: `https://www.nytimes.com/${item.multimedia[0]?.url}`,
    id: item._id,
  }));
};

export const reformatNewsApiData = (data: NewsApi[]) => {
  return data.map((item) => ({
    title: item.title,
    description: item.description,
    author: item.author,
    pubDate: item.publishedAt.split("T")[0],
    imageUrl: item.urlToImage,
    id: uuid(),
  }));
};

export const reformatOpenNewsData = (data: OpenNews[]) => {
  return data.map((item) => ({
    title: item.webTitle,
    description: item.fields.trailText,
    author: item?.author,
    pubDate: item.webPublicationDate.split("T")[0],
    imageUrl: item?.elements && item?.elements[0].assets[0].file,
    id: item.id,
  }));
};
