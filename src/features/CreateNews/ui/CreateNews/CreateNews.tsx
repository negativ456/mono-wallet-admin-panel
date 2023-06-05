import cls from "./CreateNews.module.scss";
import { useTranslation } from "react-i18next";
import classNames from "classnames";
import { Input } from "../../../../shared/ui/Input/Input";
import { HStack, VStack } from "../../../../shared/ui/Stack";
import { TextArea } from "../../../../shared/ui/TextArea/TextArea";
import { Text } from "../../../../shared/ui/TextViews";
import { TextSize } from "../../../../shared/const/fontSize";
import {
  Button,
  ButtonSize,
  ButtonTheme,
} from "../../../../shared/ui/Button/Button";
import { ReactComponent as AttachIcon } from "shared/assets/icons/attach.svg";
import { Guideline } from "../../../../shared/ui/Guideline/Guideline";
import { useNavigate, useParams } from "react-router-dom";
import { AppRoutes, routes } from "../../../../shared/const/router";
import { useAppDispatch } from "../../../../shared/lib/hooks/useAppDispatch";
import { newsActions } from "../../../../entities/News";
import { useSelector } from "react-redux";
import {
  getNews,
  getNewsById,
  getNewsText,
  getNewsTitle,
} from "../../../../entities/News/model/selectors/selectors";
import { useEffect } from "react";

interface CreateNewsProps {
  className?: string;
}

export const CreateNews = ({ className }: CreateNewsProps) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const dispatch = useAppDispatch();
  const currentNewsItem = useSelector(getNewsById(Number(id)));
  const title = useSelector(getNewsTitle);
  const news = useSelector(getNews);
  const text = useSelector(getNewsText);
  useEffect(() => {
    dispatch(newsActions.setText(""));
    dispatch(newsActions.setTitle(""));
    if (currentNewsItem) {
      dispatch(newsActions.setText(currentNewsItem.text));
      dispatch(newsActions.setTitle(currentNewsItem.title));
    }
  }, [currentNewsItem, dispatch, id]);
  const create = () => {
    dispatch(newsActions.addNews({ title, text, id: news.length + 1 }));
    navigate(routes[AppRoutes.NEWS]());
  };
  const onChangeTitle = (value: string) => {
    dispatch(newsActions.setTitle(value));
  };

  const onChangeText = (value: string) => {
    dispatch(newsActions.setText(value));
  };
  return (
    <VStack max gap={"40"} className={classNames(cls.CreateNews, className)}>
      <Input
        labelSize={"S"}
        onChange={onChangeTitle}
        value={title}
        label={"Title"}
        placeholder={"Enter here"}
      />
      <HStack align={"start"} gap={"30"} max>
        <VStack gap={"40"} max>
          <TextArea
            value={text}
            onChange={onChangeText}
            max
            placeholder={"Enter here"}
            label={"Text"}
          />
          <HStack justify={"between"} max>
            <Button
              textSize={TextSize.FS18}
              size={ButtonSize.XS}
              Prefix={<AttachIcon />}
              theme={ButtonTheme.DARK}
            >
              Add attachments
            </Button>
            <Button
              textSize={TextSize.FS18}
              size={ButtonSize.XS}
              onClick={create}
              theme={ButtonTheme.DARK}
            >
              Create
            </Button>
          </HStack>
        </VStack>
        <Guideline />
      </HStack>
    </VStack>
  );
};
