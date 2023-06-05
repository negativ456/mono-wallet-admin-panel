import cls from "./MainLayout.module.scss";
import { useTranslation } from "react-i18next";
import classNames from "classnames";
import { HStack, VStack } from "../../../../../shared/ui/Stack";
import { AppLink, Text } from "../../../../../shared/ui/TextViews";
import { Role } from "../Role/Role";
import { UserRole } from "../../../../../entities/User";
import { TextSize } from "../../../../../shared/const/fontSize";
import { Outlet, useLocation } from "react-router-dom";
import { navLinks } from "../../model/const/navLinks";
import { ButtonLink } from "../../../../../shared/ui/ButtonLink/ButtonLink";
import { AppRoutes, routes } from "../../../../../shared/const/router";
import { Light, LightTheme } from "../../../../../shared/ui/Light/Light";

interface MainLayoutProps {
  className?: string;
}

export const MainLayout = ({ className }: MainLayoutProps) => {
  const { t } = useTranslation();
  const location = useLocation();
  return (
    <VStack gap={"45"} className={classNames(cls.MainLayout, className)}>
      <HStack gap={"20"}>
        <Text textSize={TextSize.FS18}>Hello, Kirill</Text>
        <Role role={UserRole.ADMINISTRATOR} />
      </HStack>
      {[
        routes[AppRoutes.CAREER_ANSWERS](),
        routes[AppRoutes.SUPPORT_TICKERS](),
        routes[AppRoutes.STATUS_CHANGES](),
      ].some((route) => location.pathname.includes(route)) ? (
        <Outlet />
      ) : (
        <HStack max align={"start"}>
          <VStack gap={"45"} className={cls.left}>
            <VStack gap={"20"}>
              <Text>Main tools</Text>
              <HStack gap={"20"}>
                <ButtonLink to={routes[AppRoutes.SUPPORT_TICKERS]()}>
                  Support tickets
                </ButtonLink>
                <ButtonLink to={routes[AppRoutes.CAREER_ANSWERS]()}>
                  Career answers
                </ButtonLink>
              </HStack>
            </VStack>
            <VStack gap={"45"}>
              {navLinks.map((link) => (
                <AppLink
                  active={location.pathname.includes(link.link)}
                  key={link.name}
                  to={link.link}
                >
                  {link.name}
                </AppLink>
              ))}
            </VStack>
          </VStack>
          <div className={cls.right}>
            <Outlet />
          </div>
        </HStack>
      )}
      <Light
        size={"S"}
        blur={250}
        theme={LightTheme.GRADIENT}
        left={-316}
        bottom={-224}
      />
    </VStack>
  );
};
