import cls from "./InfoBlock.module.scss";
import { useTranslation } from "react-i18next";
import classNames from "classnames";
import { HStack, VStack } from "../../Stack";
import { Text, TextTheme } from "../../TextViews";
import { TextSize } from "../../../const/fontSize";
import { Button, ButtonTheme } from "../../Button/Button";
import { ReactComponent as EditIcon } from "shared/assets/icons/edit.svg";
import { ReactComponent as CloseIcon } from "shared/assets/icons/close.svg";
interface InfoBlockProps {
  id: number;
  className?: string;
  onEdit?: (id: number) => void;
  onClose?: () => void;
  title: string;
  subTitle: string;
  onlyEdit?: boolean;
}

export const InfoBlock = (props: InfoBlockProps) => {
  const { t } = useTranslation();
  const {
    className,
    id,
    onClose,
    onlyEdit = false,
    title,
    subTitle,
    onEdit,
  } = props;
  return (
    <div className={classNames(cls.InfoBlock, className)}>
      <HStack max justify={"between"}>
        <VStack gap={"5"}>
          <Text
            textSize={TextSize.FS16}
            fontWeight={400}
            textTheme={TextTheme.INACTIVE}
          >
            {subTitle}
          </Text>
          <Text textSize={TextSize.FS16} fontWeight={800}>
            {title}
          </Text>
        </VStack>
        <HStack gap={"20"}>
          <Button
            onClick={() => onEdit?.(id)}
            width={35}
            height={35}
            theme={ButtonTheme.DARK}
          >
            <EditIcon />
          </Button>
          {!onlyEdit && (
            <Button
              onClick={onClose}
              width={35}
              height={35}
              theme={ButtonTheme.DARK}
            >
              <CloseIcon />
            </Button>
          )}
        </HStack>
      </HStack>
    </div>
  );
};
