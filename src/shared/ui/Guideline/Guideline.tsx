import cls from "./Guideline.module.scss";
import { useTranslation } from "react-i18next";
import classNames from "classnames";
import { VStack } from "../Stack";
import { Text, TextTheme } from "../TextViews";
import { TextSize } from "../../const/fontSize";

interface GuidelineProps {
  className?: string;
}

export const Guideline = ({ className }: GuidelineProps) => {
  const { t } = useTranslation();
  return (
    <VStack gap={"20"} className={classNames(cls.Guideline, className)}>
      <Text textSize={TextSize.FS20}>Guideline</Text>
      <VStack gap={"10"}>
        <Text textTheme={TextTheme.INACTIVE} textSize={TextSize.FS16}>
          # bold text
        </Text>
        <Text textTheme={TextTheme.INACTIVE} textSize={TextSize.FS16}>
          _ underline text
        </Text>
        <Text textTheme={TextTheme.INACTIVE} textSize={TextSize.FS16}>
          * italic text
        </Text>
      </VStack>
    </VStack>
  );
};
