import cls from "./InfoBlockList.module.scss";
import { useTranslation } from "react-i18next";
import classNames from "classnames";
import { VStack } from "../../Stack";
import { NewsItem } from "../../../../entities/News/ui/NewsItem/NewsItem";
import { InfoBlock } from "../InfoBlock/InfoBlock";

interface InfoBlockListProps {
  className?: string;
  items: InfoBlockItem[];
  onClose?: () => void;
  onEdit?: (id: number) => void;
}

export interface InfoBlockItem {
  id: number;
  subTitle: string;
  title: string;
}

export const InfoBlockList = ({
  className,
  items,
  onEdit,
  onClose,
}: InfoBlockListProps) => {
  const { t } = useTranslation();
  return (
    <VStack gap={"20"} className={classNames(cls.NewsList, className)}>
      {items.map((item, index) => (
        <InfoBlock
          key={index}
          id={item.id}
          onEdit={onEdit}
          onClose={onClose}
          subTitle={item.subTitle}
          title={item.title}
        />
      ))}
    </VStack>
  );
};
