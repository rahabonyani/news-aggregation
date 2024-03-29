import axios from "axios";
import type { AllFilters } from "models/filters";
import type { NewYorkArticles, AllArticles } from "models/news";
import type { UseQueryOptions } from "react-query";
import { useQuery } from "react-query";
import { reformatNewYorkTimesData } from "utils/reformatData";

interface articles {
  response: { docs: NewYorkArticles[] };
}

export async function getNewYorkTimesData(
  pageNumber: number,
  filters: AllFilters
) {
  try {
    const { data } = await axios.get<articles>(
      `${process.env.REACT_APP_NEWYORKTIMES_URL}q=${filters.query}${
        filters.from_date && `&begin_date=${filters.from_date}`
      }${
        filters.to_date && `&end_date=${filters.to_date}`
      }&page=${pageNumber}&api-key=${
        process.env.REACT_APP_NEWYORKTIMES_API_KEY
      }`
    );
    const finalData = reformatNewYorkTimesData(data.response.docs);
    return finalData;
  } catch (error) {}
}

export function useGetNewYorkTimesData(
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
    ["articles", "newYorkTimes"],
    () => getNewYorkTimesData(pageNumber, filters),
    options
  );
}
