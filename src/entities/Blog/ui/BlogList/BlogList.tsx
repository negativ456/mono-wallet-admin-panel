import cls from "./BlogList.module.scss";
import classNames from "classnames";
import { VStack } from "../../../../shared/ui/Stack";
import { useSelector } from "react-redux";
import { getBlogs } from "../../model/selectors/selectors";
import { BlogItem } from "../BlogItem/BlogItem";

interface BlogListProps {
  className?: string;
  onClose?: () => void;
  onEdit?: (id: number) => void;
}

export const BlogList = ({ className, onEdit, onClose }: BlogListProps) => {
  const blogs = useSelector(getBlogs);
  return (
    <VStack gap={"20"} className={classNames(cls.BlogList, className)}>
      {blogs.map((blog, index) => (
        <BlogItem onEdit={onEdit} onClose={onClose} key={index} blog={blog} />
      ))}
    </VStack>
  );
};
