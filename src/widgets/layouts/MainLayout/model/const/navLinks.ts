import { AppRoutes, routes } from "../../../../../shared/const/router";

export const navLinks = [
  {
    name: "News manage",
    link: routes[AppRoutes.NEWS](),
  },
  {
    name: "Video / podcasts / blogs",
    link: routes[AppRoutes.MEDIA](),
  },
  {
    name: "Partners list",
    link: routes[AppRoutes.PARTNERS_LIST](),
  },
  {
    name: "Roadmap manage",
    link: routes[AppRoutes.ROADMAP](),
  },
  {
    name: "Coin-list manage",
    link: routes[AppRoutes.COIN_LIST](),
  },
];
