import cls from "./StatusChangesPage.module.scss";
import { useTranslation } from "react-i18next";
import classNames from "classnames";
import { HStack, VStack } from "../../../../shared/ui/Stack";
import { ButtonLink } from "../../../../shared/ui/ButtonLink/ButtonLink";
import { AppLink, TextTheme } from "../../../../shared/ui/TextViews";
import { TextSize } from "../../../../shared/const/fontSize";
import { Outlet } from "react-router-dom";
import { AppRoutes, routes } from "../../../../shared/const/router";
import { useSelector } from "react-redux";
import { getReports } from "../../../../entities/StatusReport";

interface StatusChangesPageProps {
  className?: string;
}

export const StatusChangesPage = ({ className }: StatusChangesPageProps) => {
  const { t } = useTranslation();
  const reports = useSelector(getReports);
  return (
    <div className={classNames(cls.StatusChangesPage, className)}>
      <HStack align={"start"} max>
        <VStack className={cls.left} gap={"40"}>
          <HStack gap={"20"}>
            <ButtonLink to={"/"}>Status changes</ButtonLink>
            <AppLink
              theme={TextTheme.INACTIVE}
              textSize={TextSize.FS18}
              direction={"reverse"}
              to={"/"}
            >
              Go back
            </AppLink>
          </HStack>
          <VStack gap={"15"}>
            <ButtonLink to={routes[AppRoutes.CREATE_STATUS_CHANGE]()}>
              Create a new
            </ButtonLink>
            {reports.map((item, index) => (
              <ButtonLink
                key={index}
                to={routes[AppRoutes.EDIT_STATUS_CHANGE](
                  item.id?.toString() ?? "1"
                )}
              >
                {item.date}
              </ButtonLink>
            ))}
          </VStack>
        </VStack>
        <Outlet />
      </HStack>
    </div>
  );
};
