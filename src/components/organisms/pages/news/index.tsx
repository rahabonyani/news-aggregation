import { Flex } from "@chakra-ui/react";
import LoadingCircular from "components/atoms/loadingCircular";
import NewsBox from "components/molecules/newsBox";
import type { ShowNewsProps } from "./types";

const ShowNews = ({ articles, loading }: ShowNewsProps) => {
  return (
    <Flex gap={3} flexWrap="wrap">
      {loading ? (
        <LoadingCircular />
      ) : (
        articles.map((article) => (
          <NewsBox
            title={article.title}
            description={article.description}
            author={article.author}
            pubDate={article.pubDate}
            imageUrl={article.imageUrl}
            key={article.id}
          />
        ))
      )}
    </Flex>
  );
};

export default ShowNews;
