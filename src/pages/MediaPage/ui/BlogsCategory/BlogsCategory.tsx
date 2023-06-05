import cls from "./BlogsCategory.module.scss";
import classNames from "classnames";
import { BlogList } from "../../../../entities/Blog";
import { useNavigate } from "react-router-dom";
import { AppRoutes, routes } from "../../../../shared/const/router";

interface BlogsCategoryProps {
  className?: string;
}

export const BlogsCategory = ({ className }: BlogsCategoryProps) => {
  const navigate = useNavigate();
  const onEdit = (id: number) => {
    navigate(routes[AppRoutes.EDIT_BLOG](id.toString()));
  };
  return (
    <div className={classNames(cls.BlogsCategory, className)}>
      <BlogList onEdit={onEdit} />
    </div>
  );
};
