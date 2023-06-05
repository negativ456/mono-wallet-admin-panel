import cls from "./TicketItem.module.scss";
import { useTranslation } from "react-i18next";
import classNames from "classnames";
import { TextSize } from "../../const/fontSize";
import { Text, TextTheme } from "../TextViews";
import { VStack } from "../Stack";

interface TicketItemProps {
  className?: string;
  number: number;
  sender: string;
  active: boolean;
  onClick: (index: number) => void;
}

export const TicketItem = ({
  className,
  sender,
  number,
  active,
  onClick,
}: TicketItemProps) => {
  const { t } = useTranslation();
  const openTab = (index: number) => () => {
    onClick(index);
  };
  return (
    <VStack
      justify={"center"}
      onClick={openTab(number)}
      className={classNames(cls.TicketItem, className, {
        [cls.active]: active,
      })}
    >
      <Text
        textSize={TextSize.FS18}
        textTheme={active ? TextTheme.INVERTED : TextTheme.PRIMARY}
      >
        #{number} | {sender}
      </Text>
    </VStack>
  );
};
