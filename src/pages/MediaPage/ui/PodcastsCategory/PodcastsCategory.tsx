import cls from "./PodcastsCategory.module.scss";
import classNames from "classnames";
import { useNavigate } from "react-router-dom";
import { AppRoutes, routes } from "../../../../shared/const/router";
import { PodcastList } from "../../../../entities/Podcast";

interface PodcastsCategoryProps {
  className?: string;
}

export const PodcastsCategory = ({ className }: PodcastsCategoryProps) => {
  const navigate = useNavigate();
  const onEdit = (id: number) => {
    navigate(routes[AppRoutes.EDIT_PODCASTS](id.toString()));
  };
  return (
    <div className={classNames(cls.PodcastsCategory, className)}>
      <PodcastList onEdit={onEdit} />
    </div>
  );
};
