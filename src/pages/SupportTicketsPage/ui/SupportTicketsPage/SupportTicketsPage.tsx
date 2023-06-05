import cls from "./SupportTicketsPage.module.scss";
import { useTranslation } from "react-i18next";
import classNames from "classnames";
import { HStack, VStack } from "../../../../shared/ui/Stack";
import { AppLink, Text, TextTheme } from "../../../../shared/ui/TextViews";
import { useState } from "react";
import { TicketForm } from "../TicketForm/TicketForm";
import { TextSize } from "../../../../shared/const/fontSize";
import { TicketItem } from "shared/ui/TicketItem/TicketItem";

interface SupportTicketsPageProps {
  className?: string;
}

export const SupportTicketsPage = ({ className }: SupportTicketsPageProps) => {
  const { t } = useTranslation();
  const [selected, setSelected] = useState(0);
  const changeNews = (index: number) => {
    setSelected(index);
  };
  return (
    <div className={classNames(cls.SupportTicketsPage, className)}>
      <HStack align={"start"}>
        <VStack className={cls.left} gap={"40"}>
          <HStack max justify={"between"} gap={"20"}>
            <Text>Support tickets</Text>
            <AppLink
              direction={"reverse"}
              arrowColor={"#676067"}
              textSize={TextSize.FS18}
              theme={TextTheme.INACTIVE}
              to={"/"}
            >
              Go back
            </AppLink>
          </HStack>
          <VStack gap={"15"}>
            {[0, 1, 2, 3].map((item, index) => (
              <TicketItem
                onClick={changeNews}
                number={item}
                key={index}
                sender={"f9f91@gmail.com"}
                active={selected === index}
              />
            ))}
          </VStack>
        </VStack>
        <TicketForm />
      </HStack>
    </div>
  );
};
