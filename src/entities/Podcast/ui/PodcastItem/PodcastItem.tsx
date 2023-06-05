import cls from "./PodcastItem.module.scss";
import { useTranslation } from "react-i18next";
import classNames from "classnames";
import { Podcast } from "../../model/types/podcast";
import { InfoBlock } from "../../../../shared/ui/InfoBlock";

interface PodcastItemProps {
  className?: string;
  podcast: Podcast;
  onClose?: () => void;
  onEdit?: (id: number) => void;
}

export const PodcastItem = ({
  className,
  podcast,
  onEdit,
  onClose,
}: PodcastItemProps) => {
  const { t } = useTranslation();
  return (
    <InfoBlock
      onClose={onClose}
      onEdit={onEdit}
      className={classNames(cls.PodcastItem, className)}
      id={podcast.id ?? 1}
      title={podcast.title}
      subTitle={podcast.text}
    />
  );
};
