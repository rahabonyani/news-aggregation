import { clearArticles, updateArticles } from "actions/news";
import { useGetNewYorkTimesData } from "api/queries/news/useGetDataFromNewYorkTimes";
import { useGetNewsApiData } from "api/queries/news/useGetDataFromNewsApi";
import { useGetOpenNewsData } from "api/queries/news/useGetDataFromOpenNews";
import Pagination from "components/molecules/pagination";
import ShowNews from "components/organisms/pages/news";
import Layout from "components/template/layout";
import { RootState } from "core/ReduxProvider/store";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const News = () => {
  const dispatch = useDispatch();

  const [activePage, setActivePage] = useState(1);

  const filters = useSelector((state: RootState) => state.filters);
  const articles = useSelector((state: RootState) => state.articles.articles);

  const {
    data: newYorkData,
    isLoading: newYorkLoading,
    refetch: refetchNewYorkTimes,
  } = useGetNewYorkTimesData(activePage, filters);
  const {
    data: newsApiData,
    isLoading: newsApiLoading,
    refetch: refetchNewsApi,
  } = useGetNewsApiData(activePage, filters);
  const {
    data: openNewsData,
    isLoading: openNewsLoading,
    refetch: refetchOpenNews,
  } = useGetOpenNewsData(activePage, filters);

  const handleChangePage = (selectedItem: { selected: number }) => {
    setActivePage(selectedItem.selected + 1);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    dispatch(clearArticles());
    if (newYorkData) {
      dispatch(updateArticles(newYorkData));
    }
    if (newsApiData) {
      dispatch(updateArticles(newsApiData));
    }
    if (openNewsData) {
      dispatch(updateArticles(openNewsData.data));
    }
  }, [newYorkData, newsApiData, openNewsData]);

  useEffect(() => {
    refetchNewsApi();
    refetchOpenNews();
    refetchNewYorkTimes();
  }, [activePage, filters]);

  return (
    <Layout>
      <ShowNews
        articles={articles}
        loading={newYorkLoading && newsApiLoading && openNewsLoading}
      />

      {!newYorkLoading || !newsApiLoading || !openNewsLoading ? (
        <Pagination
          totalCount={openNewsData?.pages! < 10 ? openNewsData?.pages : 10}
          onChange={handleChangePage}
          currentPage={activePage - 1}
        />
      ) : (
        ""
      )}
    </Layout>
  );
};

export default News;
