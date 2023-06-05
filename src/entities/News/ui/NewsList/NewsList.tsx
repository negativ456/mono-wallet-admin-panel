import cls from "./NewsList.module.scss";
import { useTranslation } from "react-i18next";
import classNames from "classnames";
import { VStack } from "../../../../shared/ui/Stack";
import { NewsItem } from "../NewsItem/NewsItem";
import { useSelector } from "react-redux";
import { getNews } from "../../model/selectors/selectors";

interface NewsListProps {
  className?: string;
  // news: NewsItemType[];
}

export const NewsList = ({ className }: NewsListProps) => {
  const { t } = useTranslation();
  const news = useSelector(getNews);
  return (
    <VStack gap={"20"} className={classNames(cls.NewsList, className)}>
      {news.map((item, index) => (
        <NewsItem item={item} key={index} />
      ))}
    </VStack>
  );
};
