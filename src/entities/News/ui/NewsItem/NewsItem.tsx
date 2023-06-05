import cls from "./NewsItem.module.scss";
import { useTranslation } from "react-i18next";
import classNames from "classnames";
import { NewsItemType } from "../../model/types/news";
import { HStack, VStack } from "../../../../shared/ui/Stack";
import { Text, TextTheme } from "../../../../shared/ui/TextViews";
import { Button, ButtonTheme } from "../../../../shared/ui/Button/Button";
import { ReactComponent as EditIcon } from "shared/assets/icons/edit.svg";
import { ReactComponent as CloseIcon } from "shared/assets/icons/close.svg";
import { TextSize } from "../../../../shared/const/fontSize";
import { useNavigate } from "react-router-dom";
import { AppRoutes, routes } from "../../../../shared/const/router";

interface NewsItemProps {
  className?: string;
  item: NewsItemType;
}

export const NewsItem = ({ className, item }: NewsItemProps) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const onEdit = () => {
    navigate(routes[AppRoutes.EDIT_NEWS](item.id.toString()));
  };
  return (
    <div className={classNames(cls.NewsItem, className)}>
      <HStack max justify={"between"}>
        <VStack gap={"5"}>
          <Text
            textSize={TextSize.FS16}
            fontWeight={400}
            textTheme={TextTheme.INACTIVE}
          >
            #{item.id}
          </Text>
          <Text textSize={TextSize.FS16} fontWeight={800}>
            {item.text}
          </Text>
        </VStack>
        <HStack gap={"20"}>
          <Button
            onClick={onEdit}
            width={35}
            height={35}
            theme={ButtonTheme.DARK}
          >
            <EditIcon />
          </Button>
          <Button width={35} height={35} theme={ButtonTheme.DARK}>
            <CloseIcon />
          </Button>
        </HStack>
      </HStack>
    </div>
  );
};
