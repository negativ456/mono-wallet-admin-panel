import cls from "./BlogForm.module.scss";
import classNames from "classnames";
import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch } from "../../../../shared/lib/hooks/useAppDispatch";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  getBlogById,
  getNewBlog,
} from "../../../../entities/Blog/model/selectors/selectors";
import { Form } from "../../../../shared/ui/Form/Form";
import { AppRoutes, routes } from "../../../../shared/const/router";
import { blogActions } from "../../../../entities/Blog";

interface BlogFormProps {
  className?: string;
}

export const BlogForm = ({ className }: BlogFormProps) => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const dispatch = useAppDispatch();
  const newBlog = useSelector(getNewBlog);
  const currentBlog = useSelector(getBlogById(Number(id)));
  const [localLink, setLocalLink] = useState(newBlog.link);

  const onChangeLink = (value: string) => {
    setLocalLink(value);
  };

  const onChangeTitle = (value: string) => {
    dispatch(blogActions.setNewBlog({ title: value }));
  };

  const onChangeText = (value: string) => {
    dispatch(blogActions.setNewBlog({ text: value }));
  };

  const onSaveLink = () => {
    dispatch(blogActions.setNewBlog({ link: localLink }));
  };

  const onSave = () => {
    dispatch(blogActions.updateItem({ id: currentBlog?.id, ...newBlog }));
    navigate(routes[AppRoutes.BLOGS_CATEGORY]());
  };
  const onCreate = () => {
    dispatch(blogActions.addItem(newBlog));
    navigate(routes[AppRoutes.BLOGS_CATEGORY]());
  };

  useEffect(() => {
    dispatch(blogActions.setNewBlog({ title: "", text: "", link: "" }));

    if (currentBlog) {
      dispatch(
        blogActions.setNewBlog({
          title: currentBlog.title,
          text: currentBlog.text,
          link: currentBlog.link,
        })
      );
    }
  }, [currentBlog, dispatch]);
  return (
    <Form
      isEditing={!!id}
      addLink
      onCreate={onCreate}
      onSave={onSave}
      title={newBlog.title}
      text={newBlog.text}
      onChangeTitle={onChangeTitle}
      onChangeText={onChangeText}
      linkValueInput={localLink}
      linkValueState={newBlog.link}
      onChangeLink={onChangeLink}
      onSaveLink={onSaveLink}
      className={classNames(cls.BlogForm, className)}
    ></Form>
  );
};
