import cls from "./PodcastList.module.scss";
import classNames from "classnames";
import { useSelector } from "react-redux";
import { getPodcasts } from "../../model/selectors/selectors";
import { VStack } from "../../../../shared/ui/Stack";
import { PodcastItem } from "../PodcastItem/PodcastItem";

interface PodcastListProps {
  className?: string;
  onClose?: () => void;
  onEdit?: (id: number) => void;
}

export const PodcastList = ({
  className,
  onEdit,
  onClose,
}: PodcastListProps) => {
  const podcasts = useSelector(getPodcasts);
  return (
    <VStack gap={"20"} className={classNames(cls.PodcastList, className)}>
      {podcasts.map((podcast, index) => (
        <PodcastItem
          onEdit={onEdit}
          onClose={onClose}
          key={index}
          podcast={podcast}
        />
      ))}
    </VStack>
  );
};
