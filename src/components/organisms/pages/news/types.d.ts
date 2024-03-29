import type { AllArticles } from "models/news";

export interface ShowNewsProps {
  articles: AllArticles[];
  loading: boolean;
}
