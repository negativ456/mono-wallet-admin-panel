import cls from "./MediaPage.module.scss";
import { useTranslation } from "react-i18next";
import classNames from "classnames";
import { HStack, VStack } from "../../../../shared/ui/Stack";
import { ButtonLink } from "../../../../shared/ui/ButtonLink/ButtonLink";
import { Outlet, useLocation, useParams } from "react-router-dom";
import { AppRoutes, routes } from "../../../../shared/const/router";
import { AppLink, Text, TextTheme } from "../../../../shared/ui/TextViews";
import { useMemo } from "react";

interface MediaPageProps {
  className?: string;
}

export const MediaPage = ({ className }: MediaPageProps) => {
  const { t } = useTranslation();
  const { id } = useParams<{ id: string }>();
  const location = useLocation();
  const createLink = useMemo(() => {
    if (location.pathname.includes(routes[AppRoutes.PODCASTS_CATEGORY]())) {
      return routes[AppRoutes.CREATE_PODCAST]();
    } else {
      return routes[AppRoutes.CREATE_BLOG]();
    }
  }, [location.pathname]);
  let content = (
    <>
      <ButtonLink to={routes[AppRoutes.VIDEO_CATEGORY]()}>Video</ButtonLink>
      <ButtonLink to={routes[AppRoutes.PODCASTS_CATEGORY]()}>
        Podcast
      </ButtonLink>
      <ButtonLink to={routes[AppRoutes.BLOGS_CATEGORY]()}>Blogs</ButtonLink>
      {(location.pathname === routes[AppRoutes.BLOGS_CATEGORY]() ||
        location.pathname === routes[AppRoutes.PODCASTS_CATEGORY]()) && (
        <ButtonLink to={createLink}>Create a new</ButtonLink>
      )}
    </>
  );
  if (id) {
    content = (
      <>
        <Text>#{id}</Text>
        <AppLink
          theme={TextTheme.INACTIVE}
          direction={"reverse"}
          arrowColor={"#676067"}
          to={routes[AppRoutes.MEDIA]()}
        >
          Go back
        </AppLink>
      </>
    );
  }
  return (
    <VStack max gap={"45"} className={classNames(cls.MediaPage, className)}>
      <HStack gap={"40"}>{content}</HStack>
      <Outlet />
    </VStack>
  );
};
