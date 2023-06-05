import cls from "./RoadmapManage.module.scss";
import { useTranslation } from "react-i18next";
import classNames from "classnames";
import { HStack, VStack } from "../../../../shared/ui/Stack";
import { AppLink, Text, TextTheme } from "../../../../shared/ui/TextViews";
import { ButtonLink } from "../../../../shared/ui/ButtonLink/ButtonLink";
import { Outlet, useLocation, useParams } from "react-router-dom";
import { AppRoutes, routes } from "../../../../shared/const/router";

interface RoadmapManageProps {
  className?: string;
}

export const RoadmapManage = ({ className }: RoadmapManageProps) => {
  const { t } = useTranslation();
  const { id } = useParams<{ id: string }>();
  const location = useLocation();
  let content = (
    <>
      <Text>Roadmap</Text>
      <ButtonLink to={routes[AppRoutes.CREATE_ROADMAP]()}>
        Create a new
      </ButtonLink>
    </>
  );
  if (id) {
    content = <Text>#{id}</Text>;
  }
  return (
    <VStack gap={"30"} className={classNames(cls.RoadmapManage, className)}>
      <HStack gap={"40"}>
        {content}
        {location.pathname !== routes[AppRoutes.ROADMAP]() && (
          <AppLink
            theme={TextTheme.INACTIVE}
            direction={"reverse"}
            arrowColor={"#676067"}
            to={routes[AppRoutes.ROADMAP_LIST]()}
          >
            Go back
          </AppLink>
        )}
      </HStack>
      <Outlet />
    </VStack>
  );
};
