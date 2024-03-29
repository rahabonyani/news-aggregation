import axios from "axios";
import type { AllFilters } from "models/filters";
import type { NewsApi, AllArticles } from "models/news";
import type { UseQueryOptions } from "react-query";
import { useQuery } from "react-query";
import { reformatNewsApiData } from "utils/reformatData";

interface Articles {
  articles: NewsApi[];
}

export async function getNewsApiData(pageNumber: number, filters: AllFilters) {
  try {
    const { data } = await axios.get<Articles>(
      `${process.env.REACT_APP_NEWSAPI_URL}q=${
        filters.query ? filters.query : "world"
      }${filters.from_date && `&from=${filters.from_date}`}${
        filters.to_date && `&to=${filters.to_date}`
      }&pageSize=10&page=${pageNumber}&apiKey=${
        process.env.REACT_APP_NEWSAPI_API_KEY
      }`
    );
    const finalData = reformatNewsApiData(data.articles);
    return finalData;
  } catch (error) {}
}

export function useGetNewsApiData(
  pageNumber: number,
  filters: AllFilters,
  options?: UseQueryOptions<
    AllArticles[] | undefined,
    AllArticles,
    AllArticles[],
    string[]
  >
) {
  return useQuery(
    ["articles", "newsApi"],
    () => getNewsApiData(pageNumber, filters),
    options
  );
}
