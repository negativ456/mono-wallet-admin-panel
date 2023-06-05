import cls from "./BlogItem.module.scss";
import { useTranslation } from "react-i18next";
import classNames from "classnames";
import { InfoBlock } from "../../../../shared/ui/InfoBlock";
import { Blog } from "../../model/types/blog";

interface BlogItemProps {
  className?: string;
  onClose?: () => void;
  onEdit?: (id: number) => void;
  blog: Blog;
}

export const BlogItem = ({
  className,
  blog,
  onEdit,
  onClose,
}: BlogItemProps) => {
  const { t } = useTranslation();
  return (
    <InfoBlock
      onClose={onClose}
      onEdit={onEdit}
      className={classNames(cls.BlogItem, className)}
      id={blog.id ?? 1}
      title={blog.title}
      subTitle={blog.text}
    />
  );
};
