import cls from "./NewsPage.module.scss";
import { useTranslation } from "react-i18next";
import classNames from "classnames";
import { HStack, VStack } from "shared/ui/Stack";
import { AppLink, Text, TextTheme } from "shared/ui/TextViews";
import { useState } from "react";
import { Button, ButtonTheme } from "../../../../shared/ui/Button/Button";
import { Outlet, useLocation, useParams } from "react-router-dom";
import { ReactComponent as ArrowIcon } from "shared/assets/icons/arrow.svg";
import { ButtonLink } from "../../../../shared/ui/ButtonLink/ButtonLink";
import { AppRoutes, routes } from "../../../../shared/const/router";

interface NewsPageProps {
  className?: string;
}

export const NewsPage = ({ className }: NewsPageProps) => {
  const { t } = useTranslation();
  const location = useLocation();
  const { id } = useParams<{ id: string }>();
  let content = (
    <>
      <Text>News</Text>
      <ButtonLink to={routes[AppRoutes.CREATE_NEWS]()}>Create a new</ButtonLink>
    </>
  );
  if (id) {
    content = <Text>#{id}</Text>;
  }
  return (
    <VStack gap={"45"} className={classNames(cls.NewsPage, className)}>
      <HStack gap={"40"}>
        {content}
        {location.pathname !== routes[AppRoutes.NEWS]() && (
          <AppLink
            theme={TextTheme.INACTIVE}
            direction={"reverse"}
            arrowColor={"#676067"}
            to={routes[AppRoutes.NEWS_LIST]()}
          >
            Go back
          </AppLink>
        )}
      </HStack>
      <Outlet />
    </VStack>
  );
};
