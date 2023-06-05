import cls from "./StatusPage.module.scss";
import { useTranslation } from "react-i18next";
import classNames from "classnames";
import { Checkbox } from "../../../../shared/ui/Checkbox/Checkbox";
import { VStack } from "../../../../shared/ui/Stack";
import { ButtonLink } from "../../../../shared/ui/ButtonLink/ButtonLink";
import { TextTheme } from "../../../../shared/ui/TextViews";
import { AppRoutes, routes } from "../../../../shared/const/router";

interface StatusPageProps {
  className?: string;
}

export const StatusPage = ({ className }: StatusPageProps) => {
  const { t } = useTranslation();
  return (
    <VStack gap={"20"} className={classNames(cls.StatusPage, className)}>
      <Checkbox
        orientation={"right"}
        labelTheme={TextTheme.PRIMARY}
        label={"Disable all ‘download’ buttons"}
      />
      <Checkbox
        onChange={(value) => console.log(value)}
        orientation={"right"}
        labelTheme={TextTheme.PRIMARY}
        label={"Disable ‘STATUS’"}
      />
      <ButtonLink to={routes[AppRoutes.STATUS_CHANGES]()}>
        Status changes
      </ButtonLink>
    </VStack>
  );
};
