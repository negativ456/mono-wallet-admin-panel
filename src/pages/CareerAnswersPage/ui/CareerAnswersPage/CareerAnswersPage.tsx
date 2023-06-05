import cls from "./CareerAnswersPage.module.scss";
import { useTranslation } from "react-i18next";
import classNames from "classnames";
import { HStack, VStack } from "../../../../shared/ui/Stack";
import { AppLink, Text, TextTheme } from "../../../../shared/ui/TextViews";
import { TextSize } from "../../../../shared/const/fontSize";
import { TicketItem } from "../../../../shared/ui/TicketItem/TicketItem";

import { useState } from "react";
import { CareerAnswerForm } from "../CareerAnswersForm/CareerAnswerForm";

interface CareerAnswersPageProps {
  className?: string;
}

export const CareerAnswersPage = ({ className }: CareerAnswersPageProps) => {
  const { t } = useTranslation();
  const [selected, setSelected] = useState(0);
  const changeAnswer = (index: number) => {
    setSelected(index);
  };
  return (
    <div className={classNames(cls.CareerAnswersPage, className)}>
      <HStack align={"start"}>
        <VStack className={cls.left} gap={"40"}>
          <HStack max justify={"between"} gap={"20"}>
            <Text>Career answers</Text>
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
                onClick={changeAnswer}
                key={index}
                number={item}
                sender={"f9f91@gmail.com"}
                active={selected === index}
              />
            ))}
          </VStack>
        </VStack>
        <CareerAnswerForm />
      </HStack>
    </div>
  );
};
