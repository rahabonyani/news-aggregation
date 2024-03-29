import axios from "axios";
import type { AllFilters } from "models/filters";
import type { OpenNews, AllArticles, ArticlesWithPages } from "models/news";
import type { UseQueryOptions } from "react-query";
import { useQuery } from "react-query";
import { reformatOpenNewsData } from "utils/reformatData";

interface articles {
  response: { results: OpenNews[]; pages: number };
}

export async function getOpenNewsData(pageNumber: number, filters: AllFilters) {
  try {
    const { data } = await axios.get<articles>(
      `${process.env.REACT_APP_OPENNEWS_URL}q=${filters.query}${
        filters.from_date && `&from-date=${filters.from_date}`
      }${
        filters.to_date && `&to-date=${filters.to_date}`
      }&page=${pageNumber}&api-key=${process.env.REACT_APP_OPENNEWS_API_KEY}`
    );
    const finalData = reformatOpenNewsData(data.response.results);
    return { data: finalData, pages: data.response.pages };
  } catch (error) {}
}

export function useGetOpenNewsData(
  pageNumber: number,
  filters: AllFilters,
  options?: UseQueryOptions<
    ArticlesWithPages | undefined,
    AllArticles,
    ArticlesWithPages,
    string[]
  >
) {
  return useQuery(
    ["articles", "openNews"],
    () => getOpenNewsData(pageNumber, filters),
    {
      ...options,
    }
  );
}
